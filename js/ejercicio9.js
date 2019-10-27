function mostrarDia() {
  var selector = "";
  for (let index = 1; index <= 31; index++) {
      selector+="<option value="+index+">"+index+"</option>";
  }

  document.getElementById('dia').innerHTML = selector;
}


function mostrarMes() {
  var selector2 = "";
  for (let index2 = 0; index2 <= 11; index2++) {
      selector2+="<option value="+index2+">"+(index2+1)+"</option>";
  }

  document.getElementById('mes').innerHTML = selector2;
}

function mostrarAno() {
  var selector3 = "";
  for (let index3 = 1970; index3 <= 2050; index3++) {
      selector3+="<option value="+index3+">"+index3+"</option>";
  }

  document.getElementById('ano').innerHTML = selector3;
}

function mostrarFecha() {
  var dia = document.getElementById('dia').value;
  var mes = document.getElementById('mes').value;
  var ano = document.getElementById('ano').value;

  var fecha = new Date(ano,mes,dia);

  document.write(fecha);
}

mostrarDia();
mostrarMes();
mostrarAno();
