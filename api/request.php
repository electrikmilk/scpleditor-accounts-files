<?php

// ScPL Editor API

header( "Access-Control-Allow-Origin: *" );
header( "Access-Control-Allow-Headers: access" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Allow-Credentials: true" );
header( "Content-Type: application/json; charset=UTF-8" );

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Get global functions, but don't start php session
$api = true;
require( "../../global.php" );

$token = $_POST[ 'token' ];

function json_response( $status, $message ) {
	if ( $status === "success" )http_response_code( 200 );
	else if ( stripos( $message, "auth" ) === false && stripos( $message, "no files" ) === false )http_response_code( 503 );
	$json = array( "status" => $status, "message" => $message );
	return json_encode( $json );
}

if ( $_POST[ 'key' ] || $_FILES || $_POST['url'] ) {
	$auth = true;
} else if ( !$token ) {
	echo json_response( "error", "No authentication token was received." );
	http_response_code( 401 );
} else {
	$session = dataArray( "tokens", $token, "token" ); // get user_id from token
	if ( $session ) {
		$id = $session[ 'user_id' ];
		$auth = true;
		$token = dataArray( "tokens", $token, "token" );
	} else { // invalid token, return error
		$id = null;
		$auth = false;
		json_response( "error", "Invalid authentication token." );
		http_response_code( 401 );
	}
}
