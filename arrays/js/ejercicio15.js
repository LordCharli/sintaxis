var numeros = new Array();

function aniadir(){
  var n = document.getElementById('numero').value;
  numeros.push(n);
  mostrar(numeros);
}

function consumir(){
  numeros.shift();
  mostrar(numeros);
}

function colar(){
  var n = document.getElementById('numero').value;
  var numeros2 = new Array();
  numeros2.push(n);
  for (let i = 0; i < numeros.length; i++) {
    numeros2.push(numeros[i]);
  }
  numeros = numeros2;
  mostrar(numeros);
}

function mostrar(numeros) {
  var cadena = "";
  for (let i = 0; i < numeros.length; i++) {
    cadena = cadena + numeros[i] + " ";
  }
  document.getElementById('escribir').innerHTML = cadena;
}
