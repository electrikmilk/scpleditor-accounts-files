<?php

ini_set( 'session.save_path', realpath( dirname( $_SERVER[ 'DOCUMENT_ROOT' ] ) . '/../session' ) ); // Start sessions, specify path because this caused an issue in the past
session_start();

$db = mysqli_connect("localhost");

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Global functions and code, etc.

$action = $_POST['action'];

$page = $_GET['page'];
$folder = $_GET[ 'folder' ];

function randString( $length ) { // create random string (for creating random filenames, identifiers, etc.)
	$char = str_shuffle( "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" );
	for ( $i = 0, $rand = '', $l = strlen( $char ) - 1; $i < $length; $i++ ) {
		$rand .= $char {
			mt_rand( 0, $l )
		};
	}
	return $rand;
}

function clean( $string ) { // Used for making feature and listing identifiers, etc.
	return strtolower( preg_replace( '/[^A-Za-z0-9\-]/', '', preg_replace( "/[\"\']/", " ", preg_replace( "/[\/\&%#\$]/", "_", strip_tags( str_replace( '--', '-', str_replace( ' ', '-', trim( $string ) ) ) ) ) ) ) );
}

function commaRemove( $string, $item ) {
	$parts = explode( ',', $string );
	while ( ( $i = array_search( $item, $parts ) ) !== false ) {
		unset( $parts[ $i ] );
	}
	return implode( ',', $parts );
}

function e($string) {
  global $db;
  return mysqli_real_escape_string($db,$string);
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
			if ( date( "H:i:s", strtotime( $datetime ) ) > date( "H:i:s", strtotime( '-5 hours' ) ) )$str = howlongago( $datetime, $full );
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

// Global folder functions

function makeFolder( $name ) {
	if ( !file_exists( $name ) )mkdir( $name, 0777, true );
}

// function deleteDir( $dirPath ) {
// 	if ( !is_dir( $dirPath ) ) return false;
// 	if ( substr( $dirPath, strlen( $dirPath ) - 1, 1 ) != '/' )$dirPath .= '/';
// 	$files = glob( $dirPath . '*', GLOB_MARK );
// 	foreach ( $files as $file ) {
// 		if ( is_dir( $file ) )self::deleteDir( $file );
// 		else unlink( $file );
// 	}
// 	rmdir( $dirPath );
// }

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
