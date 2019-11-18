function carrito() {
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

var nuevoCarrito = new carrito();

function aniadirCarrito() {
  var precio = document.getElementById('precio').value;
  var pinta = "";

  nuevoCarrito.incrementa();
  nuevoCarrito.suma(precio);

  pinta += "Cantidad: "+nuevoCarrito.articulos+"<br>";
  pinta += "Total: "+nuevoCarrito.total+"<br>";

  document.getElementById('nombre').value = "";
  document.getElementById('precio').value = "";
  document.getElementById('salida').innerHTML = pinta;
}
