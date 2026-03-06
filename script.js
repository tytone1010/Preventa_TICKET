const params = new URLSearchParams(window.location.search)

function getParam(nombre){
  const valor = params.get(nombre)
  if(!valor) return ""
  return decodeURIComponent(valor)
}

document.getElementById("id").textContent = getParam("id")
document.getElementById("fecha").textContent = getParam("fecha")
document.getElementById("cliente").textContent = getParam("cliente")

document.getElementById("subtotal").textContent = getParam("subtotal")
document.getElementById("isv").textContent = getParam("isv")
document.getElementById("total").textContent = getParam("total")

const detalleHTML = getParam("detalle")

if(detalleHTML){
  document.getElementById("detalle").innerHTML = detalleHTML
}
