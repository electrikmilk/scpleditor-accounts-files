<div class="login-icon"></div>
<h3>Account Sign-up</h3>
<div class="message error" id="signup-error"></div>
<form action="auth.php" method="POST" id="signup-form">
    <input type="hidden" name="action" value="createuser"/>
    <input type="text" id="username" name="username" placeholder="Username" data-limit="20" data-require="true"/>
    <div class="input-limit" id="limit-username">
    					0 / 20 character limit
    				</div>
    <br/>
    <input type="email" id="email" name="email" placeholder="Your Email Address" data-require="true" /><br/>
    <div class="mask-btn"></div><input type="password" id="password" name="password" placeholder="Password"  data-require="true" /><br/><br/>
    <button type="submit" class="primary-btn">Create Account</button>
</form>
<br/></br/><hr/></br/>
<div class="login-footer">
<ul>
  <li id="signup"><a href="https://editor.scpl.dev/">Back to Editor</a></li>
  <li>Already have an account? <a href="/login">Login</a></li>
</ul>
</div>
</form>
