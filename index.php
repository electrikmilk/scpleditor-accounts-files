<?php include("global.php"); ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8" />

<?php include("metadata.php"); ?>

<script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>

<link rel="stylesheet" href="main.css"/>
<script type="text/javascript" src="main.js"></script>

<link rel="shortcut icon" href="favicon/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"/>
<link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
<link rel="manifest" href="favicon/site.webmanifest">
<link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#007aff">
<meta name="msapplication-TileColor" content="#1e1f57">
<meta name="theme-color" content="#1e1f57">

<link rel="manifest" href="favicon/manifest.json" />

</head>
<body>

<?php
if($_SESSION) {
?>
<div class="config-container">
<div class="main-navigation">
  <div class='page-menu'></div>
  <div class="editor-title">ScPL Editor</div>
  <div class="nav-title"><?php echo $nav_title; ?></div>
</div>
<div class="main-container">
  <div class="side-navigation">
      <div class="navigation-subhead"><div>Your Account</div></div>
      <div class="menu-container">
        <ul>
          <a href="/settings"><li class="gear-icon"><div>Account Settings</div></li></a>
          <a href="javascript:;" onclick="confirmLogout();"><li class="exit-icon"><div>Sign Out</div></li></a>
        </ul>
      </div>
      <div class="navigation-subhead">Help Pages</div>
      <div class="menu-container">
        <ul>
          <a href="https://scpl.dev/" target="_blank" rel="noopener"><li class="web-icon"><div>Homepage</div></li></a>
          <a href="https://docs.scpl.dev/gettingstarted.html" target="_blank" rel="noopener"><li class="web-icon"><div>Getting Started</div></li></a>
          <a href="https://docs.scpl.dev/" target="_blank" rel="noopener"><li class="web-icon"><div>Documentation</div></li></a>
        </ul>
      </div>
  </div>
  <div class="page-container">
    <?php
    if(!$_SESSION && $page !== "login" && $page !== "sign-up" && $page !== "confirm" && $page !== "forgot" && $page !== "reset") {
      header("Location: /login");
    } else if($_SESSION) {
      if(!$page)require("pages/settings.php");
      else require("pages/$page.php");
    } else {
      require("pages/$page.php");
    }
    ?>
  </div>
</div>
</div>

<?php
} else {
  if($page === "settings")header("Location: /login");
?>
<div class="external-form">
  <div>
  <?php require("pages/$page.php"); ?>
  </div>
</div>
<?php
}
?>
</body>
</html>
