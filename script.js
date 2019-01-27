/*
	Globalne zmienne zawierające kod HTML odpowiednio stylizujący element div
	dla przypadku sukcesu/błędu żądania
*/
var successAlert =  "<div class=\"success\"> <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>Dodano</div>";
var errorAlert=  "<div class=\"error\"> <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span>Błąd bazy danych</div>";



/*
#############################################################################################
										FUNKCJE MENU
#############################################################################################
	Funkcje podmieniające kod HTML w elemencie div
	Kod jest formularzem wprowadzania danych bądź kolejnymi przyciskami
	Wywoływane są za pomocą zdarzenia onclick
*/

/* wyświetlenie menu z wyborem opcji dodawania */
function dodajMenu(){
	clear();
	var div = document.getElementById("content");

	var txt = "Dodawanie do podstawowych tabel</br></br>"; 
	txt += "<button onclick=dodajSamolot()>Dodaj samolot</button>";
	txt += "<button onclick=dodajPilota()>Dodaj pilota</button>";
	txt += "<button onclick=dodajOsobe()>Dodaj osobe</button>";
	txt += "<button onclick=dodajPasazera()>Dodaj pasażera</button>";
	txt += "<button onclick=dodajLotnisko()>Dodaj lotnisko</button>";
	txt += "</br></br></br>Zaawansowane dodawanie</br></br>";
	txt += "<button onclick=tworzenieObslugi()>Tworzenie obsługi</button>";
	txt += "<button onclick=tworzenieZalogi()>Tworzenie załogi</button>";
	txt += "<button onclick=tworzenieLotu()>Tworzenie lotu</button>";
	txt += "<button onclick=dodajPasazerLot()>Dodawanie pasażera do lotu</button>";

	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania samolotu */
function dodajSamolot(){

	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" onclick=autoID(\"samolot\") id=\"id\"> ID samolotu</br>"
	txt += "<input type=\"text\" id=\"miejsca\"> Liczba miejsc</br>"
	txt += "<input type=\"text\" id=\"obsluga\"> Wymagana obługa</br>"
	txt += "<input type=\"text\" id=\"typ\"> Typ</br>"
	txt += "<input type=\"submit\" onclick=foo_dodajSamolot() value=\"Dodaj\">"

	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania pilota */
function dodajPilota(){
	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" onclick=autoID(\"pilot\") id=\"id\"> ID pilota</br>"
	txt += "<input type=\"text\" id=\"imie\"> Imie</br>"
	txt += "<input type=\"text\" id=\"nazwisko\"> Nazwisko</br>"
	txt += "<input type=\"submit\" onclick=foo_dodajPilota() value=\"Dodaj\">"


	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania osoby */
function dodajOsobe(){
	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" onclick=autoID(\"osoba\") id=\"id\"> ID osoby</br>"
	txt += "<input type=\"text\" id=\"imie\"> Imie</br>"
	txt += "<input type=\"text\" id=\"nazwisko\"> Nazwisko</br>"
	txt += "<input type=\"submit\" onclick=foo_dodajOsobe() value=\"Dodaj\">"

	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania pasażera */
function dodajPasazera(){
	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" id=\"pesel\"> Pesel</br>"
	txt += "<input type=\"text\" id=\"imie\"> Imie</br>"
	txt += "<input type=\"text\" id=\"nazwisko\"> Nazwisko</br>"
	txt += "<input type=\"submit\" onclick=foo_dodajPasazera() value=\"Dodaj\">"


	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania lotniska */
function dodajLotnisko(){
	var div = document.getElementById("content");

	var txt = "";
	txt += "<input type=\"text\" onclick=autoID(\"lotnisko\") id=\"id\"> ID lotniska</br>"
	txt += "<input type=\"text\" id=\"miejsce\"> Miejsce</br>"
	txt += "<input type=\"text\" id=\"typ\"> Obsługiwany typ</br>"
	txt += "<input type=\"submit\" onclick=foo_dodajLotnisko() value=\"Dodaj\">"

	div.innerHTML = txt;
}

/* wyświetlenie formularza tworzenia obsługi */
function tworzenieObslugi(){
	var div = document.getElementById("content");

	var txt = "";
	txt += "<input type=\"text\" onclick=autoID(\"obsluga\") id=\"id\"> ID </br>"
	txt += "<input type=\"text\" onclick=wypiszObsluge() id=\"id_obslugi\"> ID obsługi(numer)</br>"
	txt += "<input type=\"text\" onclick=wypiszOsoby() id=\"osoba\"> ID osoby</br>"
	txt += "<input type=\"submit\" value=\"Dodaj\" onclick=foo_tworzenieObslugi()>"

	div.innerHTML = txt;
}

/* wyświetlenie formularza tworzenia załogi */
function tworzenieZalogi(){
	var div = document.getElementById("content");

	var txt = "";
	txt += "<input type=\"text\" onclick=autoID(\"zaloga\") id=\"id_zalogi\"> ID załogi</br>"
	txt += "<input type=\"text\" onclick=wypiszObsluge() id=\"id_obslugi\"> ID obslugi</br>"
	txt += "<input type=\"text\" onclick=wypiszPilota() id=\"id_pilot1\"> ID pilota1</br>"
	txt += "<input type=\"text\" onclick=wypiszPilota() id=\"id_pilot2\"> ID pilota2</br>"
	txt += "<input type=\"submit\" value=\"Dodaj\" onclick=foo_tworzenieZalogi()>"

	div.innerHTML = txt;
}

/* wyświetlenie formularza tworzenia lotu */
function tworzenieLotu(){
	var div = document.getElementById("content");

	var txt = "";
	txt += "<input type=\"text\" onclick=autoID(\"lot\") id=\"id_lotu\"> ID lotu</br>"
	txt += "<input type=\"text\" onclick=wypiszZaloge() id=\"id_zalogi\"> ID załogi</br>"
	txt += "<input type=\"text\" onclick=wypiszSamolot() id=\"id_samolotu\"> ID samolotu</br>"
	txt += "<input type=\"text\" onclick=wypiszLotnisko() id=\"id_lotnisko_odlot\"> ID lotniska odlotu</br>"
	txt += "<input type=\"text\" onclick=wypiszLotnisko() id=\"id_lotnisko_przylot\"> ID lotniska przylotu</br>"
	txt += "<input type=\"date\" id=\"data_odlotu\"> Data odlotu</br>"
	txt += "<input type=\"date\" id=\"data_przylotu\"> Data przylotu</br>"
	txt += "<input type=\"submit\" value=\"Dodaj\" onclick=foo_tworzenieLotu()>"

	div.innerHTML = txt;
}

/* wyświetlenie formularza dodawania pasażera do lotu */
function dodajPasazerLot(){
	var div = document.getElementById("content");

	var txt = "";
	txt += "<input type=\"text\" onclick=wypiszPasazerow() id=\"pesel\"> PESEL</br>"
	txt += "<input type=\"text\" onclick=wypiszLotyID() id=\"id_lotu\"> ID lotu</br>"
	txt += "<input type=\"submit\" value=\"Dodaj\" onclick=foo_dodajPasazerLot()>"

	div.innerHTML = txt;
}

/* wyświetlenie formularza z wyborem lotnisk */
function wypiszLoty(){
	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" onclick=wypiszLotnisko() id=\"id_lotnisko_odlot\"> ID lotniska odlotu</br>";
	txt += "<input type=\"text\" onclick=wypiszLotnisko() id=\"id_lotnisko_przylot\"> ID lotniska przylotu</br>";
	txt += "<input type=\"submit\" value=\"Wypisz\" onclick=postLoty()>"

	div.innerHTML = txt;
}

/* wyświetlenie menu reportów */
function raportMenu(){
	clear();
	var div = document.getElementById("content");

	var txt = "Raporty</br></br>"; 
	txt += "<button onclick=wypiszLoty()>Loty z wyborem lotnisk</button>";
	txt += "<button onclick=wypiszLotyPilota()>Loty dla danego pilota</button>";
	txt += "<button onclick=wypiszLotyPasazera()>Loty dla pasażera</button>";

	div.innerHTML = txt;
}


/* wyświetlenie formularza z wyborem pasazera i jego lotów */
function wypiszLotyPasazera(){
	var div = document.getElementById("content");

	var txt = "";

	txt += "<input type=\"text\" onclick=wypiszPasazerow() id=\"pesel\"> PESEL</br>";
	txt += "<select id=\"opcja\">";
	txt += "<option value=\"nadchodzace\" selected=\"selected\">Nadchodzące</option>";
	txt += "<option value=\"historia\">Historia</option>";
	txt += "</select></br>";
	txt += "<input type=\"submit\" value=\"Wypisz\" onclick=postLotyPasazera()>";

	div.innerHTML = txt;
}

/*
#############################################################################################
										FUNKCJE WYSYŁAJĄCE
#############################################################################################
	Funkcje w tej sekcji posiadają przedrostek foo_
	Każda z nich obsługuje jeden formularz
	Odpowiadają za wysłanie informacji do skryptu php poprzez XMLHTTPRequest i metodę POST
	oraz odebranie informacji o powodzeniu/błędzie
	Niektóre z nich otrzymują dodatkowe dane i wyświetlają je w formie tabeli HTML
*/


/* Obsługuje formularz tworzony przez funkcję dodajSamolot() */
function foo_dodajSamolot(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajSamolot.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id="+document.getElementById("id").value;
	params += "&miejsca="+document.getElementById("miejsca").value;
	params += "&obsluga="+document.getElementById("obsluga").value;
	params += "&typ="+document.getElementById("typ").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję dodajPilota() */
function foo_dodajPilota(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajPilota.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id="+document.getElementById("id").value;
	params += "&imie="+document.getElementById("imie").value;
	params += "&nazwisko="+document.getElementById("nazwisko").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję dodajOsobe() */
function foo_dodajOsobe(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajOsobe.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id="+document.getElementById("id").value;
	params += "&imie="+document.getElementById("imie").value;
	params += "&nazwisko="+document.getElementById("nazwisko").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję dodajPasazera() */
function foo_dodajPasazera(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajPasazera.php"
	req.open("POST", url, true);
	var params = "";
	params += "&pesel="+document.getElementById("pesel").value;
	params += "&imie="+document.getElementById("imie").value;
	params += "&nazwisko="+document.getElementById("nazwisko").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję dodajLotnisko() */
function foo_dodajLotnisko(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajLotnisko.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id="+document.getElementById("id").value;
	params += "&miejsce="+document.getElementById("miejsce").value;
	params += "&typ="+document.getElementById("typ").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję tworzenieObslugi() */
function foo_tworzenieObslugi(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/tworzenieObslugi.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id="+document.getElementById("id").value;
	params += "&id_obslugi="+document.getElementById("id_obslugi").value;
	params += "&osoba="+document.getElementById("osoba").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję tworzenieZalogi() */
function foo_tworzenieZalogi(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/tworzenieZalogi.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id_zalogi="+document.getElementById("id_zalogi").value;
	params += "&id_obslugi="+document.getElementById("id_obslugi").value;
	params += "&id_pilot1="+document.getElementById("id_pilot1").value;
	params += "&id_pilot2="+document.getElementById("id_pilot2").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję tworzenieLotu() */
function foo_tworzenieLotu(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/tworzenieLotu.php"
	req.open("POST", url, true);
	var params = "";
	params += "&id_lotu="+document.getElementById("id_lotu").value;
	params += "&id_zalogi="+document.getElementById("id_zalogi").value;
	params += "&id_samolotu="+document.getElementById("id_samolotu").value;
	params += "&id_lotnisko_odlot="+document.getElementById("id_lotnisko_odlot").value;
	params += "&id_lotnisko_przylot="+document.getElementById("id_lotnisko_przylot").value;
	params += "&data_odlotu="+document.getElementById("data_odlotu").value;
	params += "&data_przylotu="+document.getElementById("data_przylotu").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję dodajPasazerLot() */
function foo_dodajPasazerLot(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/dodajPasazerLot.php"
	req.open("POST", url, true);
	var params = "";
	params += "&pesel="+document.getElementById("pesel").value;
	params += "&id_lotu="+document.getElementById("id_lotu").value;
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			if(arr["error"] == true){
				div.innerHTML = errorAlert;
			} else{
				div.innerHTML = successAlert;
			}
		}
	}
	req.send(params);
}


/* Obsługuje formularz tworzony przez funkcję wypiszLoty() */
function foo_wypiszLoty(){
	clear();
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszLoty.php"
	req.open("POST", url, true);
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var txt = "<table><tr><th>ID lotu</th><th>Odlot</th><th>Przylot</th></tr>";
	var params = 
	"&id_lotnisko_odlot="+document.getElementById("id_lotnisko_odlot").value+
	"&id_lotnisko_przylot="+document.getElementById("id_lotnisko_przylot").value;

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_lotu + "</th><th>" + obj.data_odlotu + "</th><th>" + obj.data_przylotu + "</th></td>";
			}
			txt += "</table>";
			div.innerHTML = txt;
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję wypiszLotyPilota() */
function foo_wypiszLotyPilota(){
	clear();
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszLotyPilota.php"
	req.open("POST", url, true);
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var txt = "<table><tr><th>ID lotu</th><th>Trasa</th><th>Odlot</th><th>Przylot</th></tr>";
	var params = "&id_pilota="+document.getElementById("id_pilota").value;

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_lotu + "</th><th>" + obj.trasa + "</th><th>" + obj.data_odlotu + "</th><th>" + obj.data_przylotu + "</th></td>";
			}
			txt += "</table>";
			div.innerHTML = txt;
		}
	}
	req.send(params);
}

/* Obsługuje formularz tworzony przez funkcję wypiszLotyPasazera() */
function foo_wypiszLotyPasazera(){
	clear();
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/postLotyPasazera.php"
	req.open("POST", url, true);
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


	var tmp = document.getElementById("opcja");
	var params = "&opcja="+tmp.options[tmp.selectedIndex].value+"&pesel="+document.getElementById("pesel").value;

	var txt = "<table><tr><th>ID lotu</th><th>Trasa</th><th>Odlot</th><th>Przylot</th></tr>";
	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_lotu + "</th><th>" + obj.trasa + "</th><th>" + obj.data_odlotu + "</th><th>" + obj.data_przylotu + "</th></td>";
			}
			txt += "</table>";
			div.innerHTML = txt;
		}
	}
	
/*
#############################################################################################
										FUNKCJE WYSYŁAJĄCE
#############################################################################################
	Funkcje w tej sekcji odpowiadają za pobranie danych poprzez XMLHTTPRequest i metodę GET
	oraz wyświetlenie zwróconego wyniku w formie tabeli HTML
*/

/* wypisuje wszystkie osoby z bazy */
function wypiszOsoby(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszOsoby.php";
	var txt = "<table><tr><th>ID</th><th>Nazwisko</th><th>Imie</th></tr>"

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_osoby + "</th><th>" + obj.imie + "</th><th>" + obj.nazwisko + "</th></td>"
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkie obsługi z bazy */
function wypiszObsluge(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszObsluge.php";
	var txt = "<table><tr><th>ID obsługi</th><th>Liczba obsługi</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_obslugi + "</th><th>" + obj.liczba_obslugi + "</th></tr>"
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkich pilotów z bazy */
function wypiszPilota(){ 
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszPilota.php";
	var txt = "<table><tr><th>ID</th><th>Nazwisko</th><th>Imie</th></tr>"

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_pilota + "</th><th>" + obj.nazwisko + "</th><th>" + obj.imie + "</th></td>"
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkie załogi z bazy */
function wypiszZaloge(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszZaloge.php";
	var txt = "<table><tr><th>ID zalogi</th><th>Pilot 1</th><th>Pilot 2</th><th>Liczba obsługi</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_zalogi + "</th><th>" + obj.pilot_1 + "</th><th>" + obj.pilot_2 + "</th><th>" + obj.liczba_obslugi + "</th></td>";
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkie samoloty z bazy */
function wypiszSamolot(){ 
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszSamolot.php";
	var txt = "<table><tr><th>ID</th><th>liczba miejsc</th><th>wymagana obsluga</th><th>typ</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_samolotu + "</th><th>" + obj.liczba_miejsc + "</th><th>" + obj.wymagana_obsluga + "</th><th>" + obj.typ + "</th></td>";
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkie lotniska z bazy */
function wypiszLotnisko(){ 
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszLotnisko.php";
	var txt = "<table><tr><th>ID</th><th>Miejsce</th><th>Obsługiwany typ</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_lotnisko + "</th><th>" + obj.miejsce + "</th><th>" + obj.obslugiwany_typ + "</th></td>";
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje informacje o lotach z bazy */
function wypiszLotyID(){
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszLotyID.php";
	var txt = "<table><tr><th>ID lotu</th><th>Trasa</th><th>Odlot</th><th>Przylot</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.id_lotu + "</th><th>" + obj.trasa + "</th><th>" + obj.data_odlotu + "</th><th>" + obj.data_przylotu + "</th></td>";
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}

/* wypisuje wszystkich pasażerów z bazy */
function wypiszPasazerow(){ 
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/wypiszPasazerow.php";
	var txt = "<table><tr><th>PESEL</th><th>Imie</th><th>Naziwsko</th></tr>";

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += "<tr><th>" + obj.pesel + "</th><th>" + obj.imie + "</th><th>" + obj.nazwisko + "</th></td>";
	}
	txt += "</table>";
	div.innerHTML = txt;
		}
	}
	req.open("GET", url, true);
	req.send();
}


/* ###################################################################################*/


/*funkcja czyszcząca zawartość elementu div*/
function clear(){
	var div = document.getElementById("console");
	div.innerHTML = "";
}

/*funkcja wyświetlająca kolejne wolne id w zaleznosci od parametru tabela*/
function autoID(tabela){
	clear();
	var div = document.getElementById("console");
	var req = new XMLHttpRequest();
	var url = "http://localhost/airlines/php/autoID.php"
	req.open("POST", url, true);
	req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	var txt = "Kolejne wolne ID: ";
	var params = 
	"&tabela="+tabela;

	req.onreadystatechange = function (aEvt){
		if (req.readyState == 4 && req.status == 200) {
			var arr = JSON.parse(req.responseText);
			for (var i=0; i<arr.length; i++){
				var obj = arr[i];
				txt += obj.id_wolne;
			}
			div.innerHTML = txt;
		}
	}
	req.send(params);
}