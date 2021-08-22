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

navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude: lat, longitude: lon } = position.coords;
    initCards({ lat, lon });
  },
  (err) => {
    sanFranciscoCoords = { lat: 37.7749, lon: -122.4194 };
    initCards(sanFranciscoCoords);
    console.log(err);
  }
);
