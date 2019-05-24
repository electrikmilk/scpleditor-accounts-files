<?php
// Save .scpl file with new contents
require( "../request.php" );
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	$content = $_POST[ 'contents' ];
	if ( !$file_id || !$content ) {
		if ( !$file_id )echo json_response( "error", "No file id was recieved." );
		else echo json_response( "error", "No new file contents were recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		$name = $itemdata[ 'name' ];
		$path = dirname( __FILE__ ) . "/$name";
		if ( file_put_contents( "$path", $content ) )echo json_response( "success", " File $name has been saved." );
		else echo json_response( "error", "There was an internal error saving $name." );
	}
}
