/* eslint-disable */
import "bootstrap";
import "./style.css";
let cards = ["heart", "club", "diamond", "spade"];
//let colors = ["red", "black"];

function getRandomInt() {
  let randomNumber = Math.floor(Math.random() * 14) + 1;
  switch (randomNumber) {
    case 1:
      return "A";
      break;
    case 11:
      return "J";
      break;
    case 12:
      return "Q";
      break;
    case 13:
      return "K";
      break;
    case 14:
      return "A";
      break;
    default:
      return randomNumber;
  }
}

function getRandomColor(colors) {
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  let colorChoice = colors[randomColorIndex];
  let numberElement = document.getElementById("number");
  switch (colorChoice) {
    case "red":
      console.log(colorChoice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.style.color = "red";
      });
      numberElement.style.color = "red";
      break;
    case "black":
      console.log(colorChoice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.style.color = "black";
      });
      numberElement.style.color = "black";
      break;
    default:
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.style.color = "black";
      });
      numberElement.style.color = "black";
  }
}

function getRandomCard(cards) {
  let randomCardIndex = Math.floor(Math.random() * cards.length);
  let choice = cards[randomCardIndex];

  switch (choice) {
    case "heart":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-heart-fill";
        getRandomColor(colors);
      });
      break;
    case "club":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-club-fill";
        getRandomColor(colors);
      });
      break;
    case "diamond":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-diamond-fill";
        getRandomColor(colors);
      });
      break;
    case "spade":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-spade-fill";
        getRandomColor(colors);
      });
      break;
    default:
      break;
  }
}

const buttonExcuse = document.getElementById("excuseButton");

buttonExcuse.addEventListener("click", function() {
  location.reload();
});

window.onload = () => {
  document.getElementById("number").innerHTML = getRandomInt();
  getRandomCard(cards);
};
