const params = new URLSearchParams(window.location.search)

const pedido = params.get("pedido")

if(!pedido){
document.body.innerHTML="Pedido no especificado"
}

fetch("data/"+pedido+".json")
.then(res=>res.json())
.then(data=>{

document.getElementById("info").innerHTML = `
<b>ID:</b> ${data.id}<br>
<b>Fecha:</b> ${data.fecha}<br>
<b>Cliente:</b> ${data.cliente}
`

let html=""

data.detalle.forEach(p=>{

html+=`
<tr>

<td class="center">${p.cantidad}</td>

<td class="center">${p.unidad}</td>

<td class="center">${p.vend}</td>

<td class="right">L ${p.precio}</td>

<td class="right">L ${p.sub}</td>

</tr>
`

})

document.getElementById("detalle").innerHTML=html

document.getElementById("subtotal").innerText="L "+data.subtotal
document.getElementById("isv").innerText="L "+data.isv
document.getElementById("total").innerText="L "+data.total

})
