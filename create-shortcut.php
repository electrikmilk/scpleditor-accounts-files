<?php
require("global.php");
makeFolder("shortcuts/$id");
$target = "shortcuts/$id/".str_replace(".scpl","",$_POST['name']).".shortcut";
if(isset($_FILES["file"]) and !$_FILES["file"]["error"]){
  if(move_uploaded_file($_FILES["file"]["tmp_name"], $target))echo "/$target";
  else echo "error creating shortcut file.";
}
