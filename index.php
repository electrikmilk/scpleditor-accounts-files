<?php include("global.php"); ?>
<!doctype html>
<html>
<head>

<?php include("metadata.php"); ?>

<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"/>
<link rel="icon" href="favicon.ico"/>

</head>
<body>

<div class="config-container">
<div class="main-navigation">
<?php
if($_SESSION) echo"<div class='page-menu'></div>";
else echo"<div class='out-menu'></div>";
?>
<div class="nav-title"><?php echo $nav_title; ?></div>
</div>
<div class="side-navigation">
  <ul>
    <div class="navigation-subhead">Account</div>
    <li class="page-settings">Settings</li>
    <li class="page-settings">Sign out</li>
    <div class="navigation-subhead">Help Pages</div>
    <li class="page-home">Homepage</li>
    <li class="page-started">Getting Started</li>
    <li class="page-docs">Documentation</li>
  </ul>
</div>
<div class="page-container">
  <?php
  if(!$_SESSION && $page !== "login" && $page !== "sign-up" && $page !== "confirm" && $page !== "forgot" && $page !== "reset") {
    header("Location: /login");
  } else if($_SESSION) {
    if(!$page)require("settings.php");
    else require("$page.php");
  } else {
    require("$page.php");
  }
  ?>
</div>
</div>

</body>
</html>
