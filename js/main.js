/*global alert*/
/*jslint eqeq: true*/
function validateForm() {
	"use strict";
    var name = document.getElementById("name").value,
        lastName = document.getElementById("lastname").value,
        email = document.getElementById("input-email").value,
        n = name.charAt(0),
        l = lastName.charAt(0),
        password = document.getElementById("input-password").value,
        validEmail = /\S+@\S+\.\S+/,
        dropDownMenu = document.getElementsByClassName('form-control')[4];
    
    if (n !== n.toUpperCase()) { //name
        alert("ERROR\nPor favor ingresa la primera letra de tu nombre con mayúscula.");
    } else if (l !== l.toUpperCase()) { //last name
        alert("ERROR\nPor favor ingresa la primera letra de tu apellido con mayúscula.");
    } else if (email == "" || !validEmail.test(email)) { //email
		alert("ERROR\nIngrese un e-mail válido.");
    } else if (password == "password" || password == "123456" || password == "098754") { //password
        alert("ERROR\nNo puedes usar esa palabra como password.");
    } else if (password.length < 6) {
        alert("ERROR\nIngresa 6 o más caracteres.");
    } else if (dropDownMenu.value == 0) { //drop down menu
		alert("ERROR\nPor favor selecciona una opción");
	}
}