<?php
// Download ScPL File
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if($auth === true) {
  $filedata = dataArray("files",$_POST['id'],"id");
  $owner = $filedata['author'];
  $collab = $filedata['collab'];
  if($filedata) {
    if ( $owner === $id || in_array( $id, $collab ) === true ) {
    $name = $filedata['name'];
    if ( $filedata[ 'path' ] )$filepath = $filedata[ 'path' ] . "/";
    $path = "/files/$id/$filepath$file";
    if(file_exists("../..$path")) {
      echo json_encode(array("url"=>$path));
    } else echo json_response( "error", "File $name does not appear to exist locally." );
    } else echo json_response( "error", "You do not appear to own this file or it has not been shared with you." );
  } echo json_response( "error", "Invalid file ID." );
}
