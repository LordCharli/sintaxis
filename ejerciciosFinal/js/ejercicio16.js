function validar(){

  var descrip = document.getElementById('descrip').value;
  var tel = document.getElementById('tel').value;
  var telInt = document.getElementById('telInt').value;
  var Fincidencia = document.getElementById('fech').value;
  var CP = document.getElementById('cp').value;
  var email = document.getElementById('email').value;
  var importe = document.getElementById('imp').value;
  var banco = document.getElementById('banco').value;
  var WEB = document.getElementById('web').value;
  var URL = document.getElementById('link').value;
  var Webcomp = document.getElementById('webcomp').value;

  var esCorrecto = true;

  var patron = new RegExp();
  patron = /^[A-Z].*\.$/;

  if (!patron.test(descrip)) {
    document.getElementById('msgD').innerHTML = "Descripcion incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgD').innerHTML = "";
  }

  patron = /^[679][0-9]{8}$/;

  if (!patron.test(tel)) {
    document.getElementById('msgTel').innerHTML = "Telefono incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgTel').innerHTML = "";
  }

  patron = /^(\+34)?[679][0-9]{8}$/; // poner la barra diagonal antes del + para que no lo coja como especial

  if (!patron.test(telInt)) {
    document.getElementById('msgTelInt').innerHTML = "Telefono incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgTelInt').innerHTML = "";
  }

  patron = /\d{4}\-\d{1,2}\-\d{1,2}/;

  if (!patron.test(Fincidencia)) {
    document.getElementById('msgFech').innerHTML = "Fecha incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgFech').innerHTML = "";
  }

  patron = /^\d{5}$/;

  if (!patron.test(CP)) {
    document.getElementById('msgCP').innerHTML = "Codigo postal incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgCP').innerHTML = "";
  }

  patron = /^\w+\@\w+\.\[A-Za-z]{2,3}$/;

  if (!patron.test(email)) {
    document.getElementById('msgE').innerHTML = "email incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgE').innerHTML = "";
  }

  patron = /^(\-?)\d+([.,]?\d+)$/; // el caracter \ obliga

  if (!patron.test(importe)) {

      document.getElementById('msgImp').innerHTML = "importe incorrecto";
      esCorrecto = false;
    } else {
      document.getElementById('msgImp').innerHTML = "";
    }

  patron = /^(ES)\d{2}\s\d{4}\s\d{2}\s\d{10}$/;

  if (!patron.test(banco)) {
    document.getElementById('msgBank').innerHTML = "cuenta bancaria incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgBank').innerHTML = "";
  }

  patron = /^(w){3}\.\w+\.[A-Za-z]{2,3}$/;

  if (!patron.test(WEB)) {
    document.getElementById('msgWeb').innerHTML = "web incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgWeb').innerHTML = "";
  }

  patron = /^http[s]?\:\/\/\w{3}\.\w+\.[A-Za-z]{2,3}\:\d{1,5}$/;

  if (!patron.test(URL)) {
    document.getElementById('msgLink').innerHTML = "URL incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgLink').innerHTML = "";
  }

  patron = /^http[s]?\:\/\/\w{3}\.\w+\.[A-Za-z]{2,3}\:\d{1,5}\?(\w+=\w+)(\&\w+=\w+)*$/; // el = no hace falta escaparlo

  if (!patron.test(Webcomp)) {
    document.getElementById('msgWebC').innerHTML = "URL incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgWebC').innerHTML = "";
  }

  if(esCorrecto){
     document.getElementById('retorno').innerHTML = "correcto";
  }

}
