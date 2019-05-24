<?php
require("global.php");

// Account management backend

if($action === "createuser") {

  $session_token = randString(20);
  header("Location: https://editor.scpl.dev/?token=$session_token");
}

if($action === "startsession") {

  $session_token = randString(20);
  header("Location: https://editor.scpl.dev/?token=$session_token");
}

?>
