<?php
include_once 'Database.php';

$db = new Database();

$query = "SELECT o.id_obslugi, COUNT(*) AS liczba_obslugi FROM obsluga o GROUP BY o.id_obslugi ORDER BY 1";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_obslugi" => $id_obslugi,
		"liczba_obslugi" => $liczba_obslugi
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>