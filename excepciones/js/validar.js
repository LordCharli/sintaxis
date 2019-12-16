class emailException {
  constructor(code) {
    this.name = "emailException";
    switch (code) {
      case 1:
        this.messaje = "Error la direccion necesita un @";
        break;
      case 2:
        this.messaje = "Error repeticion excesiva de puntos o guiones";
        break;
      case 3:
        this.messaje = "Error dominio no valido";
        break;
      default:
        this.messaje = "Error desconocido";
        break;
    }
    this.code = code;
  }
}

emailException.prototype = new baseException();
emailException.prototype.constructor = emailException;

function sendEmail() {
    var resultado = document.getElementById('resul');
    var address = document.getElementById('address').value;

    try {
      resultado.style.color = "blue";
      resultado.innerHTML = validateEmail(address);
    } catch (e) {
      resultado.style.color = "red";
      resultado.innerHTML = e.toString();
    }
}

function validateEmail(address) {
    var patron = new RegExp();
    patron = /@/;
    if (!patron.test(address)) {
      throw new emailException();
    }
    patron = /(\.{2,}|\-{2,}|\.-|\-.)\w*\@/;
    if (patron.test(address)) {
      throw new emailException();
    }
    patron = /\@\w*(\.com|\.es|\.net)$/;
    if (!patron.test(address)) {
      throw new emailException();
    }
    return address;
}
