<?php
// Create ScPL file
require( "../request.php" );
header( "Access-Control-Max-Age: 3600" );
header( "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With" );
if ( $auth === true ) {
	if ( $_POST[ 'contents' ] )$contents = $_POST[ 'contents' ];
	$type = $_POST[ 'type' ];
	$oname = $_POST['name'];
	if ( $type === "file" )$name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) ) . ".scpl";
	else $name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) );
	if ( !$name || !$type ) {
		if ( !$name )echo json_response( "error", "No item name was recieved." );
		else if ( !$type )echo json_response( "error", "No item type was recieved." );
	} else {
		if($account_limit === true) echo json_response( "error", "Your account limit of 500 MB has been reached." );
		else {
		$file_check = mysqli_query( $connect, "select * from data.files where name = '$name' or name = '$oname'" );
		if ( mysqli_num_rows( $file_check ) === 0 ) {
			$file_id = randString( 20 );
			if ( mysqli_query( $connect, "insert into data.files (id,name,type,author) values ('" . $file_id . "','" . $name . "','$type','$id')" ) ) {
				if ( $type === "file" ) {
					if ( file_put_contents( "../../files/$id/$name", $contents ) !== false ) {
						$newfile = array( "id" => $file_id, "name" => $name );
						echo json_encode( $newfile );
						http_response_code( 200 );
					} else echo json_response( "error", "Internal file system error creating file $name." );
				} else {
					if ( makeFolder( "../../files/$id/$name" ) ) {
						$newfile = array( "id" => $file_id, "name" => $name );
						echo json_encode( $newfile );
						http_response_code( 200 );
					} else echo json_response( "error", "Internal file system error creating folder $name." );
				}
			} else echo json_response( "error", "Internal database error creating file $name." );
		} else echo json_response( "error", "File with name $name already exists." );
	}
	}
}
