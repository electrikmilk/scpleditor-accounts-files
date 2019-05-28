<?php
// Set users that can access the specified file
require( "../request.php" );
header( "Access-Control-Allow-Origin: *" );
header( "Content-Type: application/json; charset=UTF-8" );
header( "Access-Control-Allow-Methods: POST" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
    $file_id = $_POST[ 'file_id' ];
    if ( !$file_id ) {
        echo json_response( "error", "No file ID was recieved." );
    } if ( !$_POST[ 'users' ] ) {
        echo json_response( "error", "No set of users was recieved." );
    } else {
        $filedata = dataArray( "files", $file_id, "id" );
        if ( $filedata ) {
            $name = $filedata[ 'name' ];
            $owner = $filedata[ 'author' ];
            $loggedin = $token[ 'user_id' ];
            $collab = explode( ",", $itemdata[ 'collab' ] );
            // Comma seperated list of users that the owner would like to share the file with
            $users = implode( ",", explode( ",", trim( $_POST[ 'users' ] ) ) ); // Reformat/clean list
            $thistype = $itemdata[ 'type' ];
            $type = ucfirst( $itemdata[ 'type' ] );
            if ( $owner === $id ) {
                if ( mysqli_query( $connect, "update data.files set collab = '$users' where id = '$file_id'" ) )echo json_response( "success", "Collaborators were set for $name." );
                else echo json_response( "error", "Internal database error setting collaborators." );
            } else if(in_array( $id, $collab ) === true) {
              echo json_response( "error", "Only the owner of this $thetype is allowed to change who can access it." );
            } else echo json_response( "error", "You do not own this $thetype." );
        } else echo json_response( "error", "Invalid $thetype ID." );
    }
}
