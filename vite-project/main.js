import "/style.css";

const URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Heartsb: document.querySelector("#Hearts"),
  Spadesb: document.querySelector("#Spades"),
  Cloverb: document.querySelector("#Clubs"),
  Diamondb: document.querySelector("#Diamonds"),
  Royalsb: document.querySelector("#Royals"),
  cardcontainer: document.querySelector(".card-container"),
};

function Displaying() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.cards.forEach((element) =>
        document.querySelector(".card-container").insertAdjacentHTML(
          "beforeend",
          `<div class="cards">
           <div class="card-image">
             <img class="pic" src="${element.image}" alt="${element.value} of ${element.suit}">
           </div>
           <div class="card-content">
             <h3>${element.value}</h3>
             <p>${element.suit}</p>
           </div>
       </div>`
        )
      );
    })
    .catch((error) => console.log(error));
}
Displaying();

function displayHearts() {
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

function displayK() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.value.includes("K"))
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

function displayE() {
  fetch(URL)
    .then((response) => response.json())
    .then((datah) => {
      datah.cards
        .filter((element) => element.value.includes("E"))
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
function Diamondp() {
  erase();
  displayDiamonds();
}
function Royalsp() {
  erase();
  displayK();
  displayE();
}

DOMSelectors.allb.addEventListener("click", Allp);
DOMSelectors.Heartsb.addEventListener("click", Heartsp);
DOMSelectors.Spadesb.addEventListener("click", Spadesp);
DOMSelectors.Cloverb.addEventListener("click", Clubsp);
DOMSelectors.Diamondb.addEventListener("click", Diamondp);
DOMSelectors.Royalsb.addEventListener("click", Royalsp);
