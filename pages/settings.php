<?php
$account = dataArray( "users", $id, "id" );
$count = count_dir("files/$id");
if ( $account[ 'status' ] === "0" )echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>";
if($count['files'] !== 1)$s="s";
if($count['folders'] !== 1)$fs="s";
?>

<div class="message" id="settings-message" style="display: none;"></div>

<h1>Account Settings</h1>

<h3 id="username-title">
	<?php echo $account['username']; ?>
</h3>
<p class="subtext">
	<?php echo "Account created ".timeago($account['timestamp']).", last updated ".timeago($account['updated'],true)."."; ?>
</p>
<?php echo "<p>".$count['files']." file$s ".$count['folders']." folder$fs (".$count['size'].")</p>"; ?>

<hr/>

<form action="auth.php" method="POST" name="user-settings-form" id="user-settings-form">
	<input type="hidden" name="action" value="updatefields"/>

	<div class="form-field">
		<div>Username</div>
		<div>
			<input type="text" id="username" name="username" class="width-stretch" spellcheck="false" placeholder="Username" value="<?php echo $account['username']; ?>" data-require="true" data-limit="20"/>
			<div class="input-limit" id="limit-username">
				0 / 20 character limit
			</div>
		</div>
	</div>
	<div class="form-field">
		<div>Email Address</div>
		<div>
			<input type="emal" id="email" name="email" class="width-stretch" spellcheck="false" placeholder="Email Address" value="<?php echo $account['email']; ?>" data-require="true"/>
		</div>
	</div>
	<div class="form-field">
		<div>Password</div>
		<div><br/><a href='/forgot-password'>Reset my password</a>
		</div>
	</div>
	<br/><br/>
	<button type="submit" class="primary-btn">Save changes</button>
</form>
