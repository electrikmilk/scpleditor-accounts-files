<?php
$account = dataArray( "users", $id, "id" );
if ( $account[ 'status' ] === "0" )echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>";
?>

<div class="message" id="settings-message" style="display: none;"></div>

<h1>Account Settings</h1>

<h3 id="username-title">
    <?php echo $account['username']; ?>
</h3>
<p class="subtext">Account created
    <?php echo timeago($account['timestamp']); ?>
</p>
<p>You have
    <?php echo file_count("files/".$account['id']); ?> in your account.</p>
<?php if($account['updated'])echo "<p>Last updated ".timeago($account['updated'])."</p>"; ?>

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