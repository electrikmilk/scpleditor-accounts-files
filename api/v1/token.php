<?php
// Return authentication token
require( "../request.php" );
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if ( $auth === true ) {
	$key = $_POST[ 'key' ];
	if ( !$key ) {
		echo json_response( "error", "No token key was recieved." );
	} else {
		$token = dataArray("tokens",$key,"id");
		if(!$token) {
			echo json_response( "error", "Invalid token key." );
		} else {
			$token_json = array("token"=>$token['token']);
			json_encode($token_json);
		}
	}
}
