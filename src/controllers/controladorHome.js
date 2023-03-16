import {productos} from "../helpers/baseDatos.js"
import {pintarProductos} from "../helpers/pintarProductos.js"

// LLAMANDO A LA FILA
let fila=document.getElementById("fila")

// PINTAR LOS PRODUCTOS DE LA TIENDA
pintarProductos(productos)

// ESCUCHANDO CLICK EN LA FILA CONTENEDORA DE PRODUCTOS
fila.addEventListener("click",function(evento){
    
    let datosProductoSeleccionado={}
    let tarjeta=evento.target.parentElement
    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h6").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h7").textContent
    datosProductoSeleccionado.descripcion=tarjeta.querySelector(".d-none").textContent
    datosProductoSeleccionado.precio2=tarjeta.querySelector(".fs-5",".d-none").textContent
    

    // USAREMOS LA MEMORIA DEL PC PARA GUARDAR ESTA INFO (CACHE - COOKIES)
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    
    window.location.href="./src/views/ampliarInfo.html"

    
})