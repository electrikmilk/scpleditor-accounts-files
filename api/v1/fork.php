<?php
// Add ScPL file or folder to another users files
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$item_id = $_POST[ 'id' ];
	if ( !$item_id ) {
		echo json_response( "error", "No 'item_id' was recieved." );
	} else {
		$itemdata = dataArray( "files", $item_id, "id" );
		if ( $itemdata ) {
			$owner = $itemdata[ 'user_id' ];
			$collab = explode( ",", $itemdata[ 'collab' ] );
			$item = $itemdata[ 'name' ];
			$itemtype = $itemdata[ 'type' ];
			$type = ucfirst( $itemdata[ 'type' ] );
			if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
			$path = "../../files/$owner/$filepath$item";
			if ( $owner === $id ) {
				echo json_response( "error", "You are the owner of this file. No need to fork it." );
			} else if ( in_array( $id, $collab ) === true ) {
				if ( copy( $path, "../../files/$id/$item" ) === true ) {
					$file_id = randString( 20 );
					if ( mysqli_query( $connect, "insert into data.files (id,name,type,path,author) values ('" . $item_id . "','" . $item . "','$itemtype',NULL,'$id')" ) )echo json_response( "success", "$type $item has been forked to your files." );
					else echo json_response( "error", "Internal database error forking $item." );
				} else echo json_response( "error", "Internal file system error forking $item." );
			} else {
				echo json_response( "error", "This $itemtype has not been shared with you." );
			}
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}