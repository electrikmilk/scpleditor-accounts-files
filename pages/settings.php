<?php
$account = dataArray("users",$id,"id");
if($account['status'] === "0") echo "<div class='message warning'>Your account has not yet been activated. Please check your email. Be sure to check your junk/spam folder.</div>";
?>

<div class="message" id="settings-message" style="display: none;"></div>

<h1>Account Settings</h1>

<h3 id="username-title"><?php echo $account['username']; ?></h3>
<p class="subtext">Account created <?php echo timeago($account['timestamp']); ?></p>
<p><?php echo file_count("files/".$account['id']); ?></p>
<?php if($account['updated'])echo "<p>You last updated your account ".timeago($account['updated'])."</p>"; ?>

<hr/>

<form action="auth.php" method="POST" id="user-settings-form">
  <input type="hidden" name="action" value="updatefields"/>
  <table class="width-full">
  <tr>
    <td class="setting-label-td"><label for="username">Username:</label></td>
    <td><input type="text" id="username" name="username" class="width-stretch" spellcheck="false" placeholder="Username" value="<?php echo $account['username']; ?>" data-require="true" data-limit="20"/>
      <div class="input-limit" id="limit-username">
        0 / 20 character limit
      </div>
      <br/>
    </td>
  </tr>
  <tr>
    <td class="setting-label-td"><label for="email">Email:</label></td>
    <td><input type="emal" id="email" name="email" class="width-stretch" spellcheck="false" placeholder="Email Address" value="<?php echo $account['email']; ?>" data-require="true"/></td>
  </tr>
  <tr>
    <td class="setting-label-td"><br/><label for="password">Password:</label></td>
    <td><br/><a href='/forgot-password'>Reset my password</a></td>
  </tr>
  </table>
  <br/><br/>
  <button type="submit" class="primary-btn">Save changes</button>
</form>
