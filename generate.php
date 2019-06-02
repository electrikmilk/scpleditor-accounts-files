<?php
require("global.php");
$file_id = $_POST['file_id'];
$file = dataArray("files",$file_id,"id");
if($file) {
  $name = $file['name'];
  $preview = $_POST['preview'];
  if($file['path'])$filepath = $file['path']."/";
  $code = file_get_contents("files/$id/$itempath$name");
  $html = "<!doctype html>
   <html>
    <head>
      <title>Loading...</title>
    </head>
    <body>
      <input type='hidden' id='scpl-name' value='$name'/>
      <input type='hidden' id='preview' value='$preview'/>
      <textarea id='scpl-code' style='display: none;'>$code</textarea>
      <div id='scpl-render'></div>
      <script src='main.js'></script>
    </body>
   </html>";
  if($file['author'] === $id) {
    if(file_put_contents("preview/dist/index.html",$html) === true)echo "gen";
    else echo "Error converting ScPL.";
  } else echo "You do not appear to own that file.";
} else  echo "Invalid file ID.";
