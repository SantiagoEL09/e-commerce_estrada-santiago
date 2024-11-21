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
            `<li class="nav-item">
                <a class="nav-link" id="${item.id}"aria-current="page" href="${item.href}">
                <i class='${item.icon}'></i>
                ${item.name}</a>
            </li>`
        )
    };
    
    /* Revisar metodos Arrays, que otros metodos aparte del "slice" se pueden usar */
navLeft.innerHTML = `${menu[0]}  ${menu[1]} ${menu[2]}`;
localStorage.getItem("email") ? navRight.innerHTML = `
${menu[3].split("@")[0]}  ${menu[5]} <span onclick="logout()" id="logout"> Cerrar Sesión </span>`
  : navRight.innerHTML = menu[4];

/* `Bienvenido, ${menu[3].split("@")[0]}${menu[5]} <span onclick="logout()" id="logout"> Cerrar Sesión </span>`: navRight.innerHTML = menu[4]; */
                
  /* ${menu[4]}${menu[5]}<span onclick="logout()" id="logout">Cerrar Sesión</span>`
  : document.getElementById("menuRight").innerHTML = menu[3];


/* `Bienvenido, ${menu[3].split("@")[0]} <img height="25" src="../jpg/cart.png" alt="Comprar"> ${menu[5]}</href=>  <a onclick="logout()" id="logout"> Cerrar Sesión` : navRight.innerHTML = menu[4]; */ 
    
function logout(){
    localStorage.clear();
    location.href = "./index.html";
}

