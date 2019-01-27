<?php
include_once 'Database.php';

$db = new Database();



$params = array($_POST["pesel"], date("Y-m-d"));
$opcja = $_POST["opcja"];

if($opcja == "historia"){
	$query = "SELECT id_lotu, trasa, data_odlotu, data_przylotu FROM lotyPasazera WHERE pesel=$1 AND data_odlotu < $2";
} else{
	$query = "SELECT id_lotu, trasa, data_odlotu, data_przylotu FROM lotyPasazera WHERE pesel=$1 AND data_odlotu >= $2";
}

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