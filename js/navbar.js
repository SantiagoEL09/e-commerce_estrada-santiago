function linksNavBar(){
    let links = [
        {
            texto: "Inicio", href: "index.html"
        },
        {
            texto: "Productos", href: "producto.html"
        },
        {
            texto: "Contacto", href: "#"
        }
    ]
    
    const nav = document.querySelector(".navbar");
    
    let menu = []
    
        for (let link of links) {
            menu.push(`<a class="nav-item" href=${link.href}>${link.texto}</a>`)
        }
    
    nav.innerHTML = menu.join(" ");
}linksNavBar();
