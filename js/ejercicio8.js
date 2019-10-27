function reloj() {
  var fecha = new Date();
  var hora = fecha.getHours();
  var min = fecha.getMinutes();
  var seg = fecha.getSeconds();

  if (seg<10) {
    var resul = hora+" : "+min+" : 0"+seg;
  } else {
    var resul = hora+" : "+min+" : "+seg;
  }

  document.body.innerHTML = resul;
}


setInterval(function (){reloj()},1000);
