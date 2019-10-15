var apellidos = prompt("Introduce tus apellidos");
var nombre = prompt("Introduce tu nombre");
var n1 = prompt("Introduce la nota parcial 1");
var n2 = prompt("Introduce la nota parcial 2");




document.write("Nombre: "+nombre+"<br>");
document.write("Nombre: "+apellidos+"<br>");
document.write("Nota parcial 1: "+n1+"<br>");
document.write("Nota parcial 2: "+n2+"<br>");

n1 = n1*0.6;
n2 = n2*0.5;
var final = n1+n2;

document.write("Nota final: "+final+"<br>");
