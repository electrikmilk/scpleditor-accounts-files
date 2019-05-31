<?php
// Move ScPL file or folder into root or into another folder
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	$item_id = $_POST[ 'item_id' ];
	$folder_id = $_POST[ 'folder_id' ];
	if ( !$item_id ) {
		echo json_response( "error", "No 'item_id' was recieved." );
	} else {
		$itemdata = dataArray( "files", $item_id, "id" );
		if ( $itemdata ) {
			$owner = $itemdata[ 'author' ];
			if ( $owner === $id ) {
				$item = $itemdata[ 'name' ];
				$type = ucfirst( $itemdata[ 'type' ] );
				$itemtype = $itemdata[ 'type' ];
				if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
				$oldpath = "../../files/$id/$filepath$item";
				if ( $folder_id ) {
					$folderdata = dataArray( "files", $folder_id, "id" );
					if ( $folderdata[ 'path' ] )$folderpath = $folderdata[ 'path' ] . "/";
					$path = "../../files/$id/$folderpath" . $folderdata[ 'name' ] . "/$item";
					$folder_name = $folderdata[ 'name' ];
					$db_path = "'$folderpath" . $folderdata[ 'name' ] . "'";
				} else {
					$folder_name = "root";
					$path = "../../files/$id/$item";
					$db_path = "NULL";
				}
				if ( file_exists( $oldpath ) ) {
					if ( rename( $oldpath, $path ) ) {
						if ( mysqli_query( $connect, "update data.files set path = $db_path where id = '$item_id'" ) )echo json_response( "success", "$type $item has been moved to $folder_name." );
						else echo json_response( "error", "Internal database error moving $itemtype $item." );
					} else echo json_response( "error", "Internal file system error moving $item to $folder_name." );
				} else echo json_response( "error", "$type $item does not appear to exist." );
			} else echo json_response( "error", "You do not appear to own that $itemtype." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}
