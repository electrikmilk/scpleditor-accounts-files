<?php
// Retrieve .scpl file contents
require( "../request.php" );
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	if ( !$file_id ) {
		echo json_response( "error", "No file id was recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		$name = $itemdata[ 'name' ];
		$path = dirname( __FILE__ ) . "/$name";
		$contents = file_get_contents( $path );
		$file = array( "contents" => $contents );
		echo json_encode( $file );
	}
}