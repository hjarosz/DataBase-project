<?php
include_once 'Database.php';

$db = new Database();

$query = 
"SELECT z.id_zalogi, p1.imie || ' ' || p1.nazwisko AS pilot_1, p2.imie || ' ' || p2.nazwisko AS pilot_2,
        (SELECT COUNT(*) FROM obsluga o WHERE z.id_obslugi = o.id_obslugi) AS liczba_obslugi
FROM zaloga z, pilot p1, pilot p2 WHERE p1.id_pilota=z.id_pilota_2 AND p2.id_pilota=z.id_pilota_1;";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_zalogi" => $id_zalogi,
		"pilot_1" => $pilot_1,
		"pilot_2" => $pilot_2,
		"liczba_obslugi" => $liczba_obslugi
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>

