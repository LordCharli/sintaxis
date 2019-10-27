var cadena = "";

function comprobar(){
  cadena = document.getElementById('cadena').value;
  //console.log(cadena);
  var listaCadena = cadena.split(" ");

  nPalabras(listaCadena);
  document.write("<br>");
  primera(listaCadena);
  document.write("<br>");
  ultima(listaCadena);
  document.write("<br>");
  inverso(listaCadena);
  document.write("<br>");
  ordenar(listaCadena);
  document.write("<br>");
  ordenarInv(listaCadena);

}

function nPalabras(listaCadena){
  //console.log(listaCadena[1]);
  document.write("Numero de palabras: "+listaCadena.length);
}

function primera(listaCadena){
  document.write("La primera palabra es: "+listaCadena[0]);
}

function ultima(listaCadena){
  document.write("La ultima palabra es: "+listaCadena[listaCadena.length -1]);
}

function inverso(listaCadena) {
  var inversas = new Array();
  var i = listaCadena.length-1;

  while (i >= 0) {
    inversas.push(listaCadena[i]);
    i--;
  }

  inversas = inversas.join("-");
  document.write("Cadena inversa: "+inversas);
}

function ordenar(listaCadena) {
  var ordenado = new Array();

  ordenado = listaCadena.sort();
  document.write("Cadena ordenada: ");
  for (let i = 0; i < ordenado.length; i++) {
    document.write(ordenado[i] + " ");
  }
}

function ordenarInv(listaCadena) {
  var ordenado = new Array();
  var inversas = new Array();
  var i = ordenado.length-1;

  ordenado = listaCadena.sort();

  var i = ordenado.length-1;

  while (i >= 0) {
    inversas.push(ordenado[i]);
    i--;
  }
  document.write("Cadena ordenada reves: "+inversas);
}
