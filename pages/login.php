<div class="login-icon"></div>
<h3>Login to ScPL Editor</h3>
<form action="auth.php" method="POST">
  <input type="hidden" name="action" value="startsession"/>
  <input type="email" id="email" name="email" placeholder="Email Address" /><div class="require-error" id="email-require">Email required.</div><br/>
  <input type="password" id="password" name="password" placeholder="Password" /><div class="require-error" id="password-require">Password required.</div><div class="mask-btn"></div><br/><br/>
<button type="submit" class="primary-btn">Login</button>
<br/></br/><hr/></br/>
<div class="login-footer">
<ul>
  <li><a href="/forgot-password">Forgot Your Password?</a></li>
  <li id="signup"><a href="/sign-up">Create an Account</a></li>
</ul>
</div>
</form>
