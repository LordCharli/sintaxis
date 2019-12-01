// OBJETOS
class carrito {
  constructor(id,producto,cant) {
    this.id_carrito = id;
    this.items = producto;
    this.cantidades = cant;
  }
  set id(id){
    this._id_carrito = id;
  }
  set items(producto){
    this._items = producto;
  }
  set cantidades(cant){
    this._cantidades = cant;
  }
  get items(){
    return this._items;
  }
  get cantidades(){
    return this._cantidades = cant;
  }
}

class producto {
  constructor(serie,nom,precio,iva){
    this.num_serie = serie;
    this.nombre = nom;
    this.precio = precio;
    this.impuesto = iva;
  }
  set num_serie(serie){
    this._num_serie = serie;
  }
  set nombre(nom){
    this._nombre = nom;
  }
  set impuesto(iva){
    this._impuesto = iva;
  }
  set precio(precio){
    this._precio = precio;
  }
  get num_serie(){
    return this._num_serie;
  }
  get nombre(){
    return this._nombre;
  }
  get precio(){
    return this._precio;
  }
  get iva(){
    return this._iva;
  }
}

class prenda extends producto{
  constructor(serie,nom,precio,iva,talla,color){
    super(serie,nom,precio,iva);
    this.talla = talla;
    this.color = color;
  }
  set talla(talla){
    this._talla = talla;
  }
  set color(color){
    this._color = color;
  }
  get talla(){
    return this._talla;
  }
  get iva(){
    return this._iva;
  }
}

class pantalon extends prenda{
  constructor(serie,nom,precio,iva,talla,color,ancho,largo){
    super(serie,nom,precio,iva,talla,color);
    this.ancho = ancho;
    this.largo = largo;
  }
  set ancho(ancho){
    this._ancho = ancho;
  }
  set largo(largo){
    this._largo = largo;
  }
  get ancho(){
    return this._ancho;
  }
  get largo(){
    return this._largo;
  }
}

class zapatilla extends producto{
  constructor(serie,nom,precio,iva,numero,tipo){
    super(serie,nom,precio,iva);
    this.numero = numero;
    this.tipo = tipo;
  }
  set numero(numero){
    this._numero = numero;
  }
  set tipo(tipo){
    this._tipo = tipo;
  }
  get numero(){
    return this._numero;
  }
  get tipo(){
    return this._tipo;
  }
}

// FUNCIONES

