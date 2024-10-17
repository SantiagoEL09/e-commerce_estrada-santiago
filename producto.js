class productos {
    constructor (titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

let moto = new productos ("Husqvarna Svartpilen 200", "Pequeña en cilindraje pero llena de carácter de moto grande. Motor monocilíndrico 4 tiempos de 199.5 cc, diseño futurista y robusto.", "$17.990.000", "Disponible bajo pedido", {src:"https://motoeuropa.com.co/wp-content/uploads/2022/09/ME-web-svartpilen200.jpg"})

moto

let etiquetas = `
    <h1>  ${moto.titulo}</h1>
    <h2>  ${moto.detalle}</h2>
    <h3>  ${moto.precio}</h3>
    <p>  ${moto.stock}</p>  
    <img src="${moto.imagen.src}">`

const main = document.querySelector("main")
main.innerHTML = etiquetas;


