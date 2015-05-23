<?php
	require_once('framework/Idan.framework.php');
	class QuesController {
		public function sayHello() {
			$obj = Idan::getInstance()->M('test');
			echo $obj->test();
		}
	}
?>