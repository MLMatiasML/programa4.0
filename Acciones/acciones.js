
function mostrarInformacion(titulo, accion) {
  var elements = document.getElementsByClassName("informacion")
  for (var i = 0; i <= 2; i++) {
    console.log(i)
    elements[i].style.display = "none"
  }
  console.log(accion)
  var element = document.getElementById(accion)
  element.style.display = "inline-block"
  var elementitulo = document.getElementById(titulo)
  elementitulo.style.color = "#ff862c"
}

function infoExtraShow(a) {
  var show = document.getElementsByClassName("extraInfo")
  for (var i = 0; i <= 2; i++) {
    console.log(i)
    show[i].style.display = "none"
  }
  console.log(a)
  document.getElementById(a).style.display = "inline-block"
}
/*Ocultamiento de la leyenda como información complementaria
function infoExtraHide(b) {
  var hide = document.getElementsByClassName("extraInfo")
  for (var i = 0; i <= 2; i++) {
    console.log(i)
    hide[i].style.display = "none"
  }
  console.log(b)
  document.getElementById(b).style.display = "none"
}*/