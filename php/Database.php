<?php
	class Database{
		private $conn_string = "host=localhost port=5432 dbname=airlines user=grubaz password=razer";

		public $conn;

		public function __construct(){
			$this->conn = pg_connect($this->conn_string);
		}
	}
?>