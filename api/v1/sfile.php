<?php
// Retrieve ScPL file contents of a file shared with the user
// This ensures the requested file has been shared with the user.
require( "../request.php" );
if ( $auth === true ) {
    $file_id = $_POST[ 'id' ];
    if ( !$file_id ) {
        echo json_response( "error", "No file id was recieved." );
    } else {
        $itemdata = dataArray( "files", $file_id, "id" );
        if ( $itemdata ) {
          $collab = explode(",",$itemdata['collab']);
          $loggedin = $token['user_id'];
          if(in_array($loggedin,$collab) === true) {
            $name = $itemdata[ 'name' ];
            if($itemdata['path'])$itempath = $itemdata[ 'path' ]."/";
            $path = "../../files/$id/$itempath$name";
            if ( file_exists( $path ) ) {
                $contents = file_get_contents( $path );
                $file = array( "contents" => $contents );
                echo json_encode( $file );
            } else echo json_response( "error", "File $name does not appear to exist." );
          } else echo json_response( "error", "This file has not been shared with you." );
        } else echo json_response( "error", "Invalid file ID." );
    }
}
