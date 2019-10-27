function fecha(){
  var dias;

  for (let i = 2014; i < 2050; i++) {
    dias = new Date(i,0,1)

    if (dias.getDay() === 0) {
      document.write("1 de enero es un domingo en "+i+"<br>");
    }
  }
}

fecha();

