<?php
require( "global.php" );
$session_token = randString( 10 );
$load = "<div class='spinner'><div class='bar1'/><div class='bar2'/><div class='bar3'/><div class='bar4'/><div class='bar5'/><div class='bar6'/><div class='bar7'/><div class='bar8'/><div class='bar9'/><div class='bar10'/><div class='bar11'/><div class='bar12'/></div>";

function getFiles( $path, $query = null ) {
	global $id;
	global $load;
	$folder = folderArray( $path );
	sort( $folder );
	foreach ( $folder as $file ) {
		$file = pathinfo( $file, PATHINFO_BASENAME );
		unset( $path );
		unset( $contents );
		unset( $disabled );
		unset( $updated );
		unset( $relative_updated );
		$itemdata = dataArray( "files", $file, "name" );
		$fid = $itemdata[ 'id' ];
		$size = formatSize( filesize( $path ) );
		$timestamp = $itemdata[ 'timestamp' ];
		$collab = $itemdata[ 'collab' ];
		$itemtype = $itemdata[ 'type' ];
		$relative = timeago( $timestamp );
		if ( $itemdata[ 'updated' ] ) {
			$updated = $itemdata[ 'updated' ];
			$relative_updated = timeago( $updated );
		}
		$name = $file;
		if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
		$path = "files/$id/$filepath$file";
		if ( $_POST[ 'moveid' ] && $fid === $_POST[ 'moveid' ] )$disabled = " disabled";
		//$actions = "<div class='action-btns' onclick='setID(&quot;$itemtype-$fid&quot;);'><div class='delete-btn' id='delete-action'></div><div class='rename-btn' id='rename-action'></div></div>";
		if ( !$query || stripos( $name, $query ) !== false ) {
			if ( is_dir( $path ) === false ) {
				if ( !$_POST[ 'movelist' ] )$files .= "<li class='list-item-file$disabled' id='file-$fid' data-name='$name' data-collab='$collab'><div><div class='item-name' id='file-$fid' title='$size'>$load$name</div>$actions</div></li>";
			} else {
				$contents = getFiles( $path );
				$files .= "<li class='list-item-folder$disabled' id='folder-$fid' data-name='$name'><div><div class='item-name' id='folder-$fid' title='$size'>$load$name</div>$actions</div><ul id='dir-$fid'>$contents</ul></li>";
			}
		}
	}
	return $files;
}

