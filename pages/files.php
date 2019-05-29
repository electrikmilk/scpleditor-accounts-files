<?php $account = dataArray("users",$id,"id"); ?>
<div class="message" id="files-message" style="display: none;"></div>
<?php if($account['status'] === "0") echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>"; ?>

<script>
$(function () {
	listFiles();
});
</script>

<h1>Files</h1>
<p class="subtext">
	<?php echo file_count("files/".$account['id']."/"); ?>
</p>
<br/>
<hr/>
<div class="files-nav">
	<div class="nav-btns">
		<button type="submit" class="file-btn upload-btn"></button>
		<button type="submit" class="file-btn new-btn"></button>
		<button type="submit" class="file-btn newf-btn"></button>
	</div>
	<div class="nav-search"><input type="search" class="search-input" id="files-search" placeholder="Search Files"/>
	</div>
</div>
<div class="file-list"></div>
