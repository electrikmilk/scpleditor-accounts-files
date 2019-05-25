var field_count = 0;

$(function () {
  $(".nav-menu").on('click', function (e) {
    $(".side-navigation").toggleClass("open-menu");
    $(this).toggleClass("close-btn");
  		});
      $(".mask-btn").on('click', function (e) {
        if($("#password").prop("type") === "password") {
          $("#password").prop("type","text");
        } else {
          $("#password").prop("type","password");
        }
        $(this).toggleClass("show-pw");
      });
      $('input, textarea').on('input', function () {
		var thislength = $(this).val().length;
		var limit = $(this).attr('data-limit');
		if (thislength > limit) {
			$(this).addClass("require-input");
		}
		$("#limit-" + this.id).html(thislength + " / " + limit + " character limit");
	});

      // Sign up / login
	$("#login-form").on("submit", function (event) {
    event.preventDefault();
    $("#login-error").fadeOut();
    $(".require-error").fadeOut();
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
            if(response === "Incorrect Password") {
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
			$.ajax({
				type: "POST",
				url: "/auth.php",
				data: formdata,
				success: function (response) {
					if (response.includes("editor")) {
						window.location = response;
					} else {
						$("#signup-error").html(response);
						$("#signup-error").fadeIn();
						$('html,body').animate({
							scrollTop: $("#signup-error").offset().top - 80
						});
					}
				},
				error: function (data) {
          $("#signup-error").html("Backend error creating your account.");
					$("#signup-error").fadeIn();
					$('html,body').animate({
						scrollTop: $("#signup-error").offset().top
					});
				}
			});
		} else { // do nothing, the error messages are handled by another function
			//console.log("Required inputs are empty or an input is beyond it's character limit");
		}
		event.preventDefault();
	});

	$("#user-settings-form").on("submit", function (event) {
		$("#settings-error").fadeOut();
		var checkinputs = checkInputs(this.id);
		var checklimits = checkCount(this.id);
		var form = $("form#" + this.id);
		var formdata = form.serialize();
		if (checkinputs === true && checklimits === true) {
			$.ajax({
				type: "POST",
				url: "auth.php",
				data: formdata,
				success: function (response) {
					if (response === "saved") {
						modal('account-settings');
						modal('user-settings');
						showMessage("settings-success", "Account settings saved!", true);
					} else {
						showMessage("settings-error", response, true);
					}
				},
				error: function (data) {
					$("#settings-error").html("Oops! There was an error saving your changes, please try again later.");
					$("#settings-error").fadeIn();
				}
			});
		} else { // do nothing, the error messages are handled by another function
			//console.log("Required inputs are empty or an input is beyond it's character limit");
		}
		event.preventDefault();
	});
	$("#forgot-password-form").on("submit", function (event) {
		event.preventDefault();
		$(".require-error").fadeOut();
		$(".login-error").slideUp();
		$(".chooser-message").fadeOut();
		var form = $("#forgot-password-form");
		forgotLoad();
		var account = $("#forgot-field").val();
		if (account) {
			$.ajax({
				type: "POST",
				url: "/accounts/auth.php",
				data: form.serialize(),
				success: function (response) {
					//console.log(response);
					forgotLoad();
					if (response === "go") {
						modal('forgotmodal');
						modal('loginmodal');
						$("#login-success").fadeIn();
						$("#login-success").html("Awesome! A reset password link has been sent to the email address associated with that account.");
					} else if (response === "noaccount") {
						forgotError("That account doesn't appear to exist, try your username or email address instead. If you believe this is an error, <a href='/support/web'>contact us</a>.");
					} else if (response === "noemail") {
						forgotError("This account does not have an email address. Please <a href='/support/web'>report it to us</a>.");
					} else {
						forgotError("An error occurred. Please <a href='/support/web'>report it to us</a>.");
					}
				},
				error: function (data) {
					forgotLoad();
					forgotError("Sorry, something broke. Please try again later.");
				}
			});
		} else {
			forgotLoad();
			forgotError("Please enter your username or email address.");
		}
	});
});

function confirmLogout() {
  var r = confirm("Are you sure you want to sign out?");
  if(r === true)window.location.href = '/logout';
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
			if (field_count === 0) {
				scrollOn(this.id);
			}
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
				$(this).after("<p class='require-error' id='error-limit" + this.id + "'>Field must be under " + this_limit + " characters</p>");
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
