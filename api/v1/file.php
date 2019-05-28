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
            $owner = $itemdata[ 'author' ];
            $collab = explode( ",", $itemdata[ 'collab' ] );
            if ( $owner === $id || in_array( $id, $collab ) === true ) {
                $name = $itemdata[ 'name' ];
                $type = ucfirst( $itemdata[ 'type' ] );
                $thetype = $itemdata[ 'type' ];
                if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
                $path = "../../files/$id/$itempath$name";
                if ( file_exists( $path ) ) {
                    $contents = file_get_contents( $path );
                    $file = array( "contents" => $contents );
                    echo json_encode( $file );
                } else echo json_response( "error", "$type $name does not appear to exist." );
            } else echo json_response( "error", "You do not appear to own that $thetype or this $thetype has not been shared with you." );
        } else echo json_response( "error", "Invalid $thetype ID." );
    }
}
