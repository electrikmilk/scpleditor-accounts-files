<?php

// Global variables, functions, etc.

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

if ( $api !== true ) {
	// ini_set( 'session.save_path', realpath( dirname( $_SERVER[ 'DOCUMENT_ROOT' ] ) . '/../session' ) ); // Start sessions, specify path because this caused an issue in the past
	session_start();
	if ( $_SESSION )$id = $_SESSION[ 'user_id' ];
	else $id = null;
}

// Establish database connection
require( "database.php" );

// Global variables
$action = $_POST[ 'action' ];
$page = $_GET[ 'page' ];

// Misc string functions

function randString( $length ) { // create random string (for creating random filenames, identifiers, etc.)
	$char = str_shuffle( "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" );
	for ( $i = 0, $rand = '', $l = strlen( $char ) - 1; $i < $length; $i++ ) {
		$rand .= $char {
			mt_rand( 0, $l )
		};
	}
	return $rand;
}

function numberFormat( $n, $precision = 1 ) {
	if ( $n < 1000 )$n_format = number_format( $n ); // Anything less than a thousand
	else if ( $n < 1000000 )$n_format = number_format( $n / 1000, $precision ) . 'k'; // Anything less than a million
	else if ( $n < 1000000000 )$n_format = number_format( $n / 1000000, $precision ) . 'M'; // Anything less than a billion
	else $n_format = number_format( $n / 1000000000, $precision ) . 'B'; // At least a billion
	return intval( $n_format );
}

function clean( $string ) {
	return strtolower( preg_replace( '/[^A-Za-z0-9\-]/', '', preg_replace( "/[\"\']/", " ", preg_replace( "/[\/\&%#\$]/", "_", strip_tags( str_replace( '--', '-', str_replace( ' ', '-', trim( $string ) ) ) ) ) ) ) );
}

function special( $string ) {
	return preg_replace( '/[ ](?=[ ])|[^-_,A-Za-z0-9 ]+/', '', str_replace( "/", "", str_replace( '\"', '', strip_tags( trim( $string ) ) ) ) );
}

function commaRemove( $string, $item ) {
	$parts = explode( ',', $string );
	while ( ( $i = array_search( $item, $parts ) ) !== false ) {
		unset( $parts[ $i ] );
	}
	return implode( ',', $parts );
}

// Database functions

// Quickly get array for a row with a column value
function dataArray( $db, $val, $col ) {
	global $connect;
	if ( $val !== false ) {
		$get = "$col = '$val'";
		$query = mysqli_query( $connect, "select * from data.$db where $get" );
	} else $query = mysqli_query( $connect, "select * from data.$db" );
	if ( mysqli_num_rows( $query ) !== 0 ) return mysqli_fetch_array( $query );
	else return false;
}

// Quickly update one column in a row in the database.
function setValue( $db, $val, $col, $where ) {
	global $connect;
	if ( $db && $val && $col && $where ) {
		$set = "$col = '$val'";
		if ( mysqli_query( $connect, "update $db set $set where $where" ) ) return true;
		else return false;
	} else return false;
}

function e( $string ) {
	global $connect;
	return mysqli_real_escape_string( $connect, $string );
}

// Global time functions

function howlongago( $datetime, $full ) {
	$now = new DateTime;
	$diff = $now->diff( new DateTime( $datetime ) );
	$diff->w = floor( $diff->d / 7 );
	$diff->d -= $diff->w * 7;
	$string = array( 'y' => 'year', 'm' => 'month', 'w' => 'week', 'd' => 'day', 'h' => 'hour', 'i' => 'minute', 's' => 'second', );
	foreach ( $string as $k => & $v ) {
		if ( $diff->$k )$v = $diff->$k . ' ' . $v . ( $diff->$k > 1 ? 's' : '' );
		else unset( $string[ $k ] );
	}
	if ( !$full )$string = array_slice( $string, 0, 1 );
	return $string ? implode( ', ', $string ) . ' ago': 'Just now';
}

