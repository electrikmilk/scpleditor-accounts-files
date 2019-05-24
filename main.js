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
});

function confirmLogout() {
  var r = confirm("Are you sure you want to sign out?");
  if(r === true)window.location.href = '/logout';
}
