<?php
	class Idan {
		private $_instance;
		public static function getInstance() {
			if (!isset($_instance)) {
				session_start();
				$_instance = new Idan();
			}
			return $_instance;
		}
		public function C($controller, $method) {
			require_once('libs/' . $controller . 'Controller.class.php');
			$controller = $controller . 'Controller';
			$obj = new $controller;
			$obj->$method();
		}
		public function M($module) {
			require_once('module/' . $module . 'Module.class.php');
			$module = $module . 'Module';
			$obj = new $module;
			return $obj;
		}
	}
?>