// funcion que crea un desplegable para introducir el tipo de prenda que queremos crear para el carrito
function desplegable() {
    var desple = "<select name=tipos id=tipos>";
    var tipos = ["Camiseta","Pantalon","Zapatos"];
    desple += "<option value=''>&nbsp</option>";
    for (let i = 0; i < 3; i++) {
      desple += "<option value='"+i+"'>"+tipos[i]+"</option>";
    }
    desple += "</select>";
    desple += "<br><br><button onclick='pintaFormularios()'>Continuar</button>";
    desple += "<button onclick='verCarro()'>Ver Carrito</button>";
    document.getElementById('screen').innerHTML = desple;
}
// pinta el formulario caracteristico para el tipo de prenda elegida
function pintaFormularios(){
  var desple = document.getElementById('tipos').value;
  var formulario = "";
  parseInt(desple);
  if (desple == 0) {
    formulario +="N.SERIE <input type=text id=serie><br>NOMBRE <input type=text id=nombre><br>PRECIO <input type=text id=precio><br>";
    formulario +="IVA <input type=number id=iva value=10><br>COLOR <input type=text id=color><br>Cantidad <input type=number id=cantidad value=1><br>";
    formulario += "TALLA <select id=talla><option value=''>&nbsp</option><option value=0>XS</option><option value=1>S</option>";
    formulario += "<option value=2>M</option><option value=3>L</option><option value=4>XL</option><option value=5>XXL</option>";
    formulario += "</select><br><br><button onclick='aniadirCam()'>Añadir</button>";
  }
  if (desple == 1) {
    formulario +="N.SERIE <input type=text id=serie><br>NOMBRE <input type=text id=nombre><br>PRECIO <input type=text id=precio><br>";
    formulario +="IVA <input type=number id=iva value=10><br>COLOR <input type=text id=color><br>Cantidad <input type=number id=cantidad value=1><br>";
    formulario += "ANCHO <input type=text id=ancho><br>LARGO <input type=text id=largo><br>";
    formulario += "TALLA <select id=talla><option value=''>&nbsp</option><option value=0>XS</option><option value=1>S</option>";
    formulario += "<option value=2>M</option><option value=3>L</option><option value=4>XL</option><option value=5>XXL</option>";
    formulario += "</select><br><br><button onclick='aniadirPan()'>Añadir</button>";
  }
  if (desple == 2) {
    formulario +="N.SERIE <input type=text id=serie><br>NOMBRE <input type=text id=nombre><br>PRECIO <input type=text id=precio><br>";
    formulario +="IVA <input type=number id=iva value=4><br>Cantidad <input type=number id=cantidad value=1><br>";
    formulario += "NUMERO <input type=number id=numero><br>TIPO <select id=tipo><option value=''>&nbsp</option><option value=0>EU</option><option value=1>USA</option>";
    formulario += "<option value=2>UK</option><option value=3>CM</option>";
    formulario += "</select><br><br><button onclick='aniadirZap()'>Añadir</button>";
  }
  document.getElementById('formu').innerHTML = formulario;
}
// valida y crea un objeto para la camiseta
function aniadirCam(){
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var color = document.getElementById('color').value;
    var talla = document.getElementById('talla').value;
    var iva = document.getElementById('iva').value;
    var serie = document.getElementById('serie').value;
    var canti = document.getElementById('cantidad').value;
    var entra = true;
    parseInt(precio);

    try {
      if (!patron.test(serie)) {
        throw "Nº de serie invalido";
      }
      if (precio == "" && precio <= 0) {
        throw "precio fuera de rango";
      }
      if (nombre == "") {
        throw "Escribe el nombre";
      }
      if (iva != 10) {
        throw "Iva incorrecto";
      }
      if (color == "") {
        throw "Indica el color";
      }
      if (talla == "") {
        throw "La talla no puede estar vacia";
      }
      if (canti < 1 && canti > 99) {
        throw "Cantidad fuera de rango";
      }
    } catch (error) {
        entra = false;
        document.getElementById('msg').innerHTML = "CUIDADO! "+error;
    }
    // si la validacion a salido bien crea el objeto
    if (entra) {
      var camiseta = new prenda();
      camiseta.nombre = nombre;
      camiseta.num_serie = serie;
      camiseta.precio = precio;
      camiseta.impuesto = iva;
      camiseta.color = color;
      camiseta.talla = talla;
      cant.push(canti);
      productos.push(camiseta);
      carro.items = productos;
      carro.cantidades = cant;

      // reinicializamos los campos
      document.getElementById('nombre').value = "";
      document.getElementById('precio').value = "";
      document.getElementById('serie').value = "";
      document.getElementById('color').value = "";
    }
}
// Valida y crea un objeto pantalon
function aniadirZap(){
  var nombre = document.getElementById('nombre').value;
  var precio = document.getElementById('precio').value;
  var numero = document.getElementById('numero').value;
  var tipo = document.getElementById('tipo').value;
  var iva = document.getElementById('iva').value;
  var serie = document.getElementById('serie').value;
  var canti = document.getElementById('cantidad').value;
  var entra = true;
  parseInt(precio);
  parseInt(iva);
  parseInt(numero);
  parseInt(canti);

  try {
    if (!patron.test(serie)) {
       throw "Nº de serie invalido";
    }
    if (precio == "" && precio <= 0) {
      throw "precio fuera de rango";
    }
    if (nombre == "") {
      throw "Escribe el nombre";
    }
    if (iva != 4) {
      throw "Iva incorrecto";
    }
    if (numero < 16 && numero > 48) {
      throw "El numero no puede ser menor que 16 ni mayor que 48";
    }
    if (tipo == "") {
      throw "El tipo no puede estar vacio";
    }
    if (canti < 1 && canti > 99) {
      throw "Cantidad fuera de rango";
    }
  } catch (error) {
      entra = false;
      document.getElementById('msg').innerHTML = "CUIDADO! "+error;
  }

  if (entra) {
    var zapas = new zapatilla();
    zapas.nombre = nombre;
    zapas.num_serie = serie;
    zapas.precio = precio;
    zapas.impuesto = iva;
    zapas.numero = numero;
    zapas.tipo = tipo;
    cant.push(canti);
    productos.push(zapas);
    carro.items = productos;
    carro.cantidades = cant;

    document.getElementById('nombre').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('serie').value = "";
    document.getElementById('numero').value = "";
  }
}
// valida y crea un objeto para las zapatillas
function aniadirPan(){
  var nombre = document.getElementById('nombre').value;
  var precio = document.getElementById('precio').value;
  var color = document.getElementById('color').value;
  var talla = document.getElementById('talla').value;
  var iva = document.getElementById('iva').value;
  var serie = document.getElementById('serie').value;
  var canti = document.getElementById('cantidad').value;
  var ancho = document.getElementById('ancho').value;
  var largo = document.getElementById('largo').value;
  var entra = true;
  parseInt(precio);
  parseInt(iva);
  parseInt(canti);
  parseInt(largo);
  parseInt(ancho);

  try {
    if (!patron.test(serie)) {
      throw "Nº de serie invalido";
    }
    if (yaEsta(serie)) {
      throw "Ese Nº de serie corresponde a otro articulo ya existente";
    }
    if (precio == "" && precio <= 0) {
      throw "precio fuera de rango";
    }
    if (nombre == "") {
      throw "Escribe el nombre";
    }
    if (iva != 10) {
      throw "Iva incorrecto";
    }
    if (color == "") {
      throw "Indica el color";
    }
    if (talla == "") {
      throw "La talla no puede estar vacia";
    }
    if (canti < 1 && canti > 99) {
      throw "Cantidad fuera de rango";
    }
    if (ancho < 32 && ancho > 48) {
      throw "el ancho no puede ser menor a 32 ni mayor que 48";
    }
    if (largo < 28 && ancho > 54) {
      throw "el largo no puede ser menor a 28 ni mayor que 54";
    }
  } catch (error) {
      entra = false;
      document.getElementById('msg').innerHTML = "CUIDADO! "+error;
  }
  if (entra) {
    var panta = new prenda();
    panta.nombre = nombre;
    panta.num_serie = serie;
    panta.precio = precio;
    panta.impuesto = iva;
    panta.color = color;
    panta.talla = talla;
    panta.ancho = ancho;
    panta.largo = largo;
      cant.push(canti);
      productos.push(panta);
      carro.items = productos;
      carro.cantidades = cant;
      // reinicializamos los campos
      document.getElementById('nombre').value = "";
      document.getElementById('precio').value = "";
      document.getElementById('serie').value = "";
      document.getElementById('color').value = "";
      document.getElementById('ancho').value = "";
      document.getElementById('largo').value = "";
  }
}
// Funcion que permite ver los articulos que hay dentro del carrito
function verCarro() {
  if (productos.length == 0) {
    document.getElementById('formu').innerHTML = "No hay articulos en el carrito";
  } else {
    var pintaCarro = "<table border=2>";
    pintaCarro += "<th>Nº de Serie</th><th>Nombre</th><th>Cantidad</th><th>Precio</th>";
    for (let i = 0; i < productos.length; i++) {
      pintaCarro += "<tr>";
      pintaCarro +="<td>"+carro.items[i].num_serie+"</td><td>"+carro.items[i].nombre+"</td><td>"+carro.cantidades[i]+" ud(s)</td><td>"+carro.items[i].precio+" €</td>";
      pintaCarro += "</tr>";
    }
    pintaCarro += "</table>";
    document.getElementById('formu').innerHTML = pintaCarro;
  }
}

// funcion para que no se puedan introducir varios articulos con diferentes numeros de serie
function yaEsta(serie) {
  if (productos.length == 0) {
    return false;
  }
  for (let i = 0; i < productos.length; i++) {
      if (serie == carro.items[i].num_serie) {
          return true;
      }
  }
  return false;
}

// GLOBALES
// Creacion del objeto carrito y los arrays para introducir articulos
var cant = new Array();
var productos = new Array();
var carro = new carrito(1);

// expresion para validar numero de serie
var patron = new RegExp();
patron = /\d{8}$/;


