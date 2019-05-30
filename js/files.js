var itemid;

$(document).ready(function() {
  if (document.addEventListener) { // IE >= 9; other browsers
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } else { // IE < 9
        document.attachEvent('oncontextmenu', function() {
            alert("You've tried to open context menu");
            window.event.returnValue = false;
        });
    }
  $(".file-list ul li").contextmenu(function() {
    itemid = this.id;
    $(".context-menu").show();
    $(".context-menu").css('top',mouseY(event) + 'px');
    $(".context-menu").css('left',mouseX(event) + 'px');
    window.event.returnValue = false;
  });
  $(".file-list ul li:not(.list-item-file,.disabled) > div").dblclick(function () {
            $(this).closest("li").toggleClass("open-folder");
        });
        $(".list-item-file").dblclick(function () {
          var id = this.id.replace("file-","");
        goPage("https://editor.scpl.dev/?file="+id,true)
              });
  $( ".file-list ul li" ).sortable({
        connectWith : ".file-list ul li"
      });
  $(".move").on('click', function (e) {
		var token = "kDzZ2d4FRW";
		$.ajax({
			type: "POST",
			url: "/api/v1/move",
			data: {
				token: token,
				item_id: "IrX5DA73t1u3aOQyKnPM",
				//folder_id: "WQApghH2pQs8O8JWNTUj"
			},
			success: function (response) {
				$(":input, :button").prop('disabled', false);
				alert("API response: " + JSON.stringify(response));
			},
			error: function (data) {
				$(":input, :button").prop('disabled', false);
				alert("error moving file");
			}
		});
	});
  $("#delete-action").on('click', function (e) {
    if(itemid) {
      var split = itemid.split("-");
      var type = split[0];
      var id = split[1];
      var r = confirm("Are you sure you want to delete this "+type+"?");
      if(r === true) {
        $(":input, :button").prop('disabled', true);
        $.ajax({
          type: "POST",
          url: "files.php",
          data: {
            action: "delete",
            type: type,
            id: id
          },
          success: function (response) {
            $(":input, :button").prop('disabled', false);
            listFiles();
            if(response.includes("deleted")) {
              showMessage("files-message",true, response, "success");
            } else {
              showMessage("files-message",true, response, "error");
            }
          },
          error: function (data) {
            console.log(data);
            $(":input, :button").prop('disabled', false);
            showMessage("files-message",true, "There was an error deleting the "+type+".", "error");
          }
        });
      }
    }
  });
  $("#rename-action").on('click', function (e) {
    if(itemid) {
      var name = $("#"+itemid).attr("data-name");
      var newname = prompt("New name for the file",name);
      var split = itemid.split("-");
      var type = split[0];
      var id = split[1];
      if(newname) {
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
            if(response.includes("Renamed")) {
              showMessage("files-message",true, response, "success");
            } else {
              showMessage("files-message",true, response, "error");
            }
          },
          error: function (data) {
            console.log(data);
            $(":input, :button").prop('disabled', false);
            showMessage("files-message",true, "There was an error renaming the "+type+".", "error");
          }
        });
      }
    }
  });
});

$(document).bind("click", function(event) {
    $(".context-menu").hide();
});

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
