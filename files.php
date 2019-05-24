<?php
require("global.php");

// File management backend

function getFiles( $path ) {
    $folder = folderArray( $path );
    sort( $folder );
    unset( $files );
    foreach ( $folder as $file ) {
        unset( $disabled );
        unset( $folderfiles );
        $ext = pathinfo( $file, PATHINFO_EXTENSION );
        if ( !$query || stripos( $file, $query ) !== false ) {
            if ( is_dir( "$path/$file" ) === false ) {
                $content =
                $files .= '{"id":"'.$id.'","type":"file","name":"'.$file.'","content":"'.$content.'","timestamp":"'.$timestamp.'","updated":"'.$updated.'","relativeTimestamp":"'.$relative.'","relativeUpdated":"'.$relative_updated.'"}';
            } else {
                $folderfiles = getFiles( "$path/$file" );
                $files .= '{"id":"'.$id.'","type":"folder","name":"'.$file.'","content":['.$folderfiles.']","timestamp":"'.$timestamp.'","updated":"'.$updated.'","relativeTimestamp":"'.$relative.'","relativeUpdated":"'.$relative_updated.'"}';
            }
        }
    }
    return "[$files]";
}

if ( $action === "filelist" ) {// return filelist json for logged in user
    if(!$_SESSION) {
      echo "No account is logged in.";
      exit;
    } else echo getFiles( "scpl-files/$id" ); // return json from function
}

if ( $action === "getfile" ) {
  $file_id = $_POST['id'];
    //$contents = file_get_contents();
    //echo $contents;
}

if ( $action === "savefile" ) {
    $file_id = $_POST[ 'id' ];
    $content = $_POST[ 'content' ];
    //if ( file_put_contents( "$path", $html ) )echo "saved";
    //else echo "error";
}

if($action === "renamefile") {
  $file_id = $_POST[ 'id' ];
  $new_name = $_POST['name'];

}

if($action === "renamefolder") {
  $file_id = $_POST[ 'id' ];
  $new_name = $_POST['name'];
}

if($action === "deletefile") {
  $file_id = $_POST[ 'id' ];
}

if($action === "deletefolder") {
  $folder_id = $_POST[ 'id' ];
}
