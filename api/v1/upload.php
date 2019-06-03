<?php
// Create .shortcut file for user download
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if($auth === true) {
  $name = str_replace(".scpl","",$_POST['filename']);
  if(!$_FILES || !$_POST['filename']) {
    if(!$_FILES) else echo json_response( "error", "No file data was received." );
    else if(!$_POST['filename']) echo json_response( "error", "No filename was received." );
  } else {
    $target = "shortcuts/temp/$name.shortcut";
    if(isset($_FILES["data"]) and !$_FILES["data"]["error"]){
      if(move_uploaded_file($_FILES["data"]["tmp_name"], $target)) {
        $location_array = array("location"=>"https://account.scpl.dev/$target");
        echo json_encode($location_array);
        http_response_code( 200 );
      } else echo json_response( "error", "Internal file system error creating shortcut file." );
    } else echo json_response( "error", "Internal file system error creating shortcut file." );
  }
}
