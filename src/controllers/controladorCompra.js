

// LLAMO A LA MEMORIA PARA ACCEDER A LOS DATOS GUARDADOS
let infoProducto=JSON.parse(localStorage.getItem("producto"))
console.log(infoProducto)


let foto=document.getElementById("foto")
let nombre=document.getElementById("nombre")
let precio=document.getElementById("precio")
let precio1=document.getElementById("precio1")
let descripcion=document.getElementById("descripcion")
let precio2=document.getElementById("precio2")
let carrito=[]
let btnCarrito=document.getElementById("btnCarrito")
let vaciar=document.getElementById("empty")
let infoCarrito=JSON.parse(localStorage.getItem("carrito"))
let cantidad=document.getElementById("cantidad")



 let numCarrito=document.getElementById("numCarrito")
if(infoCarrito != null){
    carrito=infoCarrito
    numCarrito.textContent=carrito.length
}else{
    carrito=[]
}


foto.src=infoProducto.foto
nombre.textContent=infoProducto.nombre
precio.textContent=infoProducto.precio
precio1.textContent="$"+infoProducto.precioCOP
descripcion.textContent=infoProducto.descripcion


// MOSTRAR PRECIO CANTIDAD PRODUCTOS SELECCIONADOS
cantidad.addEventListener("change",function(){
    precio.textContent="COP $"+infoProducto.precioCOP*cantidad.value
})

// VER PRECIO CANTIDAD PRODUCTOS EN DOLARES 
precio2.addEventListener("click",function(){
    precio.textContent="USD $"+infoProducto.precioUSD*cantidad.value
    cantidad.addEventListener("change",function(){
        precio.textContent="USD $"+infoProducto.precioUSD*cantidad.value
    })
})


// AGREGAR PRODUCTOS AL CARRITO
btnCarrito.addEventListener("click",function(){
    carrito.push(infoProducto) // EMPUJAMOS Y AL CLICKEAR LO AGREGA AL OBJETO CARRITO
    numCarrito.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})

// VACIAR CARRITO
vaciar.addEventListener("click",function(){
    carrito=[]
    numCarrito.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
})



