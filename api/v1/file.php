<?php
// Retrieve ScPL file contents
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	if ( !$file_id ) {
		echo json_response( "error", "No file id was recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		if ( $itemdata ) {
			$owner = $itemdata[ 'author' ];
			$collab = explode( ",", $itemdata[ 'collab' ] );
			if ( $owner === $id || in_array( $id, $collab ) === true ) {
				$name = $itemdata[ 'name' ];
				$type = ucfirst( $itemdata[ 'type' ] );
				$itemtype = $itemdata[ 'type' ];
				if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
				$path = "../../files/$id/$itempath$name";
				if ( file_exists( $path ) ) {
					$contents = file_get_contents( $path );
					echo json_encode( array( "contents" => $contents ) );
				} else echo json_response( "error", "$type $name does not appear to exist locally." );
			} else echo json_response( "error", "You do not appear to own this $itemtype or it has not been shared with you." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}
