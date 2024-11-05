/* const userLogin = {email: "resposado@gmail.com", password: "reposadito11"}

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (userLogin.email === form.elements.email.value && userLogin.password === form.elements.password.value){
        localStorage.setItem("email", form.elements.email.value)
        location.href = "../html/index.html";
    } else {
        alert("Usuario o contraseña incorrecto, porfavor intente nuevamente")
    }
})
 */

const infoUser = {
    email: "reposado@gmail.com",
    password: "reposadito11"
}

const form = document.querySelector("form");

const loginUser = (event) => {

    event.preventDefault();
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
    if (infoUser.email === email && infoUser.password === password){
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        window.location.href = "./index.html"
     } else {
        alert("Usuario o contraseña incorrecto, porfavor intente nuevamente");
        email = "";
        password = ""; 
     }     
};
form.addEventListener("submit", loginUser)

if (localStorage.getItem("email") && localStorage.getItem("password")){
    window.location.href = "./index.html"
} /* else {
    window.location.href = "./login.html"
} */


