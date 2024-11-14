/* const infoUser = {
    email: "reposado@gmail.com",
    password: "reposadito11"
}
 */
    
const navLeft = document.querySelector("#navbarLeft");
const navRight = document.querySelector("#navbarRight");

let menu = []

    for (let item of menus) {
        menu.push(
            `<span class="nav-item">
                <a class="nav-link" id="${item.id}"aria-current="page" href="${item.href}">
                    <p class='${item.icon}'></p>
                ${item.name}</a>
            </span>`
        )
    }; 
    
    /* Revisar metodos Arrays, que otros metodos aparte del "slice" se pueden usar */
navLeft.innerHTML = menu.slice(0, 3).join(" ");
localStorage.getItem("email") ? navRight.innerHTML = `<span>
    Bienvenido, ${menu[3]} <img height="25" src="../jpg/cart.png" alt="Comprar" /><b></b></span> ${menu[5]} <span onclick="logout()" id="logout"> Cerrar Sesión </span>` : navRight.innerHTML = menu[4];
    
function logout(){
    localStorage.clear();
    location.href = "./index.html";
}

