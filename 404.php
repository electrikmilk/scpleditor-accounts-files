<?php include("global.php"); ?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8"/>

    <title>Page Not Found (404) - ScPL Editor</title>

    <script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>

    <link rel="stylesheet" href="main.css"/>
    <script type="text/javascript" src="main.js"></script>

    <link rel="shortcut icon" href="favicon/favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"/>
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
    <link rel="manifest" href="favicon/site.webmanifest">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#007aff">
    <meta name="msapplication-TileColor" content="#1e1f57">
    <meta name="theme-color" content="#1e1f57">

    <link rel="manifest" href="favicon/manifest.json"/>

</head>

<body>
    <div class="external-form">
        <div>
            <h2>Page Not Found</h2>
            <p>You must of clicked a broken link,<br/> this page was moved, or it does not exist.</p>
            <hr/>
            </br/>
            <div class="login-footer">
                <ul>
                    <li><a href="https://editor.scpl.dev/">Back to Editor</a>
                    </li>
                    <?php
                    if ( $_SESSION ) {
                        ?>
                    <li id="signup"><a href="/settings">Account Settings</a>
                    </li>
                    <?php
                    } else {
                        ?>
                    <li id="signup"><a href="/login">Login</a>
                    </li>
                    <li id="signup"><a href="/sign-up">Sign up</a>
                    </li>
                    <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
    </div>
</body>
</html>