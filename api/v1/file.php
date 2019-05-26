<?php
// Retrieve ScPL file contents
require( "../request.php" );
if ( $auth === true ) {
    $file_id = $_POST[ 'id' ];
    if ( !$file_id ) {
        echo json_response( "error", "No file id was recieved." );
    } else {
        $itemdata = dataArray( "files", $file_id, "id" );
        if ( $itemdata ) {
            $name = $itemdata[ 'name' ];
            $path = glob("../../files/$id/$name")[0];
            if ( file_exists( $path ) ) {
                $contents = file_get_contents( $path );
                $file = array( "contents" => $contents );
                echo json_encode( $file );
            } else echo json_response( "error", "File at $path does not appear to exist." );
        } else echo json_response( "error", "Invalid file ID." );
    }
}
