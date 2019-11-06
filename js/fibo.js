function fibonazi(n){

  if (n < 2) {
    document.getElementById('res').innerHTML = n;
  } else {
    fibonazi(n-1) + fibonazi(n - 2);
  }

}
