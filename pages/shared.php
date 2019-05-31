<?php
$account = dataArray( "users", $id, "id" );
$count = count_dir( "files/$id" );
if ( $count[ 'files' ] !== 1 )$s = "s";
if ( $count[ 'folders' ] !== 1 )$fs = "s";
?>
<div class="messages-container">
	<div class="message" id="files-message" style="display: none;"></div>
</div>
<?php if($account['status'] === "0") echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>"; ?>

<script>
	$( function () {
		listShared();
	} );
</script>

<h1>Shared with you</h1>
<p class="subtext" id="files-info">
	Files other users have shared with you to edit with them.
</p>
<br/>
<hr/>
<input type="search" class="search-input width-stretch" id="files-search" placeholder="Search Shared Files" onblur="listShared();" onchange="listShared();" onkeyup="listShared();"/>
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