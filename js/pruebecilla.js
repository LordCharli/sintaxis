function reemplaza(parrafo,antigua,nueva){

  parrafo = parrafo.replace(antigua,nueva);

  document.getElementById('texto').value = parrafo;
}

function reemplaza2(parrafo,antigua,nueva){

  var array = new Array();
  var i = 0;
  var opt = false;
  array = parrafo.split(" ");

  while (i < array.length && opt == false) {
    if (array[i] == antigua) {
      array[i] = nueva;
      opt = true;
    }
    i++;
  }

  parrafo = array.join(" ");
  document.getElementById('texto').value = parrafo;
}
