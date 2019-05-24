<?php
// Create ScPL file
require("../request.php");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
$name = $_POST['name'];
$contents = $_POST['contents'];
if(!$name || !$contents) {
  if(!$name)echo json_response("error","No file name was recieved.");
  else echo json_response("error","No file contents were recieved.");
} else {
  $file_id = randString(20);
if(mysqli_query($connect,"insert into data.files (id,name,type,author) values ('".$file_id."','".$name."','file','$id')")) {
  if(file_put_contents("../../scpl-files/$id/$name",$contents)) echo json_response("success","File $name was successfully created.");
  else echo json_response("error","Internal file system error creating file $name.");
} else echo json_response("error","Internal database error creating file $name.");
}
