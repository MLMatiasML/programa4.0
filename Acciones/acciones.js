
function mostrarInformacion(accion) {
  var elements = document.getElementsByClassName("informacion")
  for (var i = 0; i < 3; i++) {
    console.log(i)
    elements[i].style.display = "none"
  }
  console.log(accion)
  document.getElementById(accion).style.display = "inline-block"
}

function informacionExtra(a) {
  var extra = document.getElementsByClassName("extraInfo")
  for (var i = 0; i < 3; i++) {
    console.log(i)
    extra[i].display = "none"
  }
  console.log(a)
  document.getElementById(a).style.display = "inline-block"

}

function informacionExtra1(b) {
  var extra = document.getElementsByClassName("extraInfo")
  for (var i = 0; i < 3; i++) {
    console.log(i)
    extra[i].display = "inline-block"
  }
  console.log(b)
  document.getElementById(b).style.display = "none"

}