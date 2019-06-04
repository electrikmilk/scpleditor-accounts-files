<?php
$account = dataArray( "users", $id, "id" );
$count = count_dir( "files/$id" );
if ( $count[ 'files' ] !== 1 )$s = "s";
if ( $count[ 'folders' ] !== 1 )$fs = "s";
?>
<div class="messages-container">
	<div class="message" id="files-message" style="display: none;"></div>
</div>
<?php if($account['status'] === "0") echo "<div class='message warning width-stretch'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>"; ?>
<?php if($account_limit === true) echo "<div class='message warning width-stretch'>Your account limit has been reached (500 MB). You can clear up space by exporting some of your ScPL files as shortcuts to your device. To export an ScPL file, right click on the file and click 'Export as .shortcut'</div>"; ?>

<script>
	$( function () {
		listFiles();
	} );
</script>

<h1>Files</h1>
<p class="subtext" id="files-info">
	<?php echo $count['files']." file$s ".$count['folders']." folder$fs (".$count['size'].")"; ?>
</p>
<br/>
<hr/>
<div class="files-nav">
	<div class="nav-btns">
		<button type="submit" class="file-btn new-btn" onclick="newFile();"></button>
		<!-- <button type="submit" class="file-btn newf-btn" onclick="newFolder();"></button> -->
	</div>
	<div class="nav-search"><input type="search" class="search-input" id="files-search" placeholder="Search Files" onblur="listFiles();" onchange="listFiles();" onkeyup="listFiles();"/>
	</div>
</div>
<div class="file-list">
	<div class='spinner'>
		<div class='bar1'></div>
		<div class='bar2'></div>
		<div class='bar3'></div>
		<div class='bar4'></div>
		<div class='bar5'></div>
		<div class='bar6'></div>
		<div class='bar7'></div>
		<div class='bar8'></div>
		<div class='bar9'></div>
		<div class='bar10'></div>
		<div class='bar11'></div>
		<div class='bar12'></div>
	</div>
</div>
<div class='context-menu'>
	<ul>
		<li id='rename-action' onclick='rename();'>Rename</li>
		<li id='copy-action' onclick='copy();'>Copy</li>
		<!--<li id='move-action' onclick='move();'>Move to...</li>-->
		<li id='share-action' onclick='share();'>Manage Collaborators</li>
		<li id='preview-action' onclick='exportShortcut(true);'>Preview</li>
		<li id='export-action' onclick='exportShortcut();'>Export as .shortcut</li>
		<li id='delete-action' onclick='deleteItem();'>Delete</li>
	</div>
</div>
