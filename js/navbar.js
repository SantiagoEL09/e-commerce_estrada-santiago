const infoUser = {
    email: "reposado@gmail.com",
    password: "reposadito11"
}
const menus = [
        {
            name: "Inicio",
            href: "./index.html", 
            icon: "bx bx-home-alt-2", 
            id: ""
        },
        {
            name: "Productos", 
            href: "./producto.html", 
            icon: "fi fi-br-supplier-alt", 
            id: ""
        },
        {
            name: "Contacto", 
            href: "https://www.guayerd.com/es/", 
            icon: "fi fi-br-headset", 
            id: ""
        },
        {
            name: `${localStorage.getItem("email")}`, 
            href: "#", 
            icon: "fi fi-sr-user", 
            id: ""
        },
        {
            name: "Login", 
            href: "./login.html", 
            icon: "fi fi-br-sign-in-alt", 
            id: ""
        },
        {
            name: `${localStorage.getItem("quantity")}`, 
            href: "#", 
            icon: "fi fi-rr-shopping-cart", 
            id: "cart"
        },
    ]
    
const navLeft = document.querySelector("#navbarLeft");
const navRight = document.querySelector("#navbarRight");

let menu = []

    for (let item of menus) {
        menu.push(
            `<li class="nav-item">
                <a class="nav-link" id="${item.id}"aria-current="page" href="${item.href}">
                    <i class='${item.icon}'></i>
                ${item.name}</a>
            </li>`
        )
    }; 
    
    /* Revisar metodos Arrays, que otros metodos aparte del "slice" se pueden usar */
navLeft.innerHTML = menu.slice(0, 3).join(" ");
localStorage.getItem("email") ? navRight.innerHTML = `
    ${menu[3]}${menu[5]} <span onclick="logout()" id="logout"> Cerrar Sesión </span>` : navRight.innerHTML = menu[4];
    
function logout(){
    localStorage.clear();
    location.href = "./index.html";
}
