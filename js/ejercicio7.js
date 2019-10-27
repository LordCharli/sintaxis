function navidad(){
  var dias = Date.now();
  var navidad = new Date(2019,11,24);
  var ms = navidad.getTime();

  var resul = ms - dias;
  resul = (((resul / 1000)/60)/60)/24;
  alert("Quedan "+Math.round(resul)+" dias para navidad");

}

navidad();
