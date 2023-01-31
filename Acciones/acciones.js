
function mostrarInformacion(accion) {
  var elements = document.getElementsByClassName("informacion")
  for (var i = 0; i < 3; i++) {
    console.log(i)
    elements[i].style.display = "none"
  }
  console.log(accion)
  document.getElementById(accion).style.display = "inline-block"
}

function informacionExtra(ad) {
  var highlighted = document.getElementsByClassName("extraInfo")
  for (var i = 0; i < 3; i++) {
    console.log(i)
    highlighted[i].style.display = "none"
  }
  console.log(ad)
  document.getElementById(ad).style.display = "inline-block"
}
/*
function informacionExtraEA(ad2) {
  var highlighted2 = document.getElementsByClassName("extraInfoEA")
  for (var i = 0; i < 1; i++) {
    console.log(i)
    highlighted2[i].style.display = "none"
  }
  console.log(ad2)
  document.getElementById(ad2).style.display = "inline-block"
}

function informacionExtraEL(ad3) {
  var highlighted3 = document.getElementsByClassName("extraInfoEL")
  for (var i = 0; i < 1; i++) {
    console.log(i)
    highlighted3[i].style.display = "none"
  }
  console.log(ad3)
  document.getElementById(ad3).style.display = "inline-block"
}*/