<?php
require( "global.php" );
$session_token = randString( 10 );

function getFiles( $path ) {
	global $id;
	$load = "<div class='spinner'><div class='bar1'/><div class='bar2'/><div class='bar3'/><div class='bar4'/><div class='bar5'/><div class='bar6'/><div class='bar7'/><div class='bar8'/><div class='bar9'/><div class='bar10'/><div class='bar11'/><div class='bar12'/></div>";
	$folder = folderArray( $path );
	sort( $folder );
	foreach ( $folder as $file ) {
		unset( $path );
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
		$path = "files/$id$path";
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
} else if ( $_SESSION ) {
	if ( $action === "list" ) {
		$user_files = folderArray( "files/$id" );
		if ( $files === false ) {
			echo "No files.";
		} else {
			echo "<ul>" . getFiles( "files/$id" ) . "</ul>";
		}
	}
	if ( $action === "create" ) {
		if ( $_POST[ 'contents' ] )$contents = $_POST[ 'contents' ];
		$type = $_POST[ 'type' ];
		if ( $type === "file" )$name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) ) . ".scpl";
		else $name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) );
		if ( !$name || !$type ) {
			if ( !$name )echo json_response( "error", "No item name was recieved." );
			else if ( !$type )echo json_response( "error", "No item type was recieved." );
		} else {
			$file_check = mysqli_query( $connect, "select * from data.files where name = '$name' and type = '$type'" );
			if ( mysqli_num_rows( $file_check ) === 0 ) {
				$file_id = randString( 20 );
				if ( mysqli_query( $connect, "insert into data.files (id,name,type,author) values ('" . $file_id . "','" . $name . "','$type','$id')" ) ) {
					if ( $type === "file" ) {
						if ( file_put_contents( "files/$id/$name", $contents ) !== false ) {
							$newfile = array( "id" => $file_id, "name" => $name );
							echo json_encode( $newfile );
							http_response_code( 200 );
						} else echo json_response( "error", "Internal file system error creating file $name." );
					} else {
						if ( makeFolder( "files/$id/$name" ) ) {
							$newfile = array( "id" => $file_id, "name" => $name );
							echo json_encode( $newfile );
							http_response_code( 200 );
						} else echo json_response( "error", "Internal file system error creating folder $name." );
					}
				} else echo json_response( "error", "Internal database error creating file $name." );
			} else echo json_response( "error", "File with name $name already exists." );
		}
	}
} else echo "user is logged out";
