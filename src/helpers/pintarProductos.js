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

        // PRECIO EN DOLARES
        let precioUSD=document.createElement("h2")
        precioUSD.classList.add("text-center","fs-3","text-success","d-none")
        precioUSD.textContent=producto.precio2

        // PRECIO 
        let precioCOP=document.createElement("h2")
        precioCOP.classList.add("text-center","fs-4","text-success","d-none")
        precioCOP.textContent=producto.precio


        // MOSTAR SEGUNDA IMAGEN AL PASAR EL MOUSE POR ESTA
        tarjeta.addEventListener("mouseover",function(){
            imagen.src=producto.fotos[1]
            precio2.classList.add("d-print","d-block")
        })


        // VOLVER A LA IMAGEN ANTERIOR CUANDO EL MOUSE SALGA DE ESTA
            tarjeta.addEventListener("mouseleave",function(){
                imagen.src=producto.fotos[0]
            })
            
            // QUE VUELVA A LA PRIMERA AL DAR CLICK Y ASI VERLA EN LA PAGINA DE COMPRA
            tarjeta.addEventListener("click",function(){
                imagen.src=producto.fotos[0]
            })


        // PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombre)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precioCOP)
        tarjeta.appendChild(precioUSD)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })  
    
}
