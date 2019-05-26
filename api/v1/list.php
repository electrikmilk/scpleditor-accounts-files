<?php
// List files for user account
require( "../request.php" );
function getFiles( $path ) {
    $folder = folderArray( $path );
    $files = array();
    sort( $folder );
    foreach ( $folder as $file ) {
      $path = $file;
      $file = pathinfo($file, PATHINFO_BASENAME);
      unset( $contents );
      unset( $updated );
      unset( $relative_updated );
        $itemdata = dataArray( "files", $file, "name" );
        $fid = $itemdata[ 'id' ];
        $size = formatSize( filesize( $path ) );
        $timestamp = $itemdata[ 'timestamp' ];
        $relative = timeago( $timestamp );
        if ( $itemdata[ 'timestamp' ] ) {
            $updated = $itemdata[ 'updated' ];
            $relative_updated = timeago( $updated );
        }
        if ( is_dir( $path ) === false ) {
            $name = $file;
            $this_file = array(
              "id"=>$fid,
              "type"=>"file",
              "name"=>$name,
              "size"=>$size,
              "timestamp"=>$timestamp,
              "updated"=>$updated,
              "relativeTimestamp"=>$relative,
              "updated"=>$updated,
              "relativeUpdated"=>$relative_updated
            );
            array_push($files,$this_file);
        } else {
            $contents = getFiles( $path );
            $folder_files = array(
              "id"=>$fid,
              "type"=>"folder",
              "name"=>$name,
              "size"=>$size,
              "content"=>$contents,
              "timestamp"=>$timestamp,
              "updated"=>$updated,
              "relativeTimestamp"=>$relative,
              "updated"=>$updated,
              "relativeUpdated"=>$relative_updated
            );
            array_push($files,$folder_files);
        }
    }
    return $files;
}

if ( $auth === true ) {
    echo json_encode(getFiles( "../../files/$id" )); // return json from function
}
