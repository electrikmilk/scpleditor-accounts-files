<div class="login-icon"></div>
<h3>Login to ScPL Editor</h3>
<div class="message error" id="login-error"></div>
<form action="auth.php" method="POST" id="login-form">
  <input type="hidden" name="action" value="startsession"/>
  <input type="email" id="email" name="email" placeholder="Email Address" data-require="true" /><br/>
  <div class="mask-btn"></div><input type="password" id="password" name="password" placeholder="Password" data-require="true" /><br/><br/>
<button type="submit" class="primary-btn">Login</button>
<br/></br/><hr/></br/>
<div class="login-footer">
<ul>
  <li><a href="/forgot-password">Forgot Your Password?</a></li>
  <li id="signup"><a href="/sign-up">Create an Account</a></li>
</ul>
</div>
</form>