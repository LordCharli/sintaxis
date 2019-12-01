//OBJETOS
class Person {
  constructor(nom, ape1, ape2, DNI, nac, gen) {
    this.nombre = nom || "";
    this.apellido1 = ape1 || "";
    this.apellido2 = ape2 || "";
    this.dni = DNI || "";
    this.nacimiento = nac || "";
    this.sexo = gen || "";
  }
  fullName() {
    return this.nombre + " " + this.apellido1 + " " + this.apellido2;
  }
  toString() {
    return "Nombre: " + this.nombre + "<br>Apellidos: " + this.apellido1 + " " + this.apellido2 + "<br>DNI: " + this.dni + "<br>Fecha de nacimiento: " + this.nacimiento + "<br>sexo: " + this.sexo;
  }
  get nombre(){
    return this.nombre;
  }
  get apellido1(){
    return this.apellido1;
  }
  get apellido2(){
    return this.apellido2;
  }
  get dni(){
    return this.dni;
  }
  get nacimiento(){
    return this.nacimiento;
  }
  get sexo(){
    return this.sexo;
  }
}


var objPerson = new Person("charli","cdfg","sdfr","74873849V","27/07/1997","mosca de la caca");

function pintar() {
  // document.getElementById('pinta').innerHTML = objPerson.fullName();
  document.getElementById('pinta').innerHTML = objPerson.toString();
}
