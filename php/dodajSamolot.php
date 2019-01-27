<?php
include_once 'Database.php';

error_reporting(E_ERROR | E_PARSE);

$db = new Database();

$params = array($_POST["id"], $_POST["miejsca"], $_POST["obsluga"], $_POST["typ"]);
$query = "INSERT INTO samolot VALUES ($1, $2, $3, $4);";

$post_arr["data"] = array();
//$post_arr["error"] = array();
$error = "";

$result = pg_query_params($db->conn, $query, $params);

if($result){
	//$error = "false";
	$post_arr["error"] = false;
} else{
	//$error = "true";
	$post_arr["error"] = true;
}

//array_push($post_arr["error"], $error);
echo json_encode($post_arr);

?>