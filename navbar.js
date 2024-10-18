let links = [
    {
        texto: "Inicio", href: "indexEcommerce.html"
    },
    {
        texto: "Productos", href: "producto.html"
    },
    {
        texto: "Contacto", href: "#"
    }
]

const header = document.querySelector("header");

let menu = []

    for (let link of links) {
        menu.push(`<a class="nav-item" href=${link.href}>${link.texto}</a>`)
    }

header.innerHTML = menu.join(" ");