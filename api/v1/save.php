<?php
// Save ScPL file with new contents
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	$content = $_POST[ 'contents' ];
	if ( !$file_id || !$content ) {
		if ( !$file_id )echo json_response( "error", "No file id was recieved." );
		else echo json_response( "error", "No new file contents were recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		if ( $itemdata ) {
			$type = ucfirst( $itemdata[ 'type' ] );
			$itemtype = $itemdata[ 'type' ];
			$owner = $itemdata[ 'author' ];
			$collab = explode( ",", $itemdata[ 'collab' ] );
			if ( $owner === $id || in_array( $id, $collab ) === true ) {
				$name = $itemdata[ 'name' ];
				if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
				$path = "../../files/$id/$itempath$name";
				if ( file_exists( $path ) ) {
if($account_limit ==== true) echo json_response( "error", "Your account limit of 500 MB has been reached." );
else {
	if ( file_put_contents( "$path", $content ) )echo json_response( "success", "File $name has been saved." );
	else echo json_response( "error", "There was an internal file system error saving $name." );
}
				} else echo json_response( "error", "$type does not appear to exist locally." );
			} else echo json_response( "error", "You do not appear to own that $itemtype." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}
