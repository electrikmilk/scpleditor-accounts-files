<?php
require("global.php");

// File management backend

if($action === "filelist") {
  if(!$_SESSION) {
    echo "No account is logged in.";
    exit;
  } else {
    $files = folderArray("scpl-files/$id/");
    foreach ($variable as $type => $file) {
      $files .= '{"id":"'.$id.'","type":"'.$type.'","name":"'.$file.'","timestamp":"'.$timestamp.'","updated":"'.$updated.'","relativeTimestamp":"'.$relative.'","relativeUpdated":"'.$relative_updated.'"}';
    }
    echo "[$files]";
  }
}

?>
