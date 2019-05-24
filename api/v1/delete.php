<?php
// Delete folder or .scpl file
require("../request.php");
if($auth === true) {
  $file_id = $_POST['file_id'];
  $type = $_POST['type'];
  if(!$file_id) {
    echo json_response("error","No item id was recieved.");
  } else {
    $itemdata = dataArray("files",$file_id,"id");
    $name = $itemdata['name'];
    $path = dirname(__FILE__) . "/$name";
    if($type  === "file") {
      if(unlink($path)) echo json_response("error","No file id was recieved.");
      else echo json_response("error","No file id was recieved.");
    } else {
      if(unlink($path)) echo json_response("error","No file id was recieved.");
      else echo json_response("error","No file id was recieved.");
    }
  }
}
