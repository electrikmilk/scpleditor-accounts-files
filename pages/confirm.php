<?php
if(!$_GET['token']) {
  header("Location: /login");
} else {
  $token = dataArray("tokens",$_GET['token'],"id");
  $user_id = $token['user_id'];
  mysqli_query($connect,"update data.users set status = '1' where id = '$user_id'");
  $token = $token['token'];
  mysqli_query($connect,"delete from data.tokens where token = '".$token."'");
}
?>
<h3>Account activated!</h3>
<p>Thanks for confirming your email address. You rock!</p>
</br/><hr/></br/>
<div class="login-footer">
<ul>
  <li><a href="https://editor.scpl.dev/">Back to Editor</a></li>
</ul>
</div>
</form>
