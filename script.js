const params = new URLSearchParams(window.location.search)

const pedido = params.get("pedido")

if(pedido){

fetch("pedidos/" + pedido + ".json")

.then(res => res.json())

.then(data => {

document.getElementById("id").textContent = data.id
document.getElementById("fecha").textContent = data.fecha
document.getElementById("cliente").textContent = data.cliente

document.getElementById("subtotal").textContent = data.subtotal
document.getElementById("isv").textContent = data.isv
document.getElementById("total").textContent = data.total

let filas=""

data.productos.forEach(p => {

filas += `
<tr>
<td class="center">${p.cant}</td>
<td class="center">${p.unidad}</td>
<td class="center">${p.vend}</td>
<td class="right">${p.precio}</td>
<td class="right">${p.sub}</td>
</tr>
`

})

document.getElementById("detalle").innerHTML = filas

})

}
