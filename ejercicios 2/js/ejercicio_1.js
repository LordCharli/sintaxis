var n = 1.90;


document.write("Helado solo. 1'90€");
document.write("Helado con kitkat. +1'50€");
document.write("Helado con brownie. +0.75€");
document.write("Helado con lacasitos. +0.95€");

  var opt = prompt("¿Cual desea?");
  opt = parseInt(opt);

  switch (opt) {
    case 1:
        alert("El precio del helado sera: "+n);

      break;

      case 2:
          alert("El precio del helado sera: " + (n+1.5));

      break;

      case 3:
          alert("El precio del helado sera: "+(n + 0.75));

      break;

      case 4:
          alert("El precio del helado sera: "+(n+0.95));

      break;

    default:
          alert("la opcion elegida no existe");
      break;
  }



