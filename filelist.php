<?php
require( "global.php" );
$session_token = randString( 10 );

// Account files backend
if ( $_SERVER[ 'SERVER_ADDR' ] != $_SERVER[ 'REMOTE_ADDR' ] ) {
	$this->output->set_status_header( 400, 'No Remote Access Allowed' );
	exit; //just for good measure
} else {
	if ( $action === "list" ) {

	}
}