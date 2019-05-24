<?php
$api = true;
// for api requests, set user id from token not php session
$token = $_POST['token'];
$session = dataArray("tokens",$token,"token");
if($session)$id = $session['user_id'];
else $id = null; // if no user id recieved from token, or no token, null user id
?>
