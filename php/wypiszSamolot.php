<?php
include_once 'Database.php';

$db = new Database();

$query = "SELECT * FROM samolot;";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_samolotu" => $id_samolotu,
		"liczba_miejsc" => $liczba_miejsc,
		"wymagana_obsluga" => $wymagana_obsluga,
		"typ" => $typ
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>