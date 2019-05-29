<?php $account = dataArray("users",$id,"id"); ?>
<div class="message" id="files-message" style="display: none;"></div>
<?php if($account['status'] === "0") echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>"; ?>

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
<div class="file-list">
	<ul>
		<li class="list-item-file">
			<div class="item-name">
				<div className="spinner">
					<div className="bar1"/>
					<div className="bar2"/>
					<div className="bar3"/>
					<div className="bar4"/>
					<div className="bar5"/>
					<div className="bar6"/>
					<div className="bar7"/>
					<div className="bar8"/>
					<div className="bar9"/>
					<div className="bar10"/>
					<div className="bar11"/>
					<div className="bar12"/>
				</div>
				Basic file.scpl
			</div>
		</li>

		<li class="list-item-folder">
			<div class="item-name">
				<div className="spinner">
					<div className="bar1"/>
					<div className="bar2"/>
					<div className="bar3"/>
					<div className="bar4"/>
					<div className="bar5"/>
					<div className="bar6"/>
					<div className="bar7"/>
					<div className="bar8"/>
					<div className="bar9"/>
					<div className="bar10"/>
					<div className="bar11"/>
					<div className="bar12"/>
				</div>
				Basic folder
			</div>
		</li>
	</ul>
</div>