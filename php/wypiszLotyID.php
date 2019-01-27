<?php
include_once 'Database.php';

$db = new Database();

$query = 
"SELECT l.id_lotu, ltn1.miejsce || ' - ' || ltn2.miejsce AS trasa, l.data_odlotu, l.data_przylotu 
FROM lot l, lotnisko ltn1, lotnisko ltn2
WHERE ltn1.id_lotnisko=l.id_lotnisko_odlot AND ltn2.id_lotnisko=l.id_lotnisko_przylot;";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

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

