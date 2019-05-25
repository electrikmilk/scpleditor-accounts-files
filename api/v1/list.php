<?php
// List files for user account
require( "../request.php" );

function getFiles( $path ) {
    $folder = folderArray( $path );
    sort( $folder );
    unset( $files );
    foreach ( $folder as $file ) {
        unset( $folderfiles );
        unset( $content );
        unset( $updated );
        unset( $relative_updated );
        $itemdata = dataArray( "files", $file, "name" );
        $fid = $itemdata[ 'id' ];
        $size = formatSize( filesize( "$path/$file" ) );
        $timestamp = $itemdata[ 'timestamp' ];
        $relative = timeago( $timestamp );
        if ( $itemdata[ 'timestamp' ] ) {
            $updated = $itemdata[ 'updated' ];
            $relative_updated = timeago( $updated );
        }
        if ( is_dir( "$path/$file" ) === false ) {
            $content = file_get_contents( "$path/$file" );
            $files .= '{"id":"' . $fid . '","type":"file","name":"' . $file . '","size":"' . $size . '","timestamp":"' . $timestamp . '","updated":"' . $updated . '","relativeTimestamp":"' . $relative . '","relativeUpdated":"' . $relative_updated . '"}';
        } else {
            $folderfiles = getFiles( "$path/$file" );
            $files .= '{"id":"' . $fid . '","type":"folder","name":"' . $file . '","size":"' . $size . '","content":[' . $folderfiles . '],"timestamp":"' . $timestamp . '","updated":"' . $updated . '","relativeTimestamp":"' . $relative . '","relativeUpdated":"' . $relative_updated . '"}';
        }
    }
    return $files;
}

if ( $auth === true ) {
    echo getFiles( "scpl-files/$id" ); // return json from function
}