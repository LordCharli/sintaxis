"use strict";

// function cat(nombre) {
//     this.name = nombre;
//     var sonido = ["Miau"];

//     this.dice = function () {
//         return sonido;
//     }
// }

// cat.prototype.especie = function(){
//     return "Persa";
// }

// console.log("Ejemplo1: creacion de instancias");
// var gato = new cat("Flufi");
// var gato2 = new cat("Misi");

// Object.defineProperty(cat.prototype,"numPat",{
//     value : 4,
//     writable : true,
//     enumerable : true,
//     configurable : true
// });

// console.log(gato.name +" "+gato2.name);
// console.log(gato.numPat+" "+gato2.numPat);
// console.log(gato.dice()+" "+gato2.dice());
// console.log("");

// var dog = new Object();
// dog.name = "Scooby";
// dog.owner = {};
// dog.owner.name = "Pepito";
// dog.bark = function(){
//     return "guauguau";
// }

// var dog2 = {
//   name : "Sco2",
//   owner : {
//       name : "Luis",
//       edad : 34
//   },
//   bark : function(){
//       return "guauguau";
//   }
// }

// console.log(dog2.name);
// console.log(dog2.owner.edad);
// console.log(dog2.bark());

function cartera(){
    var dinero = 0;
    Object.defineProperty(this,"cantidad",{
        get : function(){return dinero;},
        set : function(value){dinero = value;}
    });

    this.checkSaldo = function(){
      if (this.cantidad < 100) {
          return "tienes poco dinero";
      }
      return "no te preocupes por el dinero";
    }
}

cartera.prototype.cobrarNomina = function(salario){
    this.cantidad = salario + this.cantidad;
    return this.cantidad;
}

var monedero = new cartera();

console.log(monedero.cobrarNomina(1800));

console.log(monedero.checkSaldo());
