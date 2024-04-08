/* eslint-disable */
import "bootstrap";
import "./style.css";
let cards = ["heart", "club", "diamond", "spade"];

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

function setColorBlack() {
  let numberElement = document.getElementById("number");
  document.querySelectorAll("#elementCard").forEach(function(element) {
    element.style.color = "black";
  });
  numberElement.style.color = "black";
}

function setColorRed() {
  let numberElement = document.getElementById("number");
  document.querySelectorAll("#elementCard").forEach(function(element) {
    element.style.color = "red";
  });
  numberElement.style.color = "red";
}

function getRandomCard(cards) {
  let randomCardIndex = Math.floor(Math.random() * cards.length);
  let choice = cards[randomCardIndex];

  switch (choice) {
    case "heart":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-heart-fill";
        setColorRed();
      });
      break;
    case "club":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-club-fill";
        setColorBlack();
      });
      break;
    case "diamond":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-diamond-fill";
        setColorRed();
      });
      break;
    case "spade":
      console.log(choice);
      document.querySelectorAll("#elementCard").forEach(function(element) {
        element.className = "bi bi-suit-spade-fill";
        setColorBlack();
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
