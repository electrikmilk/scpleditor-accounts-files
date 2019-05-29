<?php
require( "global.php" );
$session_token = randString( 10 );

function getFiles( $path ) {
	$load = "<div class='spinner'><div class='bar1'/><div class='bar2'/><div class='bar3'/><div class='bar4'/><div class='bar5'/><div class='bar6'/><div class='bar7'/><div class='bar8'/><div class='bar9'/><div class='bar10'/><div class='bar11'/><div class='bar12'/></div>";
	$folder = folderArray( $path );
	sort( $folder );
	foreach ( $folder as $file ) {
$path = "$path/$file";
$file = pathinfo( $file, PATHINFO_BASENAME );
unset( $contents );
unset( $updated );
unset( $relative_updated );
$itemdata = dataArray( "files", $file, "name" );
$fid = $itemdata[ 'id' ];
$size = formatSize( filesize( $path ) );
$timestamp = $itemdata[ 'timestamp' ];
$relative = timeago( $timestamp );
if ( $itemdata[ 'updated' ] ) {
	$updated = $itemdata[ 'updated' ];
	$relative_updated = timeago( $updated );
}
$name = $file;
if ( is_dir( $path ) === false ) {
	$files .= "<li class='list-item-file' id='file-$fid'><div class='item-name'>$load$name</div></li>";
	// $this_file = array(
	// 	"id" => $fid,
	// 	"type" => "file",
	// 	"name" => $name,
	// 	"size" => $size,
	// 	"collab" => $itemdata[ 'collab' ],
	// 	"timestamp" => $timestamp,
	// 	"updated" => $updated,
	// 	"relativeTimestamp" => $relative,
	// 	"updated" => $updated,
	// 	"relativeUpdated" => $relative_updated
	// );
} else {
	// $folder_files = array(
	// 	"id" => $fid,
	// 	"type" => "folder",
	// 	"name" => $name,
	// 	"size" => $size,
	// 	"contents" => $contents,
	// 	"timestamp" => $timestamp,
	// 	"updated" => $updated,
	// 	"relativeTimestamp" => $relative,
	// 	"updated" => $updated,
	// 	"relativeUpdated" => $relative_updated
	// );
	$contents = getFiles( $path );
	$files .= "<li class='list-item-folder' id='file-$fid'><div class='item-name'>$load$name</div><ul>$contents</ul></li>";
}
	}
	return $files;
}

// Account files backend
if ( $_SERVER[ 'SERVER_ADDR' ] != $_SERVER[ 'REMOTE_ADDR' ] ) {
	$this->output->set_status_header( 400, 'No Remote Access Allowed' );
	exit; //just for good measure
} else {
	if ( $action === "list" ) {
		$user_files = folderArray( "files/$id" );
		if($files === false) {
			echo "No files.";
		} else {
			echo "<ul>".getFiles("files/$id")."</ul>";
		}
	}
}