// Account files backend
if ( $_SERVER[ 'SERVER_ADDR' ] != $_SERVER[ 'REMOTE_ADDR' ] ) {
	$this->output->set_status_header( 400, 'No Remote Access Allowed' );
	exit; //just for good measure
} else if ( $_SESSION ) {
	if ( $action === "list" ) {
		echo '<script type="text/javascript" src="/js/files.js"></script>';
		$user_files = folderArray( "files/$id" );
		if ( $files === false ) {
			echo "<div class='empty-list'>No files were found.</div>";
		} else {
			if ( $_POST[ 'movelist' ] )echo "<ul><li class='list-item-folder' id='folder-root' data-name='Root'><div><div class='item-name' id='folder-root'>$load Your Files</div></div><ul id='dir-root'>" . getFiles( "files/$id", $_POST[ 'query' ] ) . "</ul></li></ul>";
			else echo "<ul id='dir-root'>" . getFiles( "files/$id", $_POST[ 'query' ] ) . "</ul>";
			echo "<div class='context-menu'>
				<ul>
					<li id='rename-action' onclick='rename();'>Rename</li>
					<li id='copy-action' onclick='copy();'>Copy</li>
					<!--<li id='move-action' onclick='move();'>Move to</li>-->
					<li id='share-action' onclick='share();'>Manage collaborators</li>
					<li id='delete-action' onclick='deleteItem();'>Delete</li>
				</div>
			</div>";
		}
	}
	if ( $action === "count" ) {
		$count = count_dir( "files/$id" );
		if ( $count[ 'files' ] !== 1 )$s = "s";
		if ( $count[ 'folders' ] !== 1 )$fs = "s";
		echo $count[ 'files' ] . " file$s " . $count[ 'folders' ] . " folder$fs (" . $count[ 'size' ] . ")";
	}
	if ( $action === "create" ) {
		if ( $_POST[ 'contents' ] )$contents = $_POST[ 'contents' ];
		$type = $_POST[ 'type' ];
		if ( $type === "file" )$name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) ) . ".scpl";
		else $name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) );
		if ( !$name || !$type ) {
			if ( !$name )echo "No item name was recieved.";
			else if ( !$type )echo "No item type was recieved.";
		} else {
			$file_check = mysqli_query( $connect, "select * from data.files where name = '$name' and type = '$type'" );
			if ( mysqli_num_rows( $file_check ) === 0 ) {
				$file_id = randString( 20 );
				if ( mysqli_query( $connect, "insert into data.files (id,name,type,author) values ('" . $file_id . "','" . $name . "','$type','$id')" ) ) {
					if ( $type === "file" ) {
						if ( file_put_contents( "files/$id/$name", $contents ) !== false ) {
							echo $name;
						} else echo "Internal file system error creating file $name.";
					} else {
						if ( makeFolder( "files/$id/$name" ) ) {
							$newfile = array( "id" => $file_id, "name" => $name );
							echo json_encode( $newfile );
							http_response_code( 200 );
						} else echo "Internal file system error creating folder $name.";
					}
				} else echo "Internal database error creating file $name.";
			} else echo "File with name $name already exists.";
		}
	}
	if ( $action === "rename" ) {
		$item_id = $_POST[ 'id' ];
		$new_name = $_POST[ 'name' ];
		if ( !$item_id || !$new_name ) {
			if ( !$item_id )echo "No item id was recieved.";
			else echo "No new name for the file was recieved.";
		} else {
			$itemdata = dataArray( "files", $item_id, "id" );
			if ( $itemdata ) {
				$owner = $itemdata[ 'author' ];
				$type = ucfirst( $itemdata[ 'type' ] );
				$itemtype = $itemdata[ 'type' ];
				if ( $owner === $id ) {
					if ( $itemdata[ 'type' ] === "file" )$new_name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) ) . ".scpl";
					else $new_name = e( special( str_replace( ".scpl", "", $_POST[ 'name' ] ) ) );
					$name = $itemdata[ 'name' ];
					if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
					$path = "files/$id/$itempath$name";
					$newpath = str_replace( $name, $new_name, $path );
					if ( file_exists( $path ) ) {
						if ( mysqli_query( $connect, "update data.files set name = '$new_name' where id = '$item_id'" ) ) {
							if ( rename( $path, $newpath ) ) {
								echo "Renamed $name to $new_name";
							} else echo "There was an internal file system error renaming $name.";
						} else echo "There was an internal file system error renaming $name.";
					} else echo "$type does not appear to exist.";
				} else echo "You do not appear to own that $itemtype.";
			} else echo "Invalid $itemtype ID.";
		}
	}
	if ( $action === "delete" ) {
		$file_id = $_POST[ 'id' ];
		if ( !$file_id ) {
			echo "No item id was recieved.";
		} else {
			$itemdata = dataArray( "files", $file_id, "id" );
			if ( $itemdata ) {
				$owner = $itemdata[ 'author' ];
				if ( $owner === $id ) {
					$name = $itemdata[ 'name' ];
					$type = ucfirst( $itemdata[ 'type' ] );
					$itemtype = $itemdata[ 'type' ];
					if ( $itemdata[ 'path' ] )$itempath = $itemdata[ 'path' ] . "/";
					$path = "files/$id/$itempath$name";
					if ( file_exists( $path ) ) {
						if ( mysqli_query( $connect, "delete from data.files where id = '" . $file_id . "'" ) ) {
							if ( $itemtype === "file" ) {
								if ( unlink( $path ) )echo "File $name was deleted.";
								else echo "There was an internal file system error deleting file $name.";
							} else {
								if ( deleteDir( $path ) )echo "Folder $name was deleted.";
								else echo "There was an internal file system error deleting folder $name.";
							}
						} else echo "There was a internal database error deleting $itemtype $name.";
					} else echo "$type does not appear to exist.";
				} else echo "You do not appear to own that $itemtype.";
			} else echo "Invalid $itemtype ID.";
		}
	}
	if ( $action === "copy" ) {
		$item_id = $_POST[ 'id' ];
		$folder_id = $_POST[ 'folder' ];
		if ( !$item_id ) {
			echo "No 'item_id' was recieved.";
		} else {
			$itemdata = dataArray( "files", $item_id, "id" );
			if ( $itemdata ) {
				$owner = $itemdata[ 'author' ];
				if ( $owner === $id ) {
					$item = $itemdata[ 'name' ];
					$itemtype = $itemdata[ 'type' ];
					$type = ucfirst( $itemdata[ 'type' ] );
					if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
					$oldpath = "files/$id/$filepath$item";
					if ( $folder_id ) {
						$folderdata = dataArray( "files", $folder_id, "id" );
						if ( stripos( $filepath, $folderdata[ 'name' ] ) ) {
							if ( $itemtype === "file" )$item = str_replace( ".scpl", "", $itemdata[ 'name' ] ) . " copy.scpl";
							else $item = $itemdata[ 'name' ] . " copy";
						}
						if ( $folderdata[ 'path' ] )$folderpath = $folderdata[ 'path' ] . "/";
						$path = "files/$id/$folderpath" . $folderdata[ 'name' ] . "/$item";
						$folder_name = $folderdata[ 'name' ];
						$db_path = "'$folderpath" . $folderdata[ 'name' ] . "'";
						$newitem = $item;
					} else {
						$folder_name = "root";
						if ( $itemtype === "file" )$newitem = str_replace( ".scpl", "", $itemdata[ 'name' ] ) . " copy.scpl";
						else $newitem = $itemdata[ 'name' ] . " copy";
						$path = "files/$id/$newitem";
						$db_path = "NULL";
					}
					if ( file_exists( $oldpath ) ) {
						if ( $itemtype === "file" )$copy_function = copy( $oldpath, $path );
						else $copy_function = copy_dir( $oldpath, $path );
						if ( $copy_function ) {
							$file_id = randString( 20 );
							if ( mysqli_query( $connect, "insert into data.files (id,name,type,path,author) values ('" . $file_id . "','" . $newitem . "','$itemtype'," . $db_path . ",'$id')" ) )echo "$type $item has been copied to $folder_name.";
							else echo "Internal database error creating a copy of $item.";
						} else echo "Internal file system error copying $item to $folder_name.";
					} else echo "$type $item does not appear to exist.";
				} else echo "You do not appear to own that $itemtype.";
			} else echo "Invalid $itemtype ID.";
		}
	}
	if ( $action === "move" ) {
		$item_id = $_POST[ 'id' ];
		$folder_id = $_POST[ 'folder' ];
		if ( !$item_id ) {
			echo "No 'item_id' was recieved.";
		} else {
			$itemdata = dataArray( "files", $item_id, "id" );
			if ( $itemdata ) {
				$owner = $itemdata[ 'author' ];
				if ( $owner === $id ) {
					$item = $itemdata[ 'name' ];
					$type = ucfirst( $itemdata[ 'type' ] );
					$itemtype = $itemdata[ 'type' ];
					if ( $itemdata[ 'path' ] )$filepath = $itemdata[ 'path' ] . "/";
					$oldpath = "files/$id/$filepath$item";
					if ( $folder_id ) {
						$folderdata = dataArray( "files", $folder_id, "id" );
						if ( $folderdata[ 'path' ] )$folderpath = $folderdata[ 'path' ] . "/";
						$path = "files/$id/$folderpath" . $folderdata[ 'name' ] . "/$item";
						$folder_name = $folderdata[ 'name' ];
						$db_path = "'$folderpath" . $folderdata[ 'name' ] . "'";
					} else {
						$folder_name = "root";
						$path = "files/$id/$item";
						$db_path = "NULL";
					}
					if ( file_exists( $oldpath ) ) {
						if ( rename( $oldpath, $path ) ) {
							if ( mysqli_query( $connect, "update data.files set path = $db_path where id = '$item_id'" ) )echo "$type $item has been moved to $folder_name.";
							else echo "Internal database error moving $itemtype $item.";
						} else echo "Internal file system error moving $item to $folder_name.";
					} else echo "$type $item does not appear to exist.";
				} else echo "You do not appear to own that $itemtype.";
			} else echo "Invalid $itemtype ID.";
		}
	}
	if ( $action === "users" ) {
		$query = $_POST[ 'query' ];
		if ( !$query ) {
			echo "<div class='empty-list'>Enter a username...</div>";
		} else {
			$users = mysqli_query( $connect, "select * from data.users where username like '%$query%' and id<>'$id' order by username asc limit 50" );
			while ( $user = mysqli_fetch_array( $users ) ) {
				echo "<div class='user' id='" . $user[ 'id' ] . "'>" . $user[ 'username' ] . "</div>";
			}
		}
	}
	if ( $action === "collab" ) {
		$file = dataArray( "files", $_POST[ 'id' ], "id" );
		if ( !$file ) {
			echo "Invalid file ID";
		} else {
			$users = explode( ",", $file[ 'collab' ] );
			if ( $file[ 'collab' ] ) {
				foreach ( $users as $user ) {
					$this_user = dataArray( "users", $user, "id" );
					$username = $this_user[ 'username' ];
					echo "<div class='file-collaborator' id='user-$user'><div>$username</div><div class='collab-close' data-user='$user'>&times;</div></div>";
				}
			} else {
				echo "No one";
			}
		}
	}
	if ( $action === "access" ) {
		$file = dataArray( "files", $_POST[ 'id' ], "id" );
		$file_id = $_POST[ 'id' ];
		if ( !$file ) {
			echo "Invalid file ID";
		} else {
			$collab = $_POST[ 'collab' ];
			if ( $collab !== "NULL" )$collab = implode( ",", explode( ",", $_POST[ 'collab' ] ) );
			if ( $file[ 'author' ] === $id ) {
				if ( setValue( "files", $collab, "collab", "id = '$file_id'" ) === true ) {
					echo "success";
				} else {
					echo "Error changing file access.";
				}
			} else {
				echo "You do not own that file.";
			}
		}
	}
	if ( $action === "shared" ) {
		$query = $_POST[ 'query' ];
		$shared_files = mysqli_query( $connect, "select * from data.files where type = 'file'" );
		while ( $file = mysqli_fetch_array( $shared_files ) ) {
			$collab = explode( ",", $file[ 'collab' ] );
			if ( in_array( $id, $collab ) === true ) {
				unset( $updated );
				unset( $relative_updated );
				$fid = $file[ 'id' ];
				$timestamp = $file[ 'timestamp' ];
				$relative = timeago( $timestamp );
				if ( $file[ 'updated' ] ) {
					$updated = $file[ 'updated' ];
					$relative_updated = timeago( $updated );
				}
				$name = $file[ 'name' ];
				if ( $file[ 'path' ] )$itempath = $file[ 'path' ] . "/";
				$path = "../../files/$id/$itempath$name";
				$size = formatSize( filesize( $path ) );
				if ( !$query || stripos( $name, $query ) !== false ) {
					$files .= "<li class='list-item-file' id='file-$fid'><div class='item-name'>$load$name</div></li>";
				}
			}
		}
		if ( !$files ) {
			echo "<div class='empty-list'>No shared files were found.</div>";
		} else {
			echo "<ul>$files</ul>";
		}
	}
} else echo "Logged out";
