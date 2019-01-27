<?php
include_once 'Database.php';

$db = new Database();

$params = array($_POST["tabela"]);
$query = "";

switch ($_POST["tabela"]) {
	case "samolot":
		$query = "SELECT MAX(id_samolotu) AS id_wolne FROM samolot";
		break;
	case "pilot":
		$query = "SELECT MAX(id_pilota) AS id_wolne FROM pilot";
		break;
	case "osoba":
		$query = "SELECT MAX(id_osoby) AS id_wolne FROM osoba";
		break;
	case "lotnisko":
		$query = "SELECT MAX(id_lotnisko) AS id_wolne FROM lotnisko";
		break;
	case "obsluga":
		$query = "SELECT MAX(id) AS id_wolne FROM obsluga";
		break;
	case "zaloga":
		$query = "SELECT MAX(id_zalogi) AS id_wolne FROM zaloga";
		break;
	case "lot":
		$query = "SELECT MAX(id_lotu) AS id_wolne FROM lot";
		break;
	
	default:
		break;
}

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"id_wolne" => $id_wolne + 1
	);

	array_push($post_arr, $item);
}

echo json_encode($post_arr);

?>
