import "/style.css";

const URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Heartsb: document.querySelector("#Hearts"),
  Spadesb: document.querySelector("#Spades"),
  Cloverb: document.querySelector("#Clubs"),
  Diamondsb: document.querySelector("#Diamonds"),
  cardcontainer: document.querySelector(".card-container"),
};

function displayCardsBySuit(suit) {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      DOMSelectors.cardcontainer.innerHTML = "";
      data.cards
        .filter((element) => suit ? element.suit === suit : true)
        .forEach((element) => {
          DOMSelectors.cardcontainer.insertAdjacentHTML(
            "beforeend",
            `<div class="cards">
              <div class="card-image">
                <img class="pic" src="${element.image}" alt="${element.value} of ${element.suit}">
              </div>
              <div class="card-content">
                <h3>${element.value}</h3>
                <h2>${element.suit}</h2>
              </div>
            </div>`
          );
        });
    })
    .catch((error) => console.log(error));
}

function eraseAndDisplay(suit) {
  DOMSelectors.cardcontainer.innerHTML = "";
  displayCardsBySuit(suit);
}

DOMSelectors.allb.addEventListener("click", () => eraseAndDisplay());
DOMSelectors.Heartsb.addEventListener("click", () => eraseAndDisplay("HEARTS"));
DOMSelectors.Spadesb.addEventListener("click", () => eraseAndDisplay("SPADES"));
DOMSelectors.Cloverb.addEventListener("click", () => eraseAndDisplay("CLUBS"));
DOMSelectors.Diamondsb.addEventListener("click", () => eraseAndDisplay("DIAMONDS"));


/* function displayHearts() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.suit === "HEARTS")
        .forEach((element) =>
          document.querySelector(".card-container").insertAdjacentHTML(
            "beforeend",
            `<div class="cards">
    <div class="card-image">
      <img class="pic" src="${element.image}">
    </div>
    <div class="card-content">
      <h3>${element.value}</h3>
      <p>${element.suit}</p>
    </div>
</div>`
          )
        );
    });
}

function displaySpades() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.suit === "SPADES")
        .forEach((element) =>
          document.querySelector(".card-container").insertAdjacentHTML(
            "beforeend",
            `<div class="cards">
    <div class="card-image">
      <img class="pic" src="${element.image}">
    </div>
    <div class="card-content">
      <h3>${element.value}</h3>
      <p>${element.suit}</p>
    </div>
</div>`
          )
        );
    });
}

function displayClubs() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.suit === "CLUBS")
        .forEach((element) =>
          document.querySelector(".card-container").insertAdjacentHTML(
            "beforeend",
            `<div class="cards">
      <div class="card-image">
        <img class="pic" src="${element.image}">
      </div>
      <div class="card-content">
        <h3>${element.value}</h3>
        <p>${element.suit}</p>
      </div>
  </div>`
          )
        );
    });
}
function displayDiamonds() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.suit === "DIAMONDS")
        .forEach((element) =>
          document.querySelector(".card-container").insertAdjacentHTML(
            "beforeend",
            `<div class="cards">
      <div class="card-image">
        <img class="pic" src="${element.image}">
      </div>
      <div class="card-content">
        <h3>${element.value}</h3>
        <p>${element.suit}</p>
      </div>
  </div>`
          )
        );
    });
}

function erase() {
  DOMSelectors.cardcontainer.innerHTML = "";
}

function Allp() {
  erase();
  Displaying();
}

function Heartsp() {
  erase();
  displayHearts();
}

function Spadesp() {
  erase();
  displaySpades();
}
function Clubsp() {
  erase();
  displayClubs();
}
function Diamondsp() {
  erase();
  displayDiamonds();
}

DOMSelectors.allb.addEventListener("click", Allp);
DOMSelectors.Heartsb.addEventListener("click", Heartsp);
DOMSelectors.Spadesb.addEventListener("click", Spadesp);
DOMSelectors.Cloverb.addEventListener("click", Clubsp);
DOMSelectors.Diamondsb.addEventListener("click", Diamondsp);
 */