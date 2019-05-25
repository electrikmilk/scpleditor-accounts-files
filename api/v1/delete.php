<?php
// Delete folder or .scpl file
require( "../request.php" );
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	$type = $_POST[ 'type' ];
	if ( !$file_id ) {
		echo json_response( "error", "No item id was recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		$name = $itemdata[ 'name' ];
		$path = dirname( __FILE__ ) . "/$name";
		if ( $type === "file" ) {
			if ( unlink( $path ) )echo json_response( "success", "File $name was deleted." );
			else echo json_response( "error", "No file id was recieved." );
		} else {
			if ( deleteDir( $path ) )echo json_response( "success", "Folder $name was deleted." );
			else echo json_response( "error", "No file id was recieved." );
		}
	}
}
