<?php
if($_SESSION) {
  $account = dataArray("users",$id,"id");
  $email = $account['email'];
  ?>
  <h1>Forgot Your Password?</h1>

  <h3 id="username-title">Get a link to reset the password on your account</h3>
  <p class="subtext">We'll send you a link via email to change the password to your account</p>
  <br/><hr/>
  <?php
} else echo "<h3>Forgot Password</h3>";
?>
<div class="message error" id="forgot-error" name="forgot-password-form" style="display: none;">Error sending reset link.</div>
<div class="message success" id="forgot-success" style="display: none;">Link sent!</div>
<form action="auth.php" method="POST" id="forgot-password-form">
    <input type="hidden" name="action" value="sendpasswordlink"/>
    <input type="text" name="email" id="forgot-email" placeholder="Your Email Address" value="<?php echo $email; ?>" data-require="true" /><br/></br/>
    <button type="submit" class="primary-btn">Send Reset Link</button>
</form>
<?php
if(!$_SESSION) {
?>
<br/></br/><hr/></br/>
<div class="login-footer">
<ul>
  <li><a href="/login">Back to Login</a></li>
</ul>
</div>
<?php
}
?>
