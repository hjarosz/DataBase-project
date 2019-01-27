<?php
include_once 'Database.php';

$db = new Database();



$params = array($_POST["id_lotnisko_odlot"],$_POST["id_lotnisko_przylot"]);
$query = "SELECT id_lotu, data_odlotu, data_przylotu FROM lot WHERE id_lotnisko_odlot=$1 AND id_lotnisko_przylot=$2;";

$result = pg_query_params($db->conn, $query, $params);

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_lotu" => $id_lotu,
		"data_odlotu" => $data_odlotu,
		"data_przylotu" => $data_przylotu
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>