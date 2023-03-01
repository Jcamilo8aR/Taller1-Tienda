export function pintarProductos(productos){
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
    
        // CREAR UN TITULO
        let nombre = document.createElement("h6")
        nombre.classList.add("text-center")
        nombre.textContent=producto.nombre
        
        // CREAR UN PRECIO
        let precio=document.createElement("h7")
        precio.classList.add("text-center", "text-success", "fw-bold")
        precio.textContent="USD $"+producto.precio

        // DETECTANDO EVENTO    
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })
    
        // PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })  
    
}
