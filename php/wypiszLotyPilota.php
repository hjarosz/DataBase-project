<?php
include_once 'Database.php';

$db = new Database();



$params = array($_POST["id_pilota"]);
$query = "SELECT id_lotu, trasa, data_odlotu, data_przylotu FROM lotyPilota WHERE id_pilota_1=$1 OR id_pilota_2=$1";

$result = pg_query_params($db->conn, $query, $params);

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_lotu" => $id_lotu,
		"trasa" => $trasa,
		"data_odlotu" => $data_odlotu,
		"data_przylotu" => $data_przylotu
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>