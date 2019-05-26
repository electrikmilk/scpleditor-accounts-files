<?php
// Save ScPL file with new contents
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
    $file_id = $_POST[ 'id' ];
    $content = $_POST[ 'contents' ];
    if ( !$file_id || !$content ) {
        if ( !$file_id )echo json_response( "error", "No file id was recieved." );
        else echo json_response( "error", "No new file contents were recieved." );
    } else {
        $itemdata = dataArray( "files", $file_id, "id" );
        if ( $itemdata ) {
            $name = $itemdata[ 'name' ];
            $path = "../../files/$id/$name";
            if ( file_exists( $path ) ) {
                if ( file_put_contents( "$path", $content ) )echo json_response( "success", "File $name has been saved." );
                else echo json_response( "error", "There was an internal error saving $name." );
            } else echo json_response( "error", "File does not appear to exist." );
        } else echo json_response( "error", "Invalid file ID." );
    }
}
