<?php
// List files for user account
require( "../request.php" );

function getFiles( $path ) {
	$folder = folderArray( $path );
	$files = array();
	sort( $folder );
	foreach ( $folder as $file ) {
		$file = pathinfo( $file, PATHINFO_BASENAME );
		unset( $contents );
		unset( $updated );
		unset( $relative_updated );
		$itemdata = dataArray( "files", $file, "name" );
		$fid = $itemdata[ 'id' ];
		$timestamp = $itemdata[ 'timestamp' ];
		$relative = timeago( $timestamp );
		if ( $itemdata[ 'updated' ] ) {
			$updated = $itemdata[ 'updated' ];
			$relative_updated = timeago( $updated );
		}
		if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
		$path = "../../files/$id/$filepath$file";
		$size = formatSize( filesize( $path ) );
		$name = $file;
		if ( is_dir( $path ) === false ) {
			$this_file = array(
				"id" => $fid,
				"type" => "file",
				"name" => $name,
				"size" => $size,
				"collab" => $itemdata[ 'collab' ],
				"timestamp" => $timestamp,
				"updated" => $updated,
				"relativeTimestamp" => $relative,
				"updated" => $updated,
				"relativeUpdated" => $relative_updated
			);
			array_push( $files, $this_file );
		} else {
			$contents = getFiles( $path );
			$folder_files = array(
				"id" => $fid,
				"type" => "folder",
				"name" => $name,
				"size" => $size,
				"contents" => $contents,
				"timestamp" => $timestamp,
				"updated" => $updated,
				"relativeTimestamp" => $relative,
				"updated" => $updated,
				"relativeUpdated" => $relative_updated
			);
			array_push( $files, $folder_files );
		}
	}
	return $files;
}

if ( $auth === true ) {
	$files = getFiles( "../../files/$id" );
	if ( $files ) {
		echo json_encode( $files ); // return json from function
		http_response_code( 200 );
	} else {
		echo json_response( "error", "This user has added no files to their account." );
		http_response_code( 404 );
	}
}
