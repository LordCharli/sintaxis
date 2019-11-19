// objetos
function carrito() {
  this.nombre = "";
  this.articulos = 0;
  this.total = 0;
}

carrito.prototype.incrementa = function() {
  this.articulos = this.articulos + 1;
  return this.articulos;
};

carrito.prototype.suma = function(precio) {
  this.total = this.total + parseInt(precio);
  return this.total;
};

// variables
var nuevoCarrito = new carrito();
var elementos = new Array();
var elemento = new Array();
var id = 1;
var col = 0;

//funciones
function aniadirCarrito() {
  var nombre = document.getElementById('nombre').value;
  var precio = document.getElementById('precio').value;

  elemento[0] = id;
  elemento[1] = nombre;
  elemento[2] = parseInt(precio);

  elementos[col] = elemento;

  nuevoCarrito.incrementa();
  nuevoCarrito.suma(precio);

  col++;
  id++;

  document.getElementById('nombre').value = "";
  document.getElementById('precio').value = "";
}

// pintar el carrito y el precio en €
function mostrar() {
  var pinta = "";
  pinta += "<table border=2>";
  pinta += "<th>ID</th><th>Nombre</th><th>Precio</th>";
  for (let i = 0; i < elementos.length; i++) {
    pinta += "<tr><td>"+elementos[i][0]+"</td><td>"+elementos[i][1]+"</td><td>"+elementos[i][2]+"</td></tr>";
  }
  pinta += "</table>";
  pinta += "<br>Cantidad total "+nuevoCarrito.articulos+"<br>";
  pinta += "<br>precio total "+nuevoCarrito.total+"<br>";
  document.getElementById('salida').innerHTML = pinta;
}

function eliminar() {

}
