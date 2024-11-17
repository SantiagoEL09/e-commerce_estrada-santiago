const cardSection = document.querySelector("#cart #cards")

function getCart(cards) {
    const arrayCards = cards.map( card => `
      <div class="card border shadow-none">
        <div class="card-body">
            <div class="d-flex align-items-start border-bottom pb-3">
                <div class="me-4">
                    <img
                        src="${card.product.img}"
                        class="card-img-top"
                        alt="logoPrincipal ${card.product.title}"/>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                    <h5 class="text-truncate font-size-18">${card.product.title}</h5>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Precio</p>
                                <h5 class="mb-0 mt-2"> USD $${card.product.price}</h5>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Cantidad</p>
                                <h5 class="mb-0 mt-2">${card.quantity}</h5>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mt-3">
                                <p class="text-muted mb-2">Total</p>
                                <h5>USD $${card.product.price * card.quantity}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>`)
     cardSection.innerHTML = arrayCards.join("");
}getCart(JSON.parse(localStorage.getItem("cart")))


function total(cards) {
    let cartTotal = document.querySelector("#cartTotal")

    let total = cards.length > 0 ? cards.reduce((acumulado, actual) => 
        acumulado + actual.product.price * actual.quantity, 0) : 0
        cartTotal.innerText = "USD $" + total
} total(JSON.parse(localStorage.getItem("cart")))