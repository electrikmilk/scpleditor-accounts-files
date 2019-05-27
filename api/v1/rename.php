<?php
// Rename folder or ScPL file
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
    $item_id = $_POST[ 'id' ];
    $new_name = $_POST['name'];
    if ( !$item_id || !$new_name ) {
        if ( !$item_id )echo json_response( "error", "No item id was recieved." );
        else echo json_response( "error", "No new name for the file was recieved." );
    } else {
        $itemdata = dataArray( "files", $item_id, "id" );
        if ( $itemdata ) {
          if($itemdata['type'] === "file") {
              $new_name = str_replace(".scpl","",e( special( $_POST[ 'name' ] ) )).".scpl";
            } else {
              $new_name = str_replace(".scpl","",e( special( $_POST[ 'name' ] ) ));
            }
            $name = $itemdata[ 'name' ];
            if($itemdata['path'])$itempath = $itemdata[ 'path' ]."/";
            $path = "../../files/$id/$itempath$name";
            $newpath = str_replace( $name, $new_name, $path );
            if ( file_exists( $path ) ) {
                if ( mysqli_query( $connect, "update data.files set name = '$new_name' where id = '$item_id'" ) ) {
                    if ( rename( $path, $newpath ) )echo json_response( "success", "$name has been renamed to $new_name." );
                    else echo json_response( "error", "There was an internal error renaming $name." );
                } else echo json_response( "error", "There was a database error renaming $name." );
            } else echo json_response( "error", "File does not appear to exist." );
        } else echo json_response( "error", "Invalid file ID." );
    }
}
