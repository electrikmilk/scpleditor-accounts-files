<html>
    <head>
        <meta name="appleid-signin-client-id" content="[CLIENT_ID]">
        <meta name="appleid-signin-scope" content="name,email">
        <meta name="appleid-signin-redirect-uri" content="https://account.scpl.dev/settings">
        <meta name="appleid-signin-state" content="init-request">
    </head>
    <body>
        <button id="sign-in-with-apple-button">Sign In with Apple</button>
        <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
        <script type="text/javascript">
            const buttonElement = document.getElementById('sign-in-with-apple-button');
            buttonElement.addEventListener('click', () => {
                AppleID.auth.signIn();
            });
        </script>
    </body>
</html>
