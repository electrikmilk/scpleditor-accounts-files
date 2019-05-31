<?php
// Copy ScPL file or folder into root or into another folder
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
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
				$itemtype = $itemdata[ 'type' ];
				$type = ucfirst( $itemdata[ 'type' ] );
				if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
				$oldpath = "../../files/$id/$filepath$item";
				if ( $folder_id ) {
					$folderdata = dataArray( "files", $folder_id, "id" );
					if(stripos($filepath,$folderdata['name'])) {
						if($itemtype === "file")$item = str_replace(".scpl","",$itemdata[ 'name' ])." copy.scpl";
						else $item = $itemdata[ 'name' ]." copy";
					}
					if ( $folderdata[ 'path' ] )$folderpath = $folderdata[ 'path' ] . "/";
					$path = "../../files/$id/$folderpath" . $folderdata[ 'name' ] . "/$item";
					$folder_name = $folderdata[ 'name' ];
					$db_path = "'$folderpath" . $folderdata[ 'name' ]."'";
				} else {
					$folder_name = "root";
					if($itemtype === "file")$newitem = str_replace(".scpl","",$itemdata[ 'name' ])." copy.scpl";
					else $newitem = $itemdata[ 'name' ]." copy";
					$path = "../../files/$id/$newitem";
					$db_path = "NULL";
				}
				if ( file_exists( $oldpath ) ) {
					if ( copy( $oldpath, $path ) === true ) {
						$file_id = randString( 20 );
						if ( mysqli_query( $connect, "insert into data.files (id,name,type,path,author) values ('" . $file_id . "','" . $item . "','$itemtype'," . $db_path . ",'$id')" ) )echo json_response( "success", "$type $item has been copied to $folder_name." );
						else echo json_response( "error", "Internal database error creating a copy of $item." );
					} else echo json_response( "error", "Internal file system error copying $item to $folder_name." );
				} else echo json_response( "error", "$type $item does not appear to exist." );
			} else echo json_response( "error", "You do not appear to own that $itemtype." );
		} else echo json_response( "error", "Invalid $itemtype ID." );
	}
}
