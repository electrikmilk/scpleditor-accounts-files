var field_count = 0;
var load = "<div class='spinner'><div class='bar1'/><div class='bar2'/><div class='bar3'/><div class='bar4'/><div class='bar5'/><div class='bar6'/><div class='bar7'/><div class='bar8'/><div class='bar9'/><div class='bar10'/><div class='bar11'/><div class='bar12'/></div>";

$(function () {
	$(".nav-menu").on('click', function (e) {
		$(".side-navigation").toggleClass("open-menu");
		$(this).toggleClass("close-btn");
	});
	$(".mask-btn").on('click', function (e) {
		if ($("#password").prop("type") === "password") {
			$("#password").prop("type", "text");
		} else {
			$("#password").prop("type", "password");
		}
		$(this).toggleClass("show-pw");
	});
	$('input, textarea').on('input', function () {
		var thislength = $(this).val().length;
		var limit = $(this).attr('data-limit');
		if (thislength > limit) {
			$(this).addClass("require-input");
		} else {
			$(this).removeClass("require-input");
		}
		$("#limit-" + this.id).html(thislength + " / " + limit + " character limit");
	});
	// Sign up / login
	$("#login-form").on("submit", function (event) {
		event.preventDefault();
		$("#login-error").fadeOut();
		$(".require-error").fadeOut();
		$(".login-inputs").removeClass("wrong-password");
		var checkinputs = checkInputs(this.id);
		var checklimits = checkCount(this.id);
		var form = $("form#" + this.id);
		var formdata = form.serialize();
		if (checkinputs === true && checklimits === true) {
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "auth.php",
				data: formdata,
				success: function (response) {
					console.log(response);
					if (response.includes("key") === true) {
						window.location = response;
					} else {
						$(":input, :button").prop('disabled', false);
						$("#login-error").html(response);
						$("#login-error").fadeIn();
						if (response === "Incorrect Password") {
							$(".login-inputs").addClass("wrong-password");
						}
					}
				},
				error: function (data) {
					$(":input, :button").prop('disabled', false);
					$("#login-error").html("Error logging you in, please try again later.");
					$("#login-error").fadeIn();
				}
			});
		} else { // do nothing, the error messages are handled by another function
			$(":input, :button").prop('disabled', false);
			console.log("Required inputs are empty or an input is beyond it's character limit");
		}
		event.preventDefault();
	});
	$("#signup-form").on("submit", function (event) {
		event.preventDefault();
		$("#signup-error").fadeOut();
		var checkinputs = checkInputs(this.id);
		var checklimits = checkCount(this.id);
		var form = $("form#" + this.id);
		var formdata = form.serialize();
		if (checkinputs === true && checklimits === true) {
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "auth.php",
				data: formdata,
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					if (response.includes("editor")) {
						window.location = response;
					} else {
						$("#signup-error").html(response);
						$("#signup-error").fadeIn();
					}
				},
				error: function (data) {
					$(":input, :button").prop('disabled', false);
					$("#signup-error").html("Backend error creating your account.");
					$("#signup-error").fadeIn();
				}
			});
		} else { // do nothing, the error messages are handled by another function
			console.log("Required inputs are empty or an input is beyond it's character limit");
			$(":input, :button").prop('disabled', false);
		}
		event.preventDefault();
	});
	$("#user-settings-form").on("submit", function (event) {
		var form = $("form#" + this.id);
		var formdata = form.serialize();
		event.preventDefault();
		$("#settings-message").fadeOut();
		$("#settings-message").attr('class', 'message');
		$(":input, :button").prop('disabled', true);
		var checkinputs = checkInputs(this.id);
		var checklimits = checkCount(this.id);
		if (checkinputs === true && checklimits === true) {
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "auth.php",
				data: formdata,
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					if (response === "saved") {
						$("#username-title").html($("#username").val());
						$("#settings-message").addClass("success");
						$("#settings-message").html("Account changes saved!");
						$("#settings-message").fadeIn();
						setTimeout(function () {
							$("#settings-message").fadeOut();
						}, 3000);
					} else {
						$("#settings-message").addClass("error");
						$("#settings-message").html(response);
						$("#settings-message").fadeIn();
					}
				},
				error: function (data) {
					$(":input, :button").prop('disabled', false);
					$("#settings-message").addClass("error");
					$("#settings-message").html("Oops! There was an error saving your changes, please try again later.");
					$("#settings-message").fadeIn();
				}
			});
		} else { // do nothing, the error messages are handled by another function
			console.log("Required inputs are empty or an input is beyond it's character limit");
		}
		event.preventDefault();
	});
	$("#forgot-password-form").on("submit", function (event) {
		event.preventDefault();
		$("#forgot-error").fadeOut();
		var form = $("#forgot-password-form");
		var formdata = form.serialize();
		var account = $("#forgot-email").val();
		if (account) {
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "auth.php",
				data: formdata,
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					if (response === "sent") {
						$("#forgot-success").fadeIn();
						$("#forgot-success").html("Awesome! A reset password link has been sent to your email address. Be sure to check your junk/spam folder.");
					} else {
						$("#forgot-error").html(response);
						$("#forgot-error").fadeIn();
					}
				},
				error: function (data) {
					$(":input, :button").prop('disabled', false);
					$("#forgot-error").html("Backend error sending the email. Please try again later.");
					$("#forgot-error").fadeIn();
				}
			});
		} else {
			$("#forgot-error")("Please enter your email address.");
			$("#forgot-error").fadeIn();
		}
	});
	$("#reset-password-form").on("submit", function (event) {
		event.preventDefault();
		$("#reset-error").fadeOut();
		var form = $("#reset-password-form");
		var formdata = form.serialize();
		var password = $("#password").val();
		if (password) {
			$(":input, :button").prop('disabled', true);
			$.ajax({
				type: "POST",
				url: "/auth.php",
				data: formdata,
				success: function (response) {
					$(":input, :button").prop('disabled', false);
					if (response === "reset") {
						window.location = '/login';
					} else {
						$("#reset-error").html(response);
						$("#reset-error").fadeIn();
					}
				},
				error: function (data) {
					$(":input, :button").prop('disabled', false);
					$("#reset-error").html("Backend error resetting your password. Please try again later.");
					$("#reset-error").fadeIn();
				}
			});
		} else {
			$(":input, :button").prop('disabled', false);
			$("#reset-error")("Please enter a new password.");
			$("#reset-error").fadeIn();
		}
	});
});

