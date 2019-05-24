<?php
// ScPL Editor API

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Get global functions, but don't start php session
$api = true;
require("../global.php");

$token = $_POST['token'];

function json_response($status,$message) {
  $json = array("status"=>$status,"message"=>$message);
  return json_encode($json);
}

if(!$token) {
  echo json_response("error","No authentication token was received.");
} else {
  $session = dataArray("tokens",$token,"token"); // get user_id from token
  if($session)$id = $session['user_id'];
  else { // if no user id recieved from token, or no token, null user id
    $id = null;
    json_response("error","Invalid authentication token.");
  }
}
?>
