<?php
include_once 'Database.php';

$db = new Database();

$query = "SELECT * FROM pilot;";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_pilota" => $id_pilota,
		"imie" => $imie,
		"nazwisko" => $nazwisko
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>