import { getData } from "./utils/getData.js"; // returns a city or a list of cities
import { createCard } from "./utils/createCard.js"; // returns the template of a card
import { initMap } from "./utils/initMap.js";

const $cards = document.getElementById("cards");
const $mapCityName = document.getElementById("mapCityName");

export const defaultCoord = { lat: 37.7749, lon: -122.4194 }; // San Francisco coord

export const initCards = async ({ lat, lon }) => {
  const { list } = await getData({ lat, lon, cityName: undefined });

  const firstCard = createCard(list[0]);
  const secondCard = createCard(list[1]);
  $cards.append(firstCard, secondCard); // add the first and second card

  $mapCityName.textContent = list[0].name;
  initMap(lat, lon);
};

export const updateCards = async (cityName = "") => {
  const data = await getData({ cityName, lat: undefined, lon: undefined });

  const newCard = createCard(data);
  const oldCards = $cards.querySelectorAll("div.card");

  oldCards[1].remove(); // delete the last card
  oldCards[0].insertAdjacentElement("beforebegin", newCard); // add the newCard to the start

  $mapCityName.textContent = data.name;
  initMap(data.coord.lat, data.coord.lon);
};
