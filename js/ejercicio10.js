function recogerFecha(){
  //var seg = new Array();
  //var fecha = document.getElementById('fecha').value;
  //seg = fecha.split("-");
  var fecha = new Date(document.getElementById('fecha').value);
  var fechaSeg = fecha.getTime();

  return fechaSeg;
}

function sumarDias(){

  var dias = document.getElementById('valor').value;
  var fechaSeg = recogerFecha();
  var diasSeg = (((dias*24)*3600)*1000);

  fechaSeg = fechaSeg + diasSeg;

  var fecha = new Date(fechaSeg);

  document.write(fecha);
}

function restarDias(){

  var dias = document.getElementById('valor').value;
  var fechaSeg = recogerFecha();
  var diasSeg = (((dias*24)*3600)*1000);

  fechaSeg = fechaSeg - diasSeg;

  var fecha = new Date(fechaSeg);

  document.write(fecha);
}