function showMessage(id, toggle = true, newtext = false, type = false, fade = true, timeout = 3000) {
	if (id) {
		var element = ".message#" + id;
		if (timeout !== 3000) {
			timeout = timeout + '000';
		}
		if(type !== false) {
			$(element).attr("class","message");
			$(element).addClass(type);
		}
		if (newtext !== false) {
			$(element).html(newtext);
		}
		if (toggle === true) {
			$(element).fadeIn();
		} else {
			$(element).fadeOut();
		}
		if (fade !== false) {
			setTimeout(function () {
				$(element).fadeOut();
			}, timeout);
		}
	}
}

function confirmLogout() {
	var r = confirm("Are you sure you want to sign out?");
	if (r === true) window.location.href = '/logout';
}

function checkInputs(id) {
	var filled;
	var extra;
	if (id === "submission-form") {
		var extra = "<p></p>";
	}
	$("form#" + id + " input, form#" + id + " textarea").each(function () {
		if ($(this).attr('data-require') == 'true' && !$(this).val()) {
			console.log("false");
			$(this).addClass("require-input");
			if (!$("#error-" + this.id).length) {
				if (extra) {
					$(this).after(extra + "<br/><div class='require-error' id='error-" + this.id + "'>This field is required</div>");
				} else {
					$(this).after("<br/><div class='require-error' id='error-" + this.id + "'>This field is required</div>");
				}
			} else {
				$("#error-" + this.id).fadeIn();
			}
			// if (field_count === 0) {
			// 	scrollOn(this.id);
			// }
			filled = "false";
		} else {
			console.log("true");
			$(this).removeClass("require-input");
			$("#error-" + this.id).fadeOut();
			if (filled !== "false") {
				filled = "true";
			}
		}
		++field_count;
	});
	console.log("all required inputs are filled: " + filled);
	if (filled === "true") {
		return true;
	} else {
		return false;
	}
}

function checkCount(id) {
	var limited;
	$("form#" + id + " input, form#" + id + " textarea").each(function () {
		if ($(this).attr('data-limit') < $(this).val().length) {
			var this_limit = $(this).attr('data-limit');
			$(this).addClass("require-input");
			if (!$("#error-limit" + this.id).length) {
				$(this).after("<br/><div class='require-error' id='error-limit" + this.id + "'>Field must be under " + this_limit + " characters</div>");
			} else {
				$("#error-limit" + this.id).fadeIn();
			}
			limited = "false";
		} else {
			$(this).removeClass("require-input");
			$("#error-limit" + this.id).fadeOut();
			if (limited !== "false") {
				limited = "true";
			}
		} // console.log("all inputs are under their character limits: " + limited);
	});
	if (limited === "true") {
		return true;
	} else {
		return false;
	}
}

function goPage(url, newtab) {
	if (newtab) {
		var win = window.open(url, '_blank');
		win.focus();
	} else {
		window.location = url;
	}
}

function listFiles() {
	var query = $("#files-search").val();
	$(".file-list").html(load);
	$.ajax({
		type: "POST",
		url: "files.php",
		data: {
			action: "list",
			query: query
		},
		success: function (response) {
			$(".file-list").html(response);
			$(":input, :button").prop('disabled', false);
		},
		error: function (data) {
			$(":input, :button").prop('disabled', false);
			showMessage("files-message",false, "There was an error loading your files.", "error");
		}
	});
}
