function mostrar(n) {
  document.getElementById('rever').value = vuelta(n);
}



function vuelta(n){

    if (n <= 9) {
      document.getElementById('rever').value = n;
    } else {
      var tmp = "" + (n % 10) + vuelta(Math.floor(n/10));
      return parseInt(tmp);
    }

}

function sumar(n){

  if (n <= 9) {
    document.getElementById('rever').value = n;
  } else {
    var tmp = "" + (n % 10) + vuelta(Math.floor(n/10));
    return parseInt(tmp);
  }

}

function sumaArray(n) {


}
