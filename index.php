<?php include("global.php"); ?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"/>
	<meta name="msapplication-TileColor" content="#1e1f57">
	<meta name="theme-color" content="#1e1f57">

	<?php include("metadata.php"); ?>

	<script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script type="text/javascript" src="/js/main.js"></script>

	<link rel="stylesheet" href="/main.css"/>

	<link rel="shortcut icon" href="/favicon/favicon.ico"/>

	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
	<link rel="manifest" href="/favicon/site.webmanifest">
	<link rel="manifest" href="/favicon/manifest.json"/>
	<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#007aff">

</head>

<body>

	<?php
	// No page redirect
	if ( !$page ) {
		if ( !$_SESSION )header( "Location: /login" );
		else header( "Location: /settings" );
	}

	if ( $_SESSION ) {
		?>
	<div class="modals-container">

		<div class="modal" id="share-dialog">
			<h2>Share ScPL file</h2>
			<p>Collaborators will only be able to open and make changes to this file.</p>
			<input type="search" id="users-search" class="search-input width-stretch" placeholder="Search Users" onchange="listUsers();" onkeyup="listUsers();" onblur="listUsers();"/>
			<div class="users-list">
				<div class="empty-list">Enter a username...</div>
			</div>
			<div class="navigation-subhead">
				<div>Shared with</div>
			</div>
			<div class="collab-list">No one</div>
			<input type="hidden" id="file-collab"/>
			<br/>
			<div class="btn-group">
				<button type="submit" class="modal-btn primary-btn" onclick="changeAccess();">Change Access</button>
				<button type="submit" class="modal-btn" id="cancel-share">Cancel</button>
			</div>
		</div>

		<div class="modal" id="preview-dialog">
			<div class="shortcut-preview">
				<div class="preview-load">
					<?php echo $load; ?>
				</div>
				<iframe src="" frameborder="0" allowtransparency></iframe>
			</div>
			<div class="btn-group">
				<button type="submit" class="modal-btn" onclick="modal('preview-dialog'),exportShortcut();">Export</button>
				<button type="submit" class="modal-btn primary-btn" onclick="modal('preview-dialog');">Close</button>
			</div>
		</div>

		<div class="modal" id="move-dialog">
			<h2>Move to...</h2>
			<p>Choose a folder below to move this item to.</p>
			<input type="search" id="move-search" class="search-input width-stretch" placeholder="Search Files" onchange="listMove();" onkeyup="listMove();" onblur="listMove();"/>
			<div class="users-list moveto-list">
				<div class="empty-list">No files found.</div>
			</div>
			<br/>
			<div class="btn-group">
				<button type="submit" class="modal-btn primary-btn" onclick="moveTo();">Move Item</button>
				<button type="submit" class="modal-btn" onclick="modal('move-dialog');">Cancel</button>
			</div>
		</div>

		<div class="modal" id="new-file-dialog">
			<h2>New ScPL File</h2>
			<p>Enter a filename</p>
			<input type="text" id="new-filename" class="width-stretch" placeholder="Shortcut Name" autofocus/>
			<br/>
			<div class="btn-group">
				<button type="submit" class="modal-btn primary-btn" onclick="newFile(true);">Create</button>
				<button type="submit" class="modal-btn" onclick="modal('new-file-dialog');">Cancel</button>
			</div>
		</div>

	</div>
	<div class="config-container">
		<div class="main-navigation">
			<div class="nav-menu"></div>
			<div class="editor-title">ScPL Editor</div>
			<div class="nav-title">
				<?php echo $nav_title; ?>
			</div>
		</div>
		<div class="main-container">
			<div class="side-navigation">
				<div class="navigation-subhead">
					<div>Manage Account</div>
				</div>
				<div class="menu-container">
					<ul>
						<a href="/settings">
							<li class="profile-icon <?php echo $account_active; ?>">
								<div>Account</div>
							</li>
						</a>
						<?php
						if ( !$ismobile ) {
							?>
						<a href="/filebrowser">
							<li class="file-icon <?php echo $files_active; ?>">
								<div>Files</div>
							</li>
						</a>
						<?php
						}
						?>
						<a href="/shared">
							<li class="shared-icon <?php echo $shared_active; ?>">
								<div>Shared with me</div>
							</li>
						</a>
						<a href="https://editor.scpl.dev/" target="_blank" rel="noopener">
							<li class="editor-icon">
								<div>Editor</div>
							</li>
						</a>
						<a href="javascript:;" onclick="confirmLogout();">
							<li class="exit-icon">
								<div>Sign Out</div>
							</li>
						</a>
					</ul>
				</div>

				<div class="navigation-subhead">
					<div>Help</div>
				</div>
				<div class="menu-container">
					<ul>
						<a href="https://docs.scpl.dev/gettingstarted.html" target="_blank" rel="noopener">
							<li class="web-icon">
								<div>Getting Started with ScPL</div>
							</li>
						</a>
						<a href="https://docs.scpl.dev/" target="_blank" rel="noopener">
							<li class="web-icon">
								<div>ScPL Documentation</div>
							</li>
						</a>
						<a href="https://github.com/internetgho5t/scpleditor-accounts-files" target="_blank" rel="noopener">
							<li class="web-icon">
								<div>Github</div>
							</li>
						</a>
						<a href="https://discord.gg/2qqfFKc" target="_blank" rel="noopener">
							<li class="web-icon">
								<div>ScPL Discord</div>
							</li>
						</a>
					</ul>
				</div>
			</div>
			<div class="page-container">
				<?php
				if ( $page === "login" || $page === "sign-up" )header( "Location: /settings" );
				else require( "pages/$page.php" );
				?>
			</div>
		</div>
	</div>

	<?php
	} else {
		if ( $page === "settings" || $page === "files" )header( "Location: /login" );
		?>
	<div class="external-form">
		<div>
			<?php require("pages/$page.php"); ?>
		</div>
	</div>
	<?php
	}
	?>
</body>
</html>
