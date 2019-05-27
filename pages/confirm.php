<?php
$token = dataArray( "tokens", $_GET[ 'token' ], "token" );
if ( !$_GET[ 'token' ] || !$token ) {
    header( "Location: /login" );
} else {
    $user_id = $token[ 'user_id' ];
    $token_id = $token[ 'id' ];
    mysqli_query( $connect, "update data.users set status = '1' where id = '$user_id'" );
    mysqli_query( $connect, "delete from data.tokens where id = '" . $token_id . "'" );
}
?>
<h3>Account activated!</h3>
<p>Thanks for confirming your email address.</p>
<br/>
<hr/><br/>
<div class="login-footer">
    <ul>
        <li><a href="https://editor.scpl.dev/">Back to Editor</a>
        </li>
        <li><a href="/settings">Back to Account</a>
        </li>
    </ul>
</div>