<?php
$account = dataArray("users",$id,"id");
?>

<h1>Account Settings</h1>

<h3><?php echo $account['username']; ?></h3>
<p class="subtext">Account created <?php echo timeago($account['timestamp']); ?></p>
<?php if($account['updated'])echo "<p>You last updated your account ".timeago($account['updated'])."</p>"; ?>

<hr/>

<table class="width-full">
<tr>
  <td class="setting-label-td"><label for="username">Username:</label></td>
  <td><input type="text" id="username" name="username" placeholder="Username" value="<?php echo $account['username']; ?>"/></td>
</tr>
<tr>
  <td class="setting-label-td"><label for="email">Email Address:</label></td>
  <td><input type="emal" id="email" name="email" placeholder="Email Address" value="<?php echo $account['email']; ?>"/></td>
</tr>
<tr>
  <td class="setting-label-td"><br/><label for="password">Password:</label></td>
  <td><br/><a href='/forgot-password'>Reset my password</a></td>
</tr>
</table>
