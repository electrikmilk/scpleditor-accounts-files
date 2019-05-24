<?php
// Rename folder or .scpl file
require("../request.php");
if($auth === true) {
  $item_id = $_POST[ 'id' ];
  $new_name = $_POST['name'];
  if(!$item_id || !$new_name) {
    if(!$item_id)echo json_response("error","No item id was recieved.");
    else echo json_response("error","No new name for the file was recieved.");
  } else {
    $itemdata = dataArray("files",$item_id,"id");
    $name = $itemdata['name'];
    $path = dirname(__FILE__) . "/$name";
    $newpath = str_replace($name,$new_name,$path);
    if ( rename($path,$newpath) )echo json_response("success","$name has been renamed to $new_name.");
    else echo json_response("error","There was an internal error renaming $name.");
  }
}
