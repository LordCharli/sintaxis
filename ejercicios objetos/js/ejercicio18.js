//OBJETOS
function Persona(nom,age,gen) {
  this.nombre = nom;
  this.edad = age;
  this.genero = gen;
}

function Estudiante(nom,age,gen) {
  Persona.call(this,nom,age,gen);
  this.curso = "";
  this.grupo = "";
}
Estudiante.prototype = new Persona;

function Profesor(nom,age,gen) {
  Persona.call(this,nom,age,gen);
  this.asignatura = "";
  this.nivel = "";
}
Profesor.prototype = new Persona;

// METODOS
Persona.prototype.obtDetalles = function() {
  this.detalles = this.nombre + " " + this.edad + " " + this.genero;
  return this.detalles;
};

Estudiante.prototype.registrar = function(curso,grupo) {
  this.curso = curso;
  this.grupo = grupo;
  return this.curso,this.grupo;
};

Profesor.prototype.asignar = function(asig,lvl) {
  this.asignatura = asig;
  this.nivel = lvl;
  return this.asignatura,this.nivel;
};


//PRUEBAS
var objPersona = new Persona("charli",22,"mosca de la caca");
var objEstudiante = new Estudiante("charli",22,"mosca de la caca");
var objProfesor = new Profesor("charli",22,"mosca de la caca");
objPersona.obtDetalles();
objEstudiante.registrar("DAW","2");
objProfesor.asignar("DAW","medio");


console.log(objPersona);
console.log(objEstudiante);
console.log(objProfesor);
