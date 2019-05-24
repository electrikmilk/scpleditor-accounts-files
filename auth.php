<?php
require( "global.php" );

// Account management backend

$session_token = randString( 20 );

if ( $action === "createuser" ) {
	header( "Location: https://editor.scpl.dev/?token=$session_token" );
}

if ( $action === "startsession" ) {
	header( "Location: https://editor.scpl.dev/?token=$session_token" );
}