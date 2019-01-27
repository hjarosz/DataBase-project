<?php
include_once 'Database.php';

$db = new Database();

$query = "SELECT * FROM pasazer;";

$result = pg_query($db->conn, $query);

if(!$result){
	echo "Błąd";
}

$post_arr = array();
//$post_arr["error"] = array();
$post_arr["data"] = array();

while($row = pg_fetch_assoc($result)){
	extract($row);

	$item = array(
		"pesel" => $pesel,
		"imie" => $imie,
		"nazwisko" => $nazwisko
	);

	array_push($post_arr["data"], $item);
}

$error = "";
if($result == false){
	$error = "true";
} else {
	error = "false";
}

array_push($post_arr["error"], $error);
echo json_encode($post_arr);

?>