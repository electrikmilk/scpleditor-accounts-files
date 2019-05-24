<?php
$api = true;
require("../global.php");
require("requests.php");

// File management backend

function getFiles( $path ) {
    $folder = folderArray( $path );
    sort( $folder );
    unset( $files );
    foreach ( $folder as $file ) {
      unset( $folderfiles );
      unset($content);
      unset($updated);
      unset($relative_updated);
      $itemdata = dataArray("files",$file,"name");
          $fid = $itemdata['id'];
          $size = formatSize(filesize("$path/$file"));
          $timestamp = $itemdata['timestamp'];
          $relative = timeago($timestamp);
          if($itemdata['timestamp']) {
            $updated = $itemdata['updated'];
            $relative_updated = timeago($updated);
          }
            if ( is_dir( "$path/$file" ) === false ) {
              $content = file_get_contents("$path/$file");
              $files .= '{"id":"'.$fid.'","type":"file","name":"'.$file.'","size":"'.$size.'","timestamp":"'.$timestamp.'","updated":"'.$updated.'","relativeTimestamp":"'.$relative.'","relativeUpdated":"'.$relative_updated.'"}';
            } else {
              $folderfiles = getFiles( "$path/$file" );
              $files .= '{"id":"'.$fid.'","type":"folder","name":"'.$file.'","size":"'.$size.'","content":['.$folderfiles.'],"timestamp":"'.$timestamp.'","updated":"'.$updated.'","relativeTimestamp":"'.$relative.'","relativeUpdated":"'.$relative_updated.'"}';
            }
    }
    return $files;
}

if($id === null) {
   echo jsonResponse("error","User is not logged in.");
  exit;
} else {

if ( $action === "filelist" ) { // return filelist json for logged in user
    echo getFiles( "scpl-files/$id" ); // return json from function
}

if ( $action === "createfile" ) {

}

if ( $action === "getfile" ) {
  $file_id = $_POST['file_id'];
  $itemdata = dataArray("files",$file_id,"id");
  $name = $itemdata['name'];
  $path = dirname(__FILE__) . "/$name";
  $contents = file_get_contents($path);
  $file = array("contents"=>$contents);
  echo json_encode($file);
}

if ( $action === "savefile" ) {
    $file_id = $_POST[ 'file_id' ];
    $content = $_POST[ 'content' ];
    $itemdata = dataArray("files",$file_id,"id");
    $name = $itemdata['name'];
    $path = dirname(__FILE__) . "/$name";
    if ( file_put_contents( "$path", $content ) )echo jsonResponse("success","$name has been saved.");
    else echo jsonResponse("error","There was an internal error saving $name.");
}

if($action === "rename") {
  $item_id = $_POST[ 'item_id' ];
  $new_name = $_POST['new'];
  $itemdata = dataArray("files",$item_id,"id");
  $name = $itemdata['name'];
  $path = dirname(__FILE__) . "/$name";
  $newpath = str_replace($name,$new_name,$path);
  if ( rename($path,$newpath) )echo jsonResponse("success","$name has been renamed to $new_name.");
  else echo jsonResponse("error","There was an internal error renaming $name.");
}

if($action === "deletefile") {
  $file_id = $_POST[ 'file_id' ];
}

if($action === "deletefolder") {
  $folder_id = $_POST[ 'file_id' ];
}

}
