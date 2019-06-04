<html>
    <head>
      <title>Sign in with Apple</title>
    </head>
    <body>
        <button id="sign-in-with-apple-button">Sign In with Apple</button>
        <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
        <script type="text/javascript">
            AppleID.auth.init({
                clientId: 'com.scpl.applelogin',
                scope: 'name,email',
                redirectURI: 'https://account.scpl.dev/test.php',
                state: 'test'
            });
            const buttonElement = document.getElementById('sign-in-with-apple-button');
            buttonElement.addEventListener('click', () => {
                AppleID.auth.signIn();
            });
        </script>
    </body>
</html>
