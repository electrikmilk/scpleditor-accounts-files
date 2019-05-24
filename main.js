$(function () {
  $(".nav-menu").on('click', function (e) {
    $(".side-navigation").toggleClass("open-menu");
    $(this).toggleClass("close-btn");
  		});
});

function confirmLogout() {
  var r = confirm("Are you sure you want to sign out?");
  if(r === true)window.location.href = '/logout';
}
