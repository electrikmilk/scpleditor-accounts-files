<?php
// Move ScPL file or folder into root or into another folder
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
    $file_id = $_POST[ 'file_id' ];
    $folder_id = $_POST[ 'folder_id' ];
    if ( !$file_id ) {
        echo json_response( "error", "No 'file_id' was recieved." );
    } else {
        $filedata = dataArray( "files", $file_id, "id" );
        if ( $filedata ) {
            $file = $filedata[ 'name' ];
            $oldpath = dirname( __FILE__ ) . "/$file";
            if ( $folder_id ) {
                $folderdata = dataArray( "files", $folder_id, "id" );
                $folder_name = $folderdata[ 'name' ];
                $path = dirname( __FILE__ ) . "/$folder_name";
            } else {
                $path = "../../files/";
            }
            $path = "$path/$name";
            if ( file_exists( $oldpath ) ) {
                if ( rename( $oldpath, $path ) )echo json_response( "success", " File $file has been moved to $path." );
                else echo json_response( "error", "There was an internal error moving $file." );
            } else echo json_response( "success", "File does not appear to exist." );
        } else echo json_response( "success", "Invalid file ID." );
    }
}
