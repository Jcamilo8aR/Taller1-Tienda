// LLAMO A LA MEMORIA PARA ACCEDER A LOS DATOS GUARDADOS
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)

let foto=document.getElementById("foto")
let nombre=document.getElementById("nombre")
let precio=document.getElementById("precio")
let descripcion=document.getElementById("descripcion")

foto.src=infoProducto.foto
nombre.textContent=infoProducto.nombre
precio.textContent=infoProducto.precio
descripcion.textContent=infoProducto.descripcion


// DESCRIPCION