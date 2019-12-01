function miFuncion() {
  var mensaje,n;
  mensaje = document.getElementById('pinta');
  n = document.getElementById('num').value;

  try {
    if (n == "") {
      throw "la cadena esta vacia";
    }
    if (isNaN(n)) {
      throw "no es un numero";
    } else {
      n = Number(n);
    }
    if (n > 10) throw "el numero es demasiado alto";
    if (n < 5) throw "el numero es demasiado bajo";
  } catch (error) {
      mensaje.style.color = "red";
  }// finally {
  //   mensaje.style.color = "blue";
  //   mensaje.innerHTML = "datos introducidos correctamente";
  // }
}
