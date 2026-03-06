const params = new URLSearchParams(window.location.search)

function getParam(nombre){
  return params.get(nombre) || ""
}

document.getElementById("id").innerText = getParam("id")
document.getElementById("fecha").innerText = getParam("fecha")
document.getElementById("cliente").innerText = getParam("cliente")

document.getElementById("subtotal").innerText = getParam("subtotal")
document.getElementById("isv").innerText = getParam("isv")
document.getElementById("total").innerText = getParam("total")

const detalle = decodeURIComponent(getParam("detalle"))

document.getElementById("detalle").innerHTML = detalle
