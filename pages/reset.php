<?php
$token = dataArray("tokens",$_GET['token'],"token");
if(!$_GET['token'] || !$token) header("Location: /forgot-password");
if(!$_SESSION) {
  echo "<div class='login-icon'></div><h3>Reset Your Password</h3>";
} else{
?>
<h1>Reset Your Password</h1>
<h3 id="username-title">Enter a new password for your account</h3>
<p class="subtext">Enter a new password to use when logging into your account.</p>
<br/><hr/>
<?php
}
?>
<div class="message error" id="reset-error" name="reset-password-form" style="display: none;">Error resetting password</div>
<form action="auth.php" method="POST" id="reset-password-form">
    <input type="hidden" name="action" value="resetpassword"/>
    <input type="hidden" name="token" value="<?php echo $_GET['token']; ?>"/>
    <div class="mask-btn"></div><input type="password" name="password" id="password" placeholder="New Password" required/>
    <br/><br/>
    <button type="submit" class="primary-btn">Set New Password</button>
</form>
<?php
if(!$_SESSION) {
?>
<br/></br/><hr/></br/>
<div class="login-footer">
  <ul>
    <li><a href="https://editor.scpl.dev/">Back to Editor</a></li>
    <li id="signup"><a href="/login">Back to Login</a></li>
  </ul>
</div>
<?php
}
?>
