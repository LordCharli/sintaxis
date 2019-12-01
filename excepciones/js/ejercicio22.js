var array = new Array();

function add(){
  var n = document.getElementById('num');
  try {
    if (!/^d+/.test(n)){
      throw "El numero no es entero";
    } else {
      array.push(n);
    }
  } catch (err) {

  }
}
