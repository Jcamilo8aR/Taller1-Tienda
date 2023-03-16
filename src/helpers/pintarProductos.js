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
        precio.textContent="COP $"+producto.precio

        // CREAR UNA DESCRIPCION
        let descripcion=document.createElement("h6")
        descripcion.classList.add("text-center","d-none")
        descripcion.textContent=producto.descripcion

        // PRECIO EN PESOS
        let precio2=document.createElement("h1")
        precio2.classList.add("text-center","fs-5","text-success","d-none")
        precio2.textContent="USD $"+producto.precio2

        // DETECTANDO EVENTO    
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
            precio2.classList.add("d-print","d-block")
        })

        tarjeta.addEventListener("mouseleave",function(){
            imagen.src=producto.fotos[0]
        })



        

        
    
        // PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio2)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })  
    
}
