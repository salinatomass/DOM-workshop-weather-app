import { updateCards, initCards, defaultCoord } from "./updateCards.js";

const $searchButton = document.getElementById("search");
const $submitButton = document.getElementById("submit");

let desiredCity;

const onSuccessGeolocation = (position) => {
  const { latitude, longitude } = position.coords;
  initCards({ lat: latitude, lon: longitude });
};

const onErrorGeolocation = (err) => {
  initCards(defaultCoord);

  console.log("Geolocation error: ", err);
};

navigator.geolocation.getCurrentPosition(
  onSuccessGeolocation,
  onErrorGeolocation
);

$submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if ($searchButton.value) {
    desiredCity = $searchButton.value;
    $searchButton.value = "";
    updateCards(desiredCity);
  }
});
