function dividir(n,m){


  var dividendo = parseInt(n);
  var divisor = parseInt(m);
  console.log(dividendo);

  if (divisor > dividendo) {
    document.getElementById('retorno').innerHTML = 0;
  } else {
    document.getElementById('retorno').innerHTML = dividir(dividendo - divisor,divisor)+1;
  }
}
