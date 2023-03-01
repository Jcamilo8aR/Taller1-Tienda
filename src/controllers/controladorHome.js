import {productos} from "../helpers/baseDatos.js"
import {pintarProductos} from "../helpers/pintarProductos.js"

// LLAMANDO A LA FILA
let fila=document.getElementById("fila")

// PINTAR LOS PRODUCTOS DE LA TIENDA
pintarProductos(productos)
