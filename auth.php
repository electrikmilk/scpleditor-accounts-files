<?php
require( "global.php" );
$session_token = randString( 20 );

// Account management backend

if ($_SERVER['SERVER_ADDR'] != $_SERVER['REMOTE_ADDR']){
  $this->output->set_status_header(400, 'No Remote Access Allowed');
  exit; //just for good measure
} else {
	if ( $action === "createuser" ) {
		$username = $_POST['username'];
		$email = $_POST['email'];
		$raw_password = $_POST['password'];
		$password = sha1($email.$raw_password);
		if(mysqli_query($connect,"insert into data.users (username,email,password) values ('".$username."','".$email."','".$password."')")) {
			$user_id = mysqli_insert_id($connect);
			if(mysqli_query($connect,"insert into data.token (user_id,token) values ('".$user_id."','".$session_token."')")) {
				$_SESSION['user_id'] = $user_id;
        $token_id = mysqli_insert_id($connect);
				header( "Location: https://editor.scpl.dev/?login_key=$token_id" );
			}
		} else echo "error";
	}
	if ( $action === "startsession" ) {
		$email = $_POST['email'];
		$raw_password = $_POST['password'];
		$password = sha1($email.$raw_password);
		$account = dataArray("users",$email,"email");
		if($password === $account['password']) {
			$user_id = $account['id'];
			if(mysqli_query($connect,"insert into data.token (user_id,token) values ('".$user_id."','".$session_token."')")) {
				$_SESSION['user_id'] = $user_id;
        $token_id = mysqli_insert_id($connect);
				header( "Location: https://editor.scpl.dev/?login_key=$token_id" );
			}
		}
	}
}
