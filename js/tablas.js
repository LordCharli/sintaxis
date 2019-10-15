var n;
n=prompt('Introduce un numero','');
n=parseInt(n);


let tabla = "<table border=1>";
for (let index = 1; index <= 10; index++) {
  tabla+="<tr><td>"+n+" * "+index+"</td><td>"+(n*index)+"</td></tr>";
}
tabla+="</table>";
document.write(tabla);



