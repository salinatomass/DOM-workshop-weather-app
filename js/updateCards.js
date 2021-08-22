import { getData } from "./utils/getData.js"; // returns [{weather info of a city}, {weather info from another city}]
import { createCard } from "./utils/createCard.js"; // returns the template of a card
import { initMap } from "./utils/initMap.js";

const $cards = document.getElementById("cards");
const $mapCityName = document.getElementById("mapCityName");

export const initCards = async ({ lat, lon }) => {
  const data = await getData([{ lat, lon }]);

  $cards.append(createCard(data[0].list[0]), createCard(data[0].list[1])); // add the first and second card
  $mapCityName.textContent = data[0].list[0].name;
  initMap(lat, lon);
};

export const updateCards = async (cityName = "") => {
  const data = await getData([{ cityName }]);

  const newCard = createCard(...data);
  const oldCards = $cards.querySelectorAll("div.card");

  oldCards[1].remove(); // delete the last card
  oldCards[0].insertAdjacentElement("beforebegin", newCard); // add the newCard to the start

  $mapCityName.textContent = data[0].name;
  initMap(data[0].coord.lat, data[0].coord.lon);
};
