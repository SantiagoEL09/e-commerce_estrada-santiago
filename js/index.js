/* import data from "./data.js"; */
// Seleccionamos el elemento h2 y cambiamos su texto a "Productos destacados"
document.getElementById("title_principal").innerText = "Productos Destacados";

const input = document.querySelector("#input");
const searchButton = document.querySelector("#searchProduct");
const resetButton = document.querySelector("#resetProducts");
const allButton = document.querySelector("#all");
const categoryButtons = document.querySelectorAll(".categoryButton");
const section = document.querySelector("section");

function arrayProduct() {
  let arrayCards = data.map((product) => `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="logoPrincipal ${product.title}">
          <div class="card-body">
            <h4 class="card-title">${product.title}</h4>  
            <p>Categoría: ${product.category}</p>
            <a href="producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>  
          </div>
        </div>`)
section.innerHTML = arrayCards.join("");
}arrayProduct()


/* BUSCADOR Y CATEGORIAS */
const searchProduct = () => {
  const filterData = data.filter(
    (product) => product.title.toLowerCase() === input.value.toLowerCase());

    if (filterData.length === 1) {
      arrayCards = filterData.map((filter) => {
        const brandElement = filter.category === "Juegos" ? "" : `<p>Marca: ${filter.brand}</p>`;
        return `
        <div class="card">
            <img src="${filter.img}" class="card-img-top" alt="logoPrincipal ${filter.title}">
            <div class="card-body">
              <h4 class="card-title">${filter.title}</h4>
              <h5>USD $${filter.price}</h5>
              <p>Stock disponible: ${filter.stock}</p>
              ${brandElement}
              <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>  
            </div>
        </div>`;
      }
    );
        section.innerHTML = arrayCards.join("");
    } else {
      section.innerHTML = `No encontramos el producto: ${input.value}. Porfavor ingresa un nombre de producto valido`;
    }    
}

const resetInput = () => {
  input.value = "";
  let arrayCards = data.map((product) => `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="logoPrincipal ${product.title}">
          <div class="card-body">
            <h4 class="card-title">${product.title}</h4>  
            <p>Categoría: ${product.category}</p>
            <a href="producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>  
          </div>
        </div>`)
section.innerHTML = arrayCards.join("");
}

const filterCategory = (category) => {
  const filterData = data.filter(
    (product) => product.category === category)
      arrayCards = filterData.map((filter) => {
        const brandElement = filter.category === "Juegos" ? "" : `<p>Marca: ${filter.brand}</p>`;
        return `
          <div class="card">
            <img src="${filter.img}" class="card-img-top" alt="logoPrincipal ${filter.title}">
            <div class="card-body">
              <h4 class="card-title">${filter.title}</h4>
              <p>Categoría: ${filter.category}</p>
              ${brandElement}
              <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>
            </div>
          </div>
        `;
      }
    );
section.innerHTML = arrayCards.join("");
};

searchButton.addEventListener("click", searchProduct);
resetButton.addEventListener("click", resetInput);
allButton.addEventListener("click", resetInput)

for (let i in categoryButtons){
  categoryButtons[i].addEventListener("click", (event) => {
    const category = event.target.getAttribute("value");
    filterCategory(category);
  })
}

/* FIN BUSCADOR Y CATEGORIAS */
    /* 
      `<div class="card">
          <img src="${filter.img}" class="card-img-top" alt="logoPrincipal ${filter.title}">
          <div class="card-body">
            <h4 class="card-title">${filter.title}</h4>  
            <p>Categoría: ${filter.category}
            <p>Marca: ${filter.brand}
            <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>  
          </div>
        </div>`
  )
  section.innerHTML = arrayCards.join("");
} */

/* function cards() {

    let array_cards = data.map((product) => {
      return `<div class="card">
          <img src="${product.img}" class="card-img-top" alt="logoPrincipal ${product.title}">
          <div class="card-body">
          <h4 class="card-title">${product.title}</h4>  
          <p class="card-text">${product.detail}</p>
          <h5>${product.price}</h5>
          <p>Stock disponible: ${product.stock}
          <a href="producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>  </div>
        </div>`});

  document.querySelector("section").innerHTML = array_cards.join("");
} 
cards(); */

 /*  let array_cards = []; */
// Iteramos 10 veces para crear 10 tarjetas (i = 1 a 9)
/* ELIMINAMOS EL FOR
          for (let i = 1; i < 10; i++) {
            // Creamos el código HTML para una tarjeta individual. Agregamos la variable i,
            // la cual va iterar.
              const card = `
              <div class="card">
                <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="logoPrincipal ${i}">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>  
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>  
                  <a href="producto.html" class="btn btn-primary">Ver más</a>  </div>
              </div> 
              `;
            // Agregamos la tarjeta al array
            array_cards.push(card);
          } */

// Creamos un array vacío para almacenar las tarjetas

// Seleccionamos el elemento section y establecemos su contenido HTML con las
// tarjetas del array



