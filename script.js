const params = new URLSearchParams(window.location.search)

const ticket = params.get("ticket")

if(ticket){

const html = decodeURIComponent(ticket)

document.getElementById("ticket").innerHTML = html

}
