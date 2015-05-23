<!doctype html>
<head>
	<meta charset="utf-8">
	<?php
		if ($_GET['method'] == 'login') {
			require_once('/alidata/www/framework/Idan.framework.php');
			Idan::getInstance()->C("Login", "confirm");
		}
	?>
</head>
<body>
	<form action="#?method=login" method="POST">
		<input type="text" name="id" placeholder="管理员ID" />
		<input type="password" name="password" placeholder="密码" />
		<input type="sumbit" value="提交" />
	</form>
</body>