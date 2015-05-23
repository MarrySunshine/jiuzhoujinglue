<?php
	require_once('/alidata/www/framework/Idan.framework.php');
	class LoginModule {
		public function confirm($data, $type = 'user') {
			if ($type == 'admin') {
				$mysql = Idan::getInstance()->M("Mysql");
				$con = $mysql->select('*', $type, "id=" . $data['id']);
				if ($row = mysql_fecth_assoc($con)) {
					if ($data['password'] = $row['password']) {
						return true;
					}
				}
				return false;
			}
		}
	}
?>