/* import data from "./data.js"; */
// Seleccionamos el elemento h2 y cambiamos su texto a "Productos destacados"
document.getElementById("title_principal").innerText = "Productos Destacados";

const data = [
  {
      id: 1,
      title: "Consola PlayStation 5",
      detail: "La PlayStation 5 Pro te ofrece una experiencia de juego inigualable. Con un hardware más potente, podrás disfrutar de gráficos ultra realistas gracias al trazado de rayos avanzado, que simula la iluminación natural para crear imágenes más detalladas y realistas. Además, la superresolución espectral te permite jugar en 4K con una nitidez asombrosa. Con un almacenamiento SSD de 2 TB, tendrás espacio de sobra para todos tus juegos.",
      img: "https://cosonyb2c.vtexassets.com/arquivos/ids/360392-1600-auto?v=638645914784400000&width=1600&height=auto&aspect=true",
      price: "$ 4.199.711",
      stock: 25,
      category: "PlayStation",
  }, {
      id: 2,
      title: "PlayStation 5 Slim Digital",
      detail: "El paquete PlayStation 5 Slim Digital, Ratchet & Clank: Rift Apart y Returnal es la combinación perfecta para los gamers que buscan lo último en tecnología y entretenimiento. Esta edición digital de la PS5, más compacta y sin unidad de disco, te permite acceder a una amplia biblioteca de juegos a través de PlayStation Store. Disfruta de una experiencia de juego inmersiva con cargas ultrarrápidas gracias a su SSD, y siente cada detalle con la retroalimentación háptica y los gatillos adaptativos. Además, los juegos incluidos, Ratchet & Clank: Rift Apart y Returnal, te ofrecen aventuras emocionantes y gráficas de última generación.",
      img: "https://cosonyb2c.vtexassets.com/arquivos/ids/358600-1600-auto?v=638460886356630000&width=1600&height=auto&aspect=true",
      price: "$ 2.498.950",
      stock: 25,
      category: "PlayStation",
  }, {
      id: 3,
      title: "XBOX SERIES S",
      detail: "La Xbox Series S es una consola de videojuegos digital, pequeña y potente. Diseñada para ofrecer una experiencia de juego de última generación a un precio más accesible, la Series S destaca por su velocidad, gracias a su SSD de alta velocidad, y su amplia retrocompatibilidad con juegos de Xbox One, Xbox 360 y Xbox original. Aunque no cuenta con lector de discos, ofrece una biblioteca de juegos digitales a través de la tienda de Xbox.",
      img: "https://assets.xboxservices.com/assets/97/d3/97d3bf27-1a7d-4db6-85bc-929f2badf14e.png?n=389964_Buy-Box-0_857x676_01.png",
      price: "$ 2.299.900",
      stock: 25,
      category: "XBOX",
  }, {
      id: 4,
      title: "XBOX SERIES X",
      detail: "La Xbox Series X es la consola más potente de Microsoft. Ofrece una experiencia de juego de última generación con gráficos 4K de alta resolución, tiempos de carga ultrarrápidos gracias a su SSD y compatibilidad con miles de juegos de Xbox anteriores. Es ideal para quienes buscan lo mejor en rendimiento y quieren sumergirse en mundos virtuales con un nivel de detalle asombroso.",
      img: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
      price: "$ 3.499.999",
      stock: 25,
      category: "XBOX",
  }, {
      id: 5,
      title: "Marvel's Spider-Man 2",
      detail: "Los Spider-Men Peter Parker y Miles Morales regresan para una nueva y emocionante aventura de la aclamada franquicia Marvel's Spider-Man para PS5.",
      img: "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5?resize=1&w=480&h=270&quality=medium",
      price: "$ 69.99",
      stock: 25,
      category: "Juegos"
  }, {
      id: 6,
      title: "God of War Ragnarök",
      detail: "Embárcate en un épico y cordial viaje mientras Kratos y Atreus luchan por aferrarse y soltar",
      img: "https://i.blogs.es/896404/god-of-war-ragnarok/1366_2000.jpeg",
      price: "$ 69.99",
      stock: 25,
      category: "Juegos"
  }, {
      id: 7,
      title: "Gran Turismo 7",
      detail: "Gran Turismo 7 combina las mejores funciones del simulador de conducción real. Si eres piloto competitivo o casual, coleccionista, aficionado a las modificaciones, diseñador de apariencias o fotógrafo, encuentra tu camino con una colección impresionante de modos de juego, incluidos los favoritos de los fanáticos, como Campaña de GT, Arcade y Escuela de manejo.",
      img: "https://phantom-marca.unidadeditorial.es/c222d9def5df356e4fb6771adc6321f0/resize/1200/f/webp/assets/multimedia/imagenes/2024/03/27/17115561896248.jpg",
      price: "$ 69.99",
      stock: 25,
      category: "Juegos"
  }, {
      id: 8,
      title: "Call of Duty: Black Ops 6",
      detail: "Esta es una campaña cinematográfica de un solo jugador emblemática de Black Ops, una experiencia multijugador de primera calidad y el regreso épico de zombis en ronda.",
      img: "https://store-images.s-microsoft.com/image/apps.10491.13971870865497245.c2434eda-3849-46f0-86f5-08277c1abf9d.f1d04bed-70e1-4dfc-8b57-e808b2f27aa5",
      price: "$ 269.999",
      stock: 25,
      category: "Juegos"
  }, {
      id: 9,
      title: "Destiny 2",
      detail: "Sumérgete en el mundo de Destiny 2 para explorar los misterios del sistema solar y vivir sus dinámicos combates de disparos en primera persona. Desbloquea poderosas habilidades elementales y obtén equipamiento único para personalizar tu apariencia y tu estilo de juego. Disfruta la historia cinemática de Destiny 2, desafiantes misiones cooperativas y varios modos PvP en solitario o con amigos. Descárgalo gratis hoy y escribe tu historia en las estrellas.",
      img: "https://store-images.s-microsoft.com/image/apps.30303.68655995542193491.618ba70a-85c2-47a4-944e-7a9b39528ca8.c3eb629f-7dac-460f-adc2-ba0f395b6c66?q=90&w=177&h=265",
      precio: "$ 199.900",
      stock: 25,
      categoría: "Juegos"
  }, {
      id: 10,
      title: "EA SPORTS FC™ 25 para Xbox Series X|S",
      detail: "Con EA SPORTS FC™ 25, tienes más formas de ganar por el club. Forma equipo en Rush 5 vs. 5, una nueva forma de jugar con amistades en Football Ultimate Team™, Clubes y Patada Inicial con un juego reducido. En Rush de Football Ultimate Team, podrás crear la plantilla de tus sueños con hasta tres amistades, cada cual con su item de futbolista favorito.",
      img: "https://store-images.s-microsoft.com/image/apps.10380.13738418562228928.2f1b7c14-3e99-4a31-8375-ffc682a65cb0.20227b42-8b9c-4fe1-8f41-836fe3184ce7?q=90&w=177&h=265",
      price: "$ 279.999",
      stock: 25,
      category: "Juegos"
  }
]

