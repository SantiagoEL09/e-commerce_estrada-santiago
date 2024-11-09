
const userLogged = () => {
    if (localStorage.getItem("email") && localStorage.getItem("password")){
    window.location.href = "./index.html"
    } 
    /* else {
        window.location.href = "./login.js"
    } */
}
userLogged();