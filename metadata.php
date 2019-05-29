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
} else if ( $page === "files" ) {
    $title = "Files";
} else if ( $page === "api" ) {
    $title = "REST API Reference";
}
if ( !$nav_title )$nav_title = $title;
if ( $title )echo "<title>$title - ScPL Editor</title>";
else {
    $nav_title = "Account Settings";
    echo "<title>Account Settings - ScPL Editor</title>";
}
