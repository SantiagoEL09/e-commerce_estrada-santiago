// Seleccionamos el elemento h2 y cambiamos su texto a "Productos destacados"
document.querySelector("h2").innerText = "Productos destacados";

function cards() {

  document.querySelector("h2").innerText = "Productos destacados";

  let array_cards = [];
// Iteramos 10 veces para crear 10 tarjetas (i = 1 a 9)
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
  }
// Creamos un array vacío para almacenar las tarjetas

// Seleccionamos el elemento section y establecemos su contenido HTML con las
// tarjetas del array
  document.querySelector("section").innerHTML = (array_cards);
} 
cards();


