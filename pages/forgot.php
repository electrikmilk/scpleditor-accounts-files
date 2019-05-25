<h3>Forgot Password</h3>
<form action="auth.php" method="POST">
    <input type="hidden" name="action" value="sendpasswordlink"/>
    <input type="text" placeholder="Your Email Address" /><br/></br/>
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
