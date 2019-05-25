<?php
$token = dataArray("tokens",$_GET['token'],"id");
if(!$_GET['token'] || !$token) {
  //header("Location: /forgot-password");
}
?>
<div class="login-icon"></div>
<h3>Reset Your Password</h3>
<form action="auth.php" method="POST" >
    <input type="hidden" name="action" value="resetpassword"/>
    <input type="hidden" name="action" value="user_id" value="<?php echo $token['user_id']; ?>"/>
    <input type="hidden" name="action" value="token" value="<?php echo $_GET['token']; ?>"/>
    <div class="mask-btn"></div><input type="text"  id="password" placeholder="New Password" />
    <br/>
    <button type="submit" class="primary-btn">Set New Password</button>
</form>
<br/></br/><hr/></br/>
<div class="login-footer">
<ul>
  <li><a href="https://editor.scpl.dev/">Back to Editor</a></li>
  <li id="signup"><a href="/login">Back to Login</a></li>
</ul>
</div>
</form>
