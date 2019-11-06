function factorial(n){
  console.log(n);
  if (n<=1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}
