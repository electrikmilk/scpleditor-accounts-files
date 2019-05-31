var itemid;

$(document).ready(function () {
	if (document.addEventListener) { // IE >= 9; other browsers
		document.addEventListener('contextmenu', function (e) {
			e.preventDefault();
		}, false);
	} else { // IE < 9
		document.attachEvent('oncontextmenu', function () {
			alert("You've tried to open context menu");
			window.event.returnValue = false;
		});
	}
	$("#cancel-share").on('click', function (e) {
		$(".modals-container").hide();
	});
	$(".file-list ul li .item-name").contextmenu(function () {
		itemid = this.id;
		var split = this.id.split("-");
		var type = split[0];
		var id = split[1];
		if (type === "folder") {
			$("#share-action").html("Can't share folders yet").addClass("disabled");
		} else {
			$("#share-action").html("Manage collaborators").removeClass("disabled");
		}
		$(".context-menu").slideDown({
			duration: 500,
			easing: "easeInOutQuart"
		});
		$(".context-menu").css('top', mouseY(event) + 'px');
		$(".context-menu").css('left', mouseX(event) + 'px');
		window.event.returnValue = false;
	});
	$(".file-list ul li:not(.list-item-file,.disabled) > div").dblclick(function () {
		$(this).closest("li").toggleClass("open-folder");
	});
	$(".list-item-file").dblclick(function () {
		var id = this.id.replace("file-", "");
		goPage("https://editor.scpl.dev/?file=" + id, true);
	});
});

$(document).bind("click", function (event) {
	$(".context-menu").fadeOut({
		duration: 500,
		easing: "easeInOutQuart"
	});
});

function setID(id) {
	itemid = id;
}

function mouseX(evt) {
	if (evt.pageX) {
		return evt.pageX;
	} else if (evt.clientX) {
		return evt.clientX + (document.documentElement.scrollLeft ?
			document.documentElement.scrollLeft :
			document.body.scrollLeft);
	} else {
		return null;
	}
}

function mouseY(evt) {
	if (evt.pageY) {
		return evt.pageY;
	} else if (evt.clientY) {
		return evt.clientY + (document.documentElement.scrollTop ?
			document.documentElement.scrollTop :
			document.body.scrollTop);
	} else {
		return null;
	}
}

function newFile() {
	showMessage("files-message", false);
	var filename = prompt("Enter a filename:");
	if (filename) {
		$(":input, :button").prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "files.php",
			data: {
				action: "create",
				name: filename,
				type: "file",
				contents: "@Color lightpurple\n@Icon wand"
			},
			success: function (response) {
				$(":input, :button").prop('disabled', false);
				console.log(response);
				if (response.includes(".scpl")) {
					listFiles();
					showMessage("files-message", true, "Created file " + filename + ".", "success");
				} else {
					showMessage("files-message", true, response, "error");
				}
			},
			error: function (data) {
				$(":input, :button").prop('disabled', false);
				showMessage("files-message", true, "There was a backend error creating the file.", "error");
			}
		});
	} else {
		showMessage("files-message", true, "You must enter a file name.", "error");
	}
}

function newFolder() {
	showMessage("files-message", false);
	var foldername = prompt("Enter a folder name:");
	if (foldername) {
		$(":input, :button").prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "files.php",
			data: {
				action: "create",
				name: foldername,
				type: "folder"
			},
			success: function (response) {
				$(":input, :button").prop('disabled', false);
				if (response.includes(".")) {
					showMessage("files-message", true, response, "error");
				} else {
					listFiles();
					showMessage("files-message", true, "Created folder " + foldername + ".", "success");
				}
			},
			error: function (data) {
				$(":input, :button").prop('disabled', false);
				showMessage("files-message", true, "There was a backend error creating the folder.", "error");
			}
		});
	} else {
		showMessage("files-message", true, "You must enter a folder name.", "error");
	}
}

