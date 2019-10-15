var n1 = prompt("Introduce el primer numero");
n1 = parseInt(n1);
var n2 = prompt("Introduce el segundo numero");
n2 = parseInt(n2);

var suma = n1+n2;
var resta = n1-n2;
var multi = n1*n2;
var div = n1/n2;
var mod = n1%n2;

var res = "<table border=1>";
res+="<tr><td>Suma</td>"+"<td>"+suma+"</td></tr>";
res+="<tr><td>Resta</td>"+"<td>"+resta+"</td></tr>";
res+="<tr><td>Multiplicacion</td>"+"<td>"+multi+"</td></tr>";
res+="<tr><td>Division</td>"+"<td>"+div+"</td></tr>";
res+="<tr><td>Modulo</td>"+"<td>"+mod+"</td></tr>";

document.write(res);
