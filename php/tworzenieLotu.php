<?php
include_once 'Database.php';

error_reporting(E_ERROR | E_PARSE);

$db = new Database();

$params = array(
	$_POST["id_lotu"], $_POST["id_zalogi"], $_POST["id_samolotu"],
	$_POST["id_lotnisko_odlot"], $_POST["id_lotnisko_przylot"], $_POST["data_odlotu"],
	$_POST["data_przylotu"]
);
$query = "INSERT INTO lot VALUES ($1, $2, $3, $4, $5, $6, $7);";

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