const input = document.querySelector("#input");
const searchButton = document.querySelector("#searchProduct");
const resetButton = document.querySelector("#resetProducts");
const allButton = document.querySelector("#all");
const categoryButtons = document.querySelectorAll(".categoryButton");

let section = document.querySelector("section");
let arrayCards = data.map((product) => `<div class="card">
          <img src="${product.img}" class="card-img-top" alt="logoPrincipal ${product.title}">
          <div class="card-body">
          <h4 class="card-title">${product.title}</h4>  
          <p class="card-text">${product.detail}</p>
          <h5>${product.price}</h5>
          <p>Stock disponible: ${product.stock}
          <a href="producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>  </div>
        </div>`)
section.innerHTML = arrayCards.join("");

const filterCards = () => {
  const filterData = data.filter(
    (product) => product.title.toLowerCase() === input.value.toLowerCase());

    if (filterData.length === 1) {
      arrayCards = filterData.map((filter) => `<div class="card">
          <img src="${filter.img}" class="card-img-top" alt="logoPrincipal ${filter.title}">
          <div class="card-body">
          <h4 class="card-title">${filter.title}</h4>  
          <p class="card-text">${filter.detail}</p>
          <h5>${filter.price}</h5>
          <p>Stock disponible: ${filter.stock}
          <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>  </div>
        </div>`);
        /* document.querySelector("section").innerHTML = etiquetas;
        console.log(filtered) */
        section.innerHTML = arrayCards.join("");
    } else {
      section.innerHTML = `No encontramos el producto: ${input.value}. Porfavor ingresa un nombre de producto valido`;
    }
    
}

const resetInput = () => {
  input.value = "";
  let arrayCards = data.map((product) => `<div class="card">
  <img src="${product.img}" class="card-img-top" alt="logoPrincipal ${product.title}">
  <div class="card-body">
  <h4 class="card-title">${product.title}</h4>  
  <p class="card-text">${product.detail}</p>
  <h5>${product.price}</h5>
  <p>Stock disponible: ${product.stock}
  <a href="producto.html?prod=${product.id}" class="btn btn-primary">Ver más</a>  </div>
</div>`)
section.innerHTML = arrayCards.join("");
}

const filterCategory = (category) => {
  const filterData = data.filter(
    (product) => product.category === category
  )
  arrayCards = filterData.map(
    (filter) => 
      `<div class="card">
          <img src="${filter.img}" class="card-img-top" alt="logoPrincipal ${filter.title}">
          <div class="card-body">
          <h4 class="card-title">${filter.title}</h4>  
          <p class="card-text">${filter.detail}</p>
          <h5>${filter.price}</h5>
          <p>Stock disponible: ${filter.stock}
          <a href="producto.html?prod=${filter.id}" class="btn btn-primary">Ver más</a>  </div>
        </div>`
  )
  section.innerHTML = arrayCards.join("");
}

searchButton.addEventListener("click", filterCards);
resetButton.addEventListener("click", resetInput);
allButton.addEventListener("click", resetInput)

for (let i in categoryButtons){
  categoryButtons[i].addEventListener("click", (event) => {
    const category = event.target.getAttribute("value");
    filterCategory(category);
  })
}

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