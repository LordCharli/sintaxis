var numeros = new Array();

function aniadir(){
  var n = document.getElementById('numero').value;
  numeros.push(n);
  mostrar(numeros);
}

function consumir(){
  numeros.pop();
  mostrar(numeros);
}

function mostrar(numeros) {
  var cadena = "";
  for (let i = 0; i < numeros.length; i++) {
    cadena = cadena + numeros[i] + " ";
  }
  document.getElementById('escribir').innerHTML = cadena;
}
