import {productos} from "../helpers/baseDatos.js"

// LLAMANDO A LA FILA
let fila=document.getElementById("fila")

// RECORRIENDO EL ARREGLO
productos.forEach(function(producto){  // FUNCION ANONIMA (FUNCION SIN NOMBRE) - SE EJECUTA UNA SOLA VEZ
    
    // CREANDO COLUMNAS PARA ALOJAR LOS PRODUCTOS
    let columna = document.createElement("div")
    columna.classList.add("col")

    // CREAR TARJETA PARA ALMACENAR LA INFO DEL  (USANDO BOOTSTRAP)
    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    // CREAR UNA IMAGEN
    let imagen = document.createElement("img")
    imagen.classList.add("img-fluid", "w-100")
    imagen.src=producto.fotos[0]

    // PADRES E HIJOS
    tarjeta.appendChild(imagen)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})  
