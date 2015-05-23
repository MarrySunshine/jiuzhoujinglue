<?php
	require_once('/alidata/www/framework/Idan.framework.php');
	class LoginControll {
		public function confirm() {
			$data = array("id" => $_POST["id"],
			"password" => $_POST["password"]);
			$obj = Idan::getInstance()->M("Login");
			if ($obj->confirm($data, 'admin')) {
				$_SESSION['id'] = $data['id'];
			} else {
				echo 'failure';
			}
		}
	}
?>