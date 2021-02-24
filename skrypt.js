 function wyslij() {
	/* Deklaracja zmiennych */
	var imie_input = document.getElementById("imie").value;
	var nazwisko_input = document.getElementById("naz").value;
	var email_input = document.getElementById("email").value.toLowerCase();
	var usluga_select = document.getElementById("usluga");
	var wyslac_checkbox = document.getElementById("wyslac").checked;
	var wyslac_text = "";
	
	console.log(wyslac_checkbox);
	
	/* Uzyskanie wartości SELET */
	var usluga_select2 = usluga_select.options[usluga_select.selectedIndex].text;
	
	/* Warunek zaznaczenia */
	if (wyslac_checkbox == true) {
		wyslac_text = "<b>Wyślij kopię wiadomości:</b> TAK";
	} else {
		wyslac_text = "<b>Wyślij kopię wiadomości:</b> NIE";
	}
	
	/* Zestawienie wartości w ID="wynik" */
	
	if (imie_input != "" && nazwisko_input != "" && email_input != "") {
		document.getElementById("wynik").innerHTML =  + imie_input + '<br> ' + nazwisko_input + '<br> ' + email_input + '<br> ' + usluga_select2 + '<br>' + wyslac_text; 
	} else {
		document.getElementById("wynik").innerHTML = '<b>UWAGA!</b> Nie zostały uzupełnione wszystkie pola!';
	}
 }
 
 function reset() {
	/* Deklarazja zmiennych */
	var usluga_select = document.getElementById("usluga");
	 
	/* Czyszczenie formularza */
	document.getElementById("imie").value = "";
	document.getElementById("naz").value = "";
	document.getElementById("email").value = "";
	
	/* Ustawianie wartości domyślnych */
	document.getElementById("wyslac").checked = true;
	usluga_select.value = "1";
	
	/* Czyszczenie wyniku */
	document.getElementById("wynik").innerHTML = "";
 }