"use strict";

function parimpar(n) {

  if (n == 0) {
      return false;
  } else {
      if (n % 2 == 0) {
        return true;
      } else {
          if (n % 2 != 0) {
          return false;
          }
      }
  }
}

function info(cadena){
  var cadenareturn = "";

  if (cadena.toLowerCase() == cadena) {
    cadenareturn = "Esta compuesta por minusculas";
  } else {
    if (cadena.toUpperCase() == cadena) {
      cadenareturn = "Esta compuesta por mayusculas";
    } else {
      cadenareturn = "Esta compuesta por mayusculas y minusculas";
    }
  }
  return cadenareturn;
}

var n = prompt("Escribe un numero");
n = parseInt(n);
var cadena = prompt("Escribe una frase");
var aux = true;

if (parimpar(n)) {
  document.write("es par");
} else {
  document.write("es impar");
}

document.write("<br>");
document.write(info(cadena));
document.write("<br>");
