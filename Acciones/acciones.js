
function mostrarInformacion(titulo, accion) {
  var elements = document.getElementsByClassName("informacion")
  for (var i = 0; i <= 2; i++) {
    console.log(i)
    elements[i].style.display = "none"
  }
  console.log(accion)
  var element = document.getElementById(accion)
  element.style.display = "inline-block"
  var clickable = document.getElementById("clickable")
  clickable.children[0].style.color = "#ffffff"
  clickable.children[1].style.color = "#ffffff"
  clickable.children[2].style.color = "#ffffff"
  var elementitulo = document.getElementById(titulo)
  elementitulo.style.color = "#ff862c"
}

function infoExtraShow(a) {
  var show = document.getElementsByClassName("extraInfo")
  for (var i = 0; i <= 2; i++) {
    console.log(i)
    show[i].style.display = "block"
  }
  document.getElementById(a).style.display = "inline-block"
}

function infoExtraHide(b) {
    document.getElementById(b).style.display = "none"
}