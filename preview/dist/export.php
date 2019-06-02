<?php require("../../global.php"); ?>
<!doctype html>
   <html>
    <head>
      <title>Loading...</title>
    </head>
    <body>
<?php
$file_id = $_GET['id'];
$file = dataArray("files",$file_id,"id");
if($file) {
  $name = $file['name'];
  $preview = $_GET['preview'];
  if($file['path'])$filepath = $file['path']."/";
  $code = file_get_contents("../../files/$id/$itempath$name");
  if($file['author'] === $id) {
    if($name) {
    ?>
          <input type='hidden' id='scpl-name' value='<?php echo $name; ?>'/>
          <input type='hidden' id='preview' value='<?php echo $preview; ?>'/>
          <textarea id='scpl-code' style='display: none;'><?php echo $code; ?></textarea>
          <div id='scpl-render'></div>
          <script src='main.js'></script>
    <?php
    } else echo "Error converting ScPL.";
  } else echo "You do not appear to own that file.";
} else  echo "Invalid file ID.";
?>
</body>
</html>
