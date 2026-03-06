const params = new URLSearchParams(window.location.search)

function getParam(nombre){
  return decodeURIComponent(params.get(nombre) || "")
}

document.getElementById("id").innerText = getParam("id")
document.getElementById("fecha").innerText = getParam("fecha")
document.getElementById("cliente").innerText = getParam("cliente")

document.getElementById("detalle").innerHTML = getParam("detalle")

document.getElementById("subtotal").innerText = getParam("subtotal")
document.getElementById("isv").innerText = getParam("isv")
document.getElementById("total").innerText = getParam("total")
