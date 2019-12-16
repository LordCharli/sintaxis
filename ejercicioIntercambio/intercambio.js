// Objeto principal
function entidad() {
  Object.defineProperty(this,"nombre",{value:"",writable:true});
  Object.defineProperty(this,"edad",{value:0,writable:true});
  Object.defineProperty(this,"poder",{value:0,writable:true});

  Object.defineProperties(this,{
    "obtenNombre":{get: function(){return this.nombre;}},
    "obtenEdad":{get: function(){return this.edad;}},
    "obtenPoder":{get: function(){return this.poder;}},
    "setNombre":{set: function(nombre){this.nombre = nombre;}},
    "setEdad":{set: function(edad){this.edad = edad;}},
    "setPoder":{set: function(poder){this.poder = poder;}}
  });
  this.toString = function(){
    return this.obtenNombre+" "+this.obtenEdad;
  };
}
// Objeto que deriva del principal
function mortal() {
  Object.defineProperty(this,"raza",{value:"",writable:true});
  Object.defineProperty(this,"origen",{value:"",writable:true});
  Object.defineProperty(this,"inteligencia",{value:false,writable:true});

  Object.defineProperties(this,{
    "obtenRaza":{get: function(){return this.raza;}},
    "obtenOrigen":{get: function(){return this.origen;}},
    "obtenInteligencia":{get: function(){return this.inteligencia;}},
    "setRaza":{set: function(raza){this.raza = raza;}},
    "setOrigen":{set: function(origen){this.origen = origen;}},
    "setInteligencia":{set: function(intel){this.inteligencia = intel;}}
  });

  this.muerto = function(){
    if(this.obtenEdad == 0){
      return "Muerto";
    } else {
      return "Vivo";
    }
  };
}
mortal.prototype = new entidad;
// Objeto que deriva del principal
function deidad() {
  Object.defineProperty(this,"rango",{value:"",writable:true});
  Object.defineProperty(this,"tipo",{value:"",writable:true});

  Object.defineProperties(this,{
    "obtenRango":{get: function(){return this.rango;}},
    "obtenTipo":{get: function(){return this.tipo;}},
    "setRango":{set: function(rango){this.rango = rango;}},
    "setTipo":{set: function(tipo){this.tipo = tipo;}},
  });
  this.destruir = function(){
    if(this.tipo == "Destructor"){
      return true;
    } else {
      return false;
    }
  };
}
deidad.prototype = new entidad;
// Objeto que deriva del objeto mortal
function saiyan() {
  Object.defineProperty(this,"estatura",{value:"",writable:true});
  Object.defineProperty(this,"peso",{value:0,writable:true});
  Object.defineProperty(this,"ocupacion",{value:"",writable:true});
  Object.defineProperty(this,"cola",{value:false,writable:true});

  Object.defineProperties(this,{
    "obtenEstatura":{get: function(){return this.estatura;}},
    "obtenPeso":{get: function(){return this.peso;}},
    "obtenOcupacion":{get: function(){return this.ocupacion;}},
    "obtenCola":{get: function(){return this.cola;}},
    "setEstatura":{set: function(estatura){this.estatura = estatura;}},
    "setPeso":{set: function(peso){this.peso = peso;}},
    "setOcupacion":{set: function(ocu){this.Ocupacion = ocu;}},
    "setCola":{set: function(cola){this.cola = cola;}}
  });

  this.engorda = function(comida){
    var n = 0;
    parseInt(n);
    if(comida != ""){
      n = 1;
      return n;
    } else {
      return n;
    }
  };
}
saiyan.prototype = new mortal;

// test
var goku = new saiyan();
goku.setNombre = "Kakarotto";
goku.setEdad = 40;
goku.setPoder = 9000;
goku.setRaza = "Saiyan";
goku.setOrigen = "planeta vegeta";
goku.setInteligencia = true;
goku.setEstatura = "170";
goku.setPeso = "120";
goku.setOcupacion = "soldado nivel bajo";
goku.setCola = false;
goku.setPeso = parseInt(goku.obtenPeso) + goku.engorda("bacon");
console.log(goku.obtenPeso);
