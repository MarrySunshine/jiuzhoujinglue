<?php
	require_once('/alidata/www/framework/Idan.framework.php');
	class MysqlModule {
		public function __construct() {
			$this->con = mysql("localhost", "root", "Yiran20..");
			if ($this->con) {
				echo "seccess";
			} else {
				echo mysql_error();
			}
		}
		public function select($index = '*', $table, $where = '') {
			$sql = "select " . $index . " from " . $table . ($where == '' ? " where " . $where : '');
			return mysql_query($sql);
		}
		private $con;
	}
?>