<?php
include_once 'Database.php';

error_reporting(E_ERROR | E_PARSE);

$db = new Database();

$params = array($_POST["id"], $_POST["imie"], $_POST["nazwisko"]);
$query = "INSERT INTO pilot VALUES ($1, $2, $3);";

$post_arr["data"] = array();
$error = "";

$result = pg_query_params($db->conn, $query, $params);

if($result){
	//$error = "false";
	$post_arr["error"] = false;
} else{
	//$error = "true";
	$post_arr["error"] = true;
}

echo json_encode($post_arr);

?>