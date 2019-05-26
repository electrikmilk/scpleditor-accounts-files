<?php
// Delete folder or ScPL file
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
    $file_id = $_POST[ 'id' ];
    $type = $_POST[ 'type' ];
    if ( !$file_id ) {
        echo json_response( "error", "No item id was recieved." );
    } else {
        $itemdata = dataArray( "files", $file_id, "id" );
        if ( $itemdata ) {
            $name = $itemdata[ 'name' ];
            $path = dirname( __FILE__ ) . "/$name";
            if ( file_exists( $path ) ) {
                if ( mysqli_query( $connect, "delete from data.files where id = '" . $file_id . "'" ) ) {
                    if ( $type === "file" ) {
                        if ( unlink( $path ) )echo json_response( "success", "File $name was deleted." );
                        else echo json_response( "error", "There was an internal error deleting $name." );
                    } else {
                        if ( deleteDir( $path ) )echo json_response( "success", "Folder $name was deleted." );
                        else echo json_response( "error", "There was an internal error deleting $name." );
                    }
                } else echo json_response( "error", "There was a database error deleting $name." );
            } else echo json_response( "error", "File does not appear to exist." );
        } else echo json_response( "error", "Invalid file ID." );
    }
}
