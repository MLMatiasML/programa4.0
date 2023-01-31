
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