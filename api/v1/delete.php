<?php
// Delete folder or ScPL file
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$file_id = $_POST[ 'id' ];
	if ( !$file_id ) {
		echo json_response( "error", "No item id was recieved." );
	} else {
		$itemdata = dataArray( "files", $file_id, "id" );
		if ( $itemdata ) {
			$owner = $itemdata[ 'author' ];
			if ( $owner === $id ) {
				$name = $itemdata[ 'name' ];
				$type = ucfirst( $itemdata[ 'type' ] );
				$itemtype = $itemdata[ 'type' ];
				if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
				$path = "../../files/$id/$itempath$name";
				if ( file_exists( $path ) ) {
					if ( mysqli_query( $connect, "delete from data.files where id = '" . $file_id . "'" ) ) {
						if ( $itemtype === "file" ) {
							if ( unlink( $path ) )echo json_response( "success", "File $name was deleted." );
							else echo json_response( "error", "There was an internal file system error deleting file $name." );
						} else {
							if ( deleteDir( $path ) )echo json_response( "success", "Folder $name was deleted." );
							else echo json_response( "error", "There was an internal file system error deleting folder $name." );
						}
					} else echo json_response( "error", "There was a internal database error deleting $itemtype $name." );
				} else echo json_response( "error", "$type does not appear to exist." );
			} else echo json_response( "error", "You do not appear to own that $itemtype." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}