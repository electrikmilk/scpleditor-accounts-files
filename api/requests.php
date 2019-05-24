<?php
// ScPL Editor API
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$session = dataArray("tokens",$_POST['token'],"token"); // get user_id from token
if($session)$id = $session['user_id'];
else $id = null; // if no user id recieved from token, or no token, null user id

function jsonResponse($status,$message) {
  $json = array("status"=>$status,"message"=>$message);
  return json_encode($json);
}
?>