function listUsers() {
	var query = $("#users-search").val();
	$(".users-list").html(load);
	$.ajax({
		type: "POST",
		url: "files.php",
		data: {
			action: "users",
			query: query
		},
		success: function (response) {
			$(".users-list").html(response);
			$(":input, :button").prop('disabled', false);
			$(".users-list .user").on('click', function (e) {
				if ($(".collab-list").html() === "No one") {
					$(".collab-list").html("");
				}
				var user = $(this).html();
				var collab = $("#file-collab").val();
				var id = this.id;
				if (!collab.includes(id)) {
					if (collab !== "") {
						$("#file-collab").val(collab + "," + id);
					} else {
						$("#file-collab").val(id);
					}
					$(".collab-list").append("<div class='file-collaborator' id='user-" + id + "'><div>" + user + "</div><div class='collab-close' data-user='" + id + "'>&times;</div></div>");
				}
			});
		},
		error: function (data) {
			$(".users-list").html("<div class='empty-list'>Error loading list.</div>");
			$(":input, :button").prop('disabled', false);
			showMessage("files-message", false, "There was an error loading user list.", "error");
		}
	});
}

function changeAccess() {
	var collab = $("#file-collab").val();
	if (!$("#file-collab").val()) {
		collab = "NULL";
	}
	$(":input, :button").prop('disabled', true);
	var split = itemid.split("-");
	var type = split[0];
	var id = split[1];
	$.ajax({
		type: "POST",
		url: "files.php",
		data: {
			action: "access",
			id: id,
			collab: collab
		},
		success: function (response) {
			$(":input, :button").prop('disabled', false);
			if (response === "success") {
				$(".modals-container").hide();
				showMessage("files-message", true, "File collaborators changed.", "success");
			} else {
				$(".modals-container").hide();
				showMessage("files-message", true, response, "error");
			}
			$(".collab-list").html("");
			$("#file-collab").val("");
		},
		error: function (data) {
			$(".modals-container").hide();
			showMessage("files-message", true, "Error changing file access.", "error");
			$(":input, :button").prop('disabled', false);
		}
	});
}

function listMove(id) {
	var query = $("move-search").val();
	$.ajax({
		type: "POST",
		url: "files.php",
		data: {
			action: "list",
			movelist: "true",
			moveid: id
		},
		success: function (response) {
			$(".moveto-list").html(response);
			$(".moveto-list ul li .item-name").on('click', function (e) {
				$(".selected-location").removeClass("selected-location");
				$(this).closest("li").addClass("selected-location");
			});
		},
		error: function (data) {
			$(".moveto-list").html("<div class='empty-list'>Error loading files.</div>");
			$(":input, :button").prop('disabled', false);
			showMessage("files-message", false, "There was an error loading user list.", "error");
		}
	});
}

function moveTo(id) {
	if (itemid) {
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		var ulid = $(".selected-location").attr("id").replace("folder-", "").replace("file-", "");
		if (ulid !== "root") {
			var folderid = ulid;
		}
		$("#" + itemid).addClass("loading");
		$(":input, :button").prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "files.php",
			data: {
				action: "move",
				id: id,
				folder: folderid
			},
			success: function (response) {
				$(":input, :button").prop('disabled', false);
				listFiles();
				modal('move-dialog');
				if (response.includes("moved")) {
					showMessage("files-message", true, response, "success");
				} else {
					showMessage("files-message", true, response, "error");
				}
			},
			error: function (data) {
				showMessage("files-message", true, "Error moving item.", "error");
				$(":input, :button").prop('disabled', false);
			}
		});
	}
}

