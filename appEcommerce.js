document.querySelector("h2").innerText = "Productos destacados";

let array_cards = [];

for (let i = 1; i < 10; i++) {

    const card = `
        <div class="card">
        <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="logoPrincipal ${i}" >
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    `;

    array_cards.push(card);
}

document.querySelector("section").innerHTML = (array_cards);

