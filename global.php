<?php

// Global variables, functions, etc.

// error_reporting(E_ALL);
// ini_set('display_errors', 1);

if ( $api !== true ) {
	// ini_set( 'session.save_path', realpath( dirname( $_SERVER[ 'DOCUMENT_ROOT' ] ) . '/../session' ) );
	// Keep around in case sessions on the server are messed up
	session_start();
	if ( $_SESSION )$id = $_SESSION[ 'user_id' ];
	else $id = null;
}

// Establish database connection
require( "database.php" );

// Global variables
$action = $_POST[ 'action' ];
$page = $_GET[ 'page' ];

$load = "<div class='spinner'><div class='bar1'></div><div class='bar2'></div><div class='bar3'></div><div class='bar4'></div><div class='bar5'></div><div class='bar6'></div><div class='bar7'></div><div class='bar8'></div><div class='bar9'></div><div class='bar10'></div><div class='bar11'></div><div class='bar12'></div></div>";

// $ainfo = explode(" ",formatSize("/files/$id"));
// $account_unit = $ainfo[1];
// $account_size = intval($ainfo[0]);
// if($account_unit = "MB" && $account_size >= 500)$account_limit = true;
// else $account_limit = false;
$account_limit = true;

// Mobile Detection
$useragent = $_SERVER[ 'HTTP_USER_AGENT' ];
if ( preg_match( '/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|ipad|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent ) || preg_match( '/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr( $useragent, 0, 4 ) ) )$ismobile = "true";
if ( preg_match( '/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i', $useragent ) || preg_match( '/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i', substr( $useragent, 0, 4 ) ) )$mobilenotipad = "true";

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
		if ( $val === "NULL" )$set = "$col = NULL";
		else {
			$val = e( $val );
			$set = "$col = '$val'";
		}
		if ( mysqli_query( $connect, "update data.$db set $set where $where" ) ) return true;
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
			if ( $entry != "." && $entry != ".." && $entry !== ".DS_STORE" )array_push( $folder_array, $entry );
		}
		closedir( $handle );
	}
	if ( empty( $folder_array ) ) return false;
	else return $folder_array;
}

function count_dir( $path ) {
	$count[ 'files' ] = 0;
	$count[ 'folders' ] = 0;
	$count[ 'total' ] = 0;
	$path = realpath( $path );
	$dir = opendir( $path );
	while ( ( $file = readdir( $dir ) ) !== false ) {
		if ( $file != "." && $file != ".." ) {
			if ( is_file( $path . "/" . $file ) ) {
				$count[ 'files' ]++;
				$count[ 'total' ]++;
			}
			if ( is_dir( $path . "/" . $file ) ) {
				$count[ 'folders' ]++;
				$count[ 'total' ]++;
				$counts = count_dir( $path . "/" . $file );
				$count[ 'folders' ] += $counts[ 'folders' ];
				$count[ 'files' ] += $counts[ 'files' ];
			}
		}
	}
	closedir( $dir );
	$count[ 'size' ] = formatSize( filesize( $path ) );
	$count[ 'folders' ] = numberFormat( $count[ 'folders' ] );
	$count[ 'files' ] = numberFormat( $count[ 'files' ] );
	return $count;
}

function copy_dir( $src, $dst ) {
	global $connect;
	global $id;
	$dir = opendir( $src );
	@mkdir( $dst );
	while ( false !== ( $file = readdir( $dir ) ) ) {
		if ( ( $file != '.' ) && ( $file != '..' ) ) {
			$name = $file;
			$itemdata = dataArray("files",$name,"name");
			if ( is_dir( $src . '/' . $file ) ) {
				$file = $itemdata[ 'name' ] . " copy";
				copy_dir( $src . '/' . $name, $dst . '/' . $file );
				$itemtype = "folder";
			} else {
				$file = str_replace( ".scpl", "", $itemdata[ 'name' ] ) . " copy.scpl";
				copy( $src . '/' . $name, $dst . '/' . $file );
				$itemtype = "file";
			}
			$db_path = "'".str_replace("../","",str_replace("files/$id",$dst))."'";
			$file_id = randString( 20 );
			if(mysqli_query( $connect, "insert into data.files (id,name,type,path,author) values ('" . $file_id . "','" . $file . "','$itemtype'," . $db_path . ",'$id')" )) {

			} else return false;
		}
	}
	closedir( $dir );
	return true;
}

function fixPaths($name,$new) {
	global $connect;
	$files = mysqli_query($connect,"select * from data.files");
	while($file = mysqli_fetch_array($files)) {
		if(stripos($file['path'],$name) !== false) {
			$file_id = $file['id'];
			$newpath = str_replace($name,$new,$file['path']);
			if(mysqli_query($connect,"update data.files set path = '$newpath' where id = '$file_id'")) {
				if($result !== false)$result = true;
			} else $result = false;
		}
	}
	return $result;
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