function copy() {
	if (itemid) {
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		var ulid = $("li#" + itemid).closest('ul').attr('id').replace("dir-", "");
		if (ulid !== "root") {
			var folderid = ulid;
		}
		$("#" + itemid).addClass("loading");
		$(":input, :button").prop('disabled', true);
		$.ajax({
			type: "POST",
			url: "files.php",
			data: {
				action: "copy",
				id: id,
				folder: folderid
			},
			success: function (response) {
				$(":input, :button").prop('disabled', false);
				listFiles();
				if (response.includes("copied")) {
					showMessage("files-message", true, response, "success");
				} else {
					showMessage("files-message", true, response, "error");
				}
			},
			error: function (data) {
				console.log(data);
				$(":input, :button").prop('disabled', false);
				showMessage("files-message", true, "There was an error copying the " + type + ".", "error");
			}
		});
	}
}

function deleteItem() {
	if (itemid) {
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		var r = confirm("Are you sure you want to delete this " + type + "?");
		if (r === true) {
			$("li#" + itemid).addClass("loading");
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "files.php",
				data: {
					action: "delete",
					id: id
				},
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					listFiles();
					if (response.includes("deleted")) {
						showMessage("files-message", true, response, "success");
					} else {
						showMessage("files-message", true, response, "error");
					}
				},
				error: function (data) {
					console.log(data);
					$(":input, :button").prop('disabled', false);
					showMessage("files-message", true, "There was an error deleting the " + type + ".", "error");
				}
			});
		}
	}
}

function share() {
	if (itemid) {
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		var collab = $("li#" + type + "-" + id).attr('data-collab');
		modal('share-dialog');
		$(".collab-list").html("Loading...");
		$.ajax({
			type: "POST",
			url: "files.php",
			data: {
				action: "collab",
				id: id
			},
			success: function (response) {
				$(".collab-list").html(response);
				$("#file-collab").val(collab);
				$(".collab-close").on('click', function (e) {
					var id = $(this).attr('data-user');
					$("#user-" + id).remove();
					if ($("#file-collab").val().includes(",")) {
						$("#file-collab").val(removeValue($("#file-collab").val(), id));
					} else {
						$("#file-collab").val("");
					}
					if ($(".collab-list").html() === "") {
						$(".collab-list").html("No one");
					}
				});
			},
			error: function (data) {
				$(".collab-list").html("<div class='empty-list'>Error loading collaborators.</div>");
				$(":input, :button").prop('disabled', false);
				showMessage("files-message", false, "There was an error loading user list.", "error");
			}
		});
	}
}


function rename() {
	if (itemid) {
		var name = $("li#" + itemid).attr("data-name");
		var newname = prompt("New name for the file", name);
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		if (newname) {
			$("li#" + itemid).addClass("loading");
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "files.php",
				data: {
					action: "rename",
					name: newname,
					id: id
				},
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					listFiles();
					if (response.includes("Renamed")) {
						showMessage("files-message", true, response, "success");
					} else {
						showMessage("files-message", true, response, "error");
					}
				},
				error: function (data) {
					console.log(data);
					$(":input, :button").prop('disabled', false);
					showMessage("files-message", true, "There was an error renaming the " + type + ".", "error");
				}
			});
		}
	}
}

function move() {
	if (itemid) {
		var split = itemid.split("-");
		var type = split[0];
		var id = split[1];
		var collab = $("li#" + type + "-" + id).attr('data-collab');
		modal('move-dialog');
		$(".moveto-list").html("<div class='empty-list'>Loading...</div>");
		listMove(id);
	}
}

function allowDrop(ev) {
		ev.preventDefault();
}

function drag(ev) {
		ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev, target) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		var target = target.id.replace("folder-", "");
		var item = data.replace("folder-", "").replace("file-", "");
			$("#" + data).addClass("loading");
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "files.php",
				data: {
					action: "move",
					id: item,
					folder: target
				},
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					listFiles();
					if (response.includes("moved")) {
						showMessage("files-message", true, response, "success");
					} else {
						showMessage("files-message", true, response, "error");
					}
				},
				error: function (data) {
					showMessage("files-message", true, "Error moving item.", "error");
					$(":input, :button").prop('disabled', false);
				}
			});
}
