var numeros = new Array();
var numeros2 = new Array[8,6,4,3];


function mostrar() {
  for (let index = 0; index < numeros.length; index++) {
    document.write(numeros[index]);
  }
}

function anadir() {
  var n = document.getElementById('numeros').value;
  var num = parseInt(n);
  numeros.push(num);
  document.getElementById('numeros').reset
}

function anadir2() {
  var n = document.getElementById('numeros2').value;
  var num = parseInt(n);
  numeros.push(num);
  document.getElementById('numeros2').reset
}

function menor() {
  numeros = numeros.sort();
  document.getElementById('escribir').innerHTML = numeros[0];
  //document.write(numeros[0]);
}

function mayor() {
  numeros = numeros.sort();
  document.getElementById('escribir').innerHTML = numeros[numeros.length - 1];
  //document.write(numeros[numeros.length - 1]);
}

function media(){
  var media = 0;
  for (let index = 0; index < numeros.length; index++) {
    media = numeros[index] + media;
  }
  media = media/numeros.length;
  document.getElementById('escribir').innerHTML = media;
  //document.write(media);
}

function concate() {
  var cadena = new Array();
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros2.length; j++) {
      cadena = numeros[i].concat(numeros[j]);
    }
  }
  document.getElementById('escribir').innerHTML = cadena;
}
