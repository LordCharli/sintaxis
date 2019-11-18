var usuarios = [{"id":133,"firstName":"Juan Carlos","lastName":"Rolon","email":"Hernn84@hotmail.com"},
{"id":134,"firstName":"Cesar","lastName":"jazquez","email":"Lorena_DeLarosa@hotmail.com"},
{"id":135,"firstName":"Leticia","lastName":"Fuentes","email":"Santiago56@hotmail.com"},
{"id":136,"firstName":"Amancio","lastName":"Fuentes","email":"Santiago56@hotmail.com"},
{"id":137,"firstName":"Lourdes","lastName":"Armenta","email":"Timoteo424@hotmail.com"}];

usuarios = usuarios.sort(function (a,b) {
  if (a.lastName>b.lastName) {
    return 1;
  }
  if (a.lastName<b.lastName) {
    return -1;
  }
  if (a.firstName>b.firstName) {
    return 1;
  }
  if (a.firstName<b.firstName) {
    return -1;
  }
  return 0;
});

var screen = "";

for (x of usuarios) {
  screen += x.id+" "+x.firstName+" "+x.lastName+" "+x.email+"<br>";
}

document.getElementById('pantalla').innerHTML = screen;
