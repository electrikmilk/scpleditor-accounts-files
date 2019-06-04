<?php
// Import shortcut from iCloud URL
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if($auth === true) {
  if($_POST['url']) {
    $import = json_decode(str_replace("shortcuts/","shortcuts/api/records/",$_POST['url']), true);
    $name = url_encode($import['fields']['name']['value']);
    $url = $import['fields']['shortcut']['value'];
    $target = "shortcuts/temp/$name.shortcut";
    if( file_put_contents( $target, base64_encode( fopen( $url, 'r' ) ) ) ) {
      echo json_encode(array("url"=>"https://account.scpl.dev/$target"));
      http_response_code( 200 );
    } else echo json_response( "error", "Internal file system error creating shortcut file." );
  } else echo json_response( "error", "No URL was received." );
}
