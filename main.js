function confirmLogout() {
  var r = confirm("Are you sure you want to sign out?");
  if(r === true)window.location.href = '/logout';
}
