<?php
if ( $page === "login" ) {
	$title = "Login";
} else if ( $page === "sign-up" ) {
	$title = "Sign Up";
} else if ( $page === "forgot" ) {
	$title = "Forgot Password";
} else if ( $page === "reset" ) {
	$title = "Reset Password";
} else if ( $page === "confirm" ) {
	$title = "Email Confirmation";
	$nav_title = "Account activated";
}
if ( !$title )$nav_title = $title;
if ( $title )echo "<title>$title - ScPL Editor</title>";
else echo "<title>Account - ScPL Editor</title>";
?>