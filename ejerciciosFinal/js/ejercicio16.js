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

  patron = /[0-9]{9}$/;

  if (!patron.test(tel)) {
    document.getElementById('msgTel').innerHTML = "Telefono incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgTel').innerHTML = "";
  }

  patron = /^(\+34)?[0-9]{9}$/; // poner la barra diagonal antes del + para que no lo coja como especial

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

  patron = /[0-9]{5}$/;

  if (!patron.test(CP)) {
    document.getElementById('msgCP').innerHTML = "Codigo postal incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgCP').innerHTML = "";
  }

  patron = /\w+\@\w+\.\w+$/;

  if (!patron.test(email)) {
    document.getElementById('msgE').innerHTML = "email incorrecto";
    esCorrecto = false;
  } else {
    document.getElementById('msgE').innerHTML = "";
  }

  patron = /\d+$/;
  patron2 = /\d+\,\d{1,2}$/;

  if (!patron.test(importe)) {
    if (!patron2.test(importe)) {
      document.getElementById('msgImp').innerHTML = "importe incorrecto";
      esCorrecto = false;
    } else {
      document.getElementById('msgImp').innerHTML = "";
    }
  }

  patron = /^(ES)\d{16}$/;

  if (!patron.test(banco)) {
    document.getElementById('msgBank').innerHTML = "cuenta bancaria incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgBank').innerHTML = "";
  }

  patron = /^(w){3}\.\w+\.\w+$/;

  if (!patron.test(WEB)) {
    document.getElementById('msgWeb').innerHTML = "web incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgWeb').innerHTML = "";
  }

  patron = /^(http:www)\.\w+\.\w+\:\d+$/;

  URL = URL.replace('//',"");

  if (!patron.test(URL)) {
    document.getElementById('msgLink').innerHTML = "URL incorrecta";
    esCorrecto = false;
  } else {
    document.getElementById('msgLink').innerHTML = "";
  }

  patron = /^(http:www)\.\w+\.\w+\:\d+\w+\=\w+\&\w+\=\w+$/;

  Webcomp = Webcomp.replace('//',"");
  Webcomp = Webcomp.replace('?',"");

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
