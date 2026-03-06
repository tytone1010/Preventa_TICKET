const params = new URLSearchParams(window.location.search)

const pedido = params.get("pedido")

fetch("pedidos/pedido_" + pedido + ".json")

.then(res => res.json())

.then(data => {

document.getElementById("id").innerText = data.id
document.getElementById("fecha").innerText = data.fecha
document.getElementById("cliente").innerText = data.cliente

document.getElementById("subtotal").innerText = data.subtotal
document.getElementById("isv").innerText = data.isv
document.getElementById("total").innerText = data.total

let filas=""

data.productos.forEach(p => {

filas += `
<tr>
<td class="center">${p.cant}</td>
<td class="center">${p.unidad}</td>
<td class="center">${p.vend}</td>
<td class="right">${p.punit}</td>
<td class="right">${p.sub}</td>
</tr>
`

})

document.getElementById("detalle").innerHTML = filas

})
