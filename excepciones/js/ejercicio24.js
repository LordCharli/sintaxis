 "use strict";

 function sendPassword () {
 	var resultado = document.getElementById ("resultado");
 	var pass1 = document.getElementById ("pass1").value;
 	var pass2 = document.getElementById ("pass2").value;

 	try {
 		validatePassword (pass1, pass2);
	 	resultado.style.color = "blue";
	 	resultado.innerHTML = "La contraseña es segura";
 	} catch (err) {
 		resultado.style.color = "red";
 		resultado.innerHTML = "Error: " + err;
   }

  try {
      function nuevo(nombre,nombre){}
  } catch (e) {
      resultado.style.color = "red";
 		  resultado.innerHTML = "<br>Error: " + e.message;
   }
  }
  //  try {
  //   var cadena = "hola";
  //   cadena.repeat(-1);
  //  } catch (e) {
  //   resultado.innerHTML = "<br>Error2: " + e.name;
  //  }

  //  try {
  //   x = 0;
  //  } catch (a) {
  //   resultado.innerHTML = "<br>Error3: " + a;
  //  }
  // try {
  //   var n = 0;
  //   n.toUpperCase();
  //  } catch (e) {
  //   resultado.innerHTML = "<br>Error4: " + e;
  //  }
  // try {
  //   eval("h a");
  //  } catch (e) {
  //   resultado.innerHTML = "<br>Error2: " + e;
  //  }

  //  var o = {};
  //  Object.defineProperty(o,"a",{
  //   "getA":{get: function(){return 1;}},
  //   configurable:true
  //  });
  //  try {
  //   Object.defineProperty(o,"a",{
  //     configurable:false
  //    });
  //  } catch (e) {
  //   resultado.innerHTML = "<br>Error2: " + e;
  //  }
  // }

function validatePassword (pass1, pass2){
	if (pass1 !== pass2){
		throw "Las contraseñas no son iguales";
	}
	if (pass1.length < 8){
		throw "La contraseña debe ser al menos de 8 caracteres";
	}
	if (!/[A-Z]/.test(pass1)){
		throw "La contraseña debe contener mayúsculas";
	}
	if (!/[a-z]/.test(pass1)){
		throw "La contraseña debe contener minúsculas";
	}
	if (!/[0-9]/.test(pass1)){
		throw "La contraseña debe contener números";
	}
	if (!/\W/.test(pass1)){
		throw "La contraseña debe contener caracteres no numéricos";
	}

 	return true;
}
