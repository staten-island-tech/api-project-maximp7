import "../styles/style.css";

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


         data.cards.forEach((element)=> document.querySelector(".card-container").insertAdjacentHTML(    "beforeend",
         `<div class="cards">
           <div class="card-image">
             <img class="pic" src="${element.image}">
           </div>
           <div class="card-content">
             <h3>${element.value}</h3>
             <p>${element.suit}</p>
           </div>
       </div>`)
       
       )})
       .catch((error) => console.log(error));
   }
Displaying();