function timeago( $datetime, $ago = false, $full = false, $shorten = false ) {
	if ( $ago === false ) {
		if ( date( "Y-m-d", strtotime( $datetime ) ) === date( "Y-m-d", strtotime( 'today' ) ) ) {
			if ( date( "H:i:s", strtotime( $datetime ) ) > date( "H:i:s", strtotime( '-5 hours' ) ) )$str = howlongago( date( "Y-m-d H:i:s", strtotime( "$datetime +4 hours" ) ), $full );
			else $str = "Today at " . date( "g:i a", strtotime( $datetime ) );
		} else if ( date( "Y-m-d", strtotime( $datetime ) ) === date( "Y-m-d", strtotime( 'yesterday' ) ) ) {
			$str = "Yesterday at " . date( "g:i a", strtotime( $datetime ) );
		} else {
			if ( date( "Y", strtotime( $datetime ) ) === date( "Y" ) ) {
				if ( $shorten === true )$str = date( "D, M. j", strtotime( $datetime ) ) . " at " . date( "g:i a", strtotime( $datetime ) );
				else $str = date( "l, F j", strtotime( $datetime ) ) . " at " . date( "g:i a", strtotime( $datetime ) );
			} else {
				if ( $shorten === true ) {
					if ( date( "Y" ) !== date( "Y", strtotime( $datetime ) ) )$str = date( "M. j, Y", strtotime( $datetime ) );
					else $str = date( "M. j", strtotime( $datetime ) );
				} else $str = date( "F j, Y", strtotime( $datetime ) );
			}
		}
	} else $str = howlongago( $datetime, $full );
	$str = str_replace( "May.", "May", str_replace( "Sep.", "Sept.", str_replace( "am", "a.m.", str_replace( "pm", "p.m.", str_replace( ":00", "", $str ) ) ) ) );
	return $str;
}

// Global file/folder functions

function formatSize( $bytes ) {
	if ( $bytes >= 1073741824 )$bytes = number_format( $bytes / 1073741824, 2 ) . ' GB';
	elseif ( $bytes >= 1048576 )$bytes = number_format( $bytes / 1048576, 2 ) . ' MB';
	elseif ( $bytes >= 1024 )$bytes = number_format( $bytes / 1024, 2 ) . ' KB';
	elseif ( $bytes > 1 )$bytes = $bytes . ' bytes';
	elseif ( $bytes == 1 )$bytes = $bytes . ' byte';
	else $bytes = '0 bytes';
	return $bytes;
}

function makeFolder( $name ) {
	if ( !file_exists( $name ) ) {
		if ( mkdir( $name, 0777, true ) ) return true;
		else return false;
	} else return false;
}

function deleteDir( $dirPath ) {
	if ( !is_dir( $dirPath ) ) return false;
	else {
		if ( substr( $dirPath, strlen( $dirPath ) - 1, 1 ) != '/' )$dirPath .= '/';
		$files = glob( $dirPath . '*', GLOB_MARK );
		foreach ( $files as $file ) {
			if ( is_dir( $file ) ) {
				deleteDir( $file );
			} else unlink( $file );
		}
		if ( rmdir( $dirPath ) ) return true;
		else return false;
	}
}

function folderEmpty( $dir ) {
	if ( !is_readable( $dir ) ) return NULL;
	return ( count( scandir( $dir ) ) == 2 );
}

function folderArray( $folder ) {
	$folder_array = array();
	if ( $handle = opendir( $folder ) ) {
		while ( false !== ( $entry = readdir( $handle ) ) ) {
			if ( $entry != "." && $entry != ".." )array_push( $folder_array, $entry );
		}
		closedir( $handle );
	}
	if ( empty( $folder_array ) ) return false;
	else return $folder_array;
}

function file_count( $directory ) {
	$filecount = 0;
	$files = glob( $directory . "*" );
	if ( $files )$filecount = numberFormat( count( $files ) );
	if ( $filecount !== 1 )$s = "s";
	echo "$filecount file$s";
}

// Global array function
function array_push_key( $array, $key, $value ) {
	return $array[ $key ] = $value;
}

// Global mail function
function sendEmail( $to, $from, $subject, $title, $message ) { // Quickly send an email
	$headers;
	if ( !$to || $to === false )$to = "contact@scpl.dev";
	if ( !$from || $from === false ) {
		$from = "donotreply@scpl.dev";
		$headers = "From: ScPL Editor < donotreply@scpl.dev >\n";
	} else $headers = "From: < $from >\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();
	$headers .= "X-Priority: 1\n"; // Urgent message!
	$headers .= "Return-Path: contact@scpl.dev\n"; // Return path for errors
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
	$subject = "$subject - ScPL Editor";
	$body = file_get_contents( "email.html" );
	$body .= "<h2>$title</h2>";
	$body .= "$message<br/><br/>- <i>ScPL Team</i>";
	$body .= "</div></div>";
	$body .= "</body></html>";
	$send = mail( $to, $subject, $body, $headers, '-contact@scpl.dev' );
	if ( $send ) return true;
	else return false;
}