<?php
// Return authentication token
require( "../request.php" );
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
