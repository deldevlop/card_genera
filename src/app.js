/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cards = ["heart", "club", "diamond", "spade"];
let colors = ["red", "black"];

function getRandomInt() {
  let randomNumber = Math.random() * 10;
  return Math.floor(randomNumber) + 2;
}

function getRandomColor(color) {
  let randomColor = Math.floor(Math.random() * color.length);
}

function getRandomCard(cards) {
  let randomCardIndex = Math.floor(Math.random() * cards.length);
  let choice = cards[randomCardIndex];
  console.log(choice);

  /*switch (choice) {
    case "heart":
      document.querySelectorAll("#heart").forEach(function(element) {
        element.style.color = "red";
      });
      break;
    default:
      break;
  }*/
}

getRandomCard(cards);

const buttonExcuse = document.getElementById("excuseButton");

buttonExcuse.addEventListener("click", function() {
  location.reload();
});

window.onload = () => {
  document.getElementById("number").innerHTML = getRandomInt();
};
