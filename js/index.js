import { updateCards, initCards } from "./updateCards.js";

const $searchButton = document.getElementById("search");
const $submitButton = document.getElementById("submit");

let desiredCity = "";

$submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if ($searchButton.value) {
    desiredCity = $searchButton.value;
    $searchButton.value = "";
    updateCards(desiredCity);
  }
});

initCards("London", "Melbourne");
