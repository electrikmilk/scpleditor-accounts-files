<?php
// Rename folder or ScPL file
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$item_id = $_POST[ 'id' ];
	$new_name = $_POST[ 'name' ];
	if ( !$item_id || !$new_name ) {
		if ( !$item_id )echo json_response( "error", "No item id was recieved." );
		else echo json_response( "error", "No new name for the file was recieved." );
	} else {
		$itemdata = dataArray( "files", $item_id, "id" );
		if ( $itemdata ) {
			$owner = $itemdata[ 'author' ];
			$type = ucfirst( $itemdata[ 'type' ] );
			$itemtype = $itemdata[ 'type' ];
			if ( $owner === $id ) {
				if ( $itemdata[ 'type' ] === "file" )$new_name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) ) . ".scpl";
				else $new_name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) );
				$name = $itemdata[ 'name' ];
				if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
				$path = "../../files/$id/$itempath$name";
				$newpath = str_replace( $name, $new_name, $path );
				if ( file_exists( $path ) ) {
					if ( mysqli_query( $connect, "update data.files set name = '$new_name' where id = '$item_id'" ) ) {
						if ( rename( $path, $newpath ) ) {
							if($itemtype === "folder") {
								fixPaths($name,$new_name);
							}
							$response = array( "name" => $new_name );
							echo json_encode( $response );
							http_response_code( 200 );
							//echo json_response( "success", "$name has been renamed to $new_name." );
						} else echo json_response( "error", "There was an internal file system error renaming $name." );
					} else echo json_response( "error", "There was an internal file system error renaming $name." );
				} else echo json_response( "error", "$type does not appear to exist." );
			} else echo json_response( "error", "You do not appear to own that $itemtype." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}
