const params = new URLSearchParams(window.location.search);

function param(nombre){
  const v = params.get(nombre);
  return v ? decodeURIComponent(v) : "";
}

document.getElementById("id").textContent = param("id");
document.getElementById("fecha").textContent = param("fecha");
document.getElementById("cliente").textContent = param("cliente");

document.getElementById("subtotal").textContent = param("subtotal");
document.getElementById("isv").textContent = param("isv");
document.getElementById("total").textContent = param("total");

const detalle = param("detalle");

if(detalle){
  document.getElementById("detalle").innerHTML = detalle;
}
