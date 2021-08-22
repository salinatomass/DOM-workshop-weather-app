import { getData } from "./utils/getData.js"; // returns [{weather info of a city}, {weather info from another city}]
import { createCard } from "./utils/createCard.js"; // returns the template of a card

const $cards = document.getElementById("cards");

export const initCards = async ({ lat, lon }) => {
  const data = await getData([{ lat, lon }]);

  $cards.append(createCard(data[0].list[0]), createCard(data[0].list[1])); // add the first and second card
};

export const updateCards = async (cityName = "") => {
  const data = await getData([{ cityName }]);

  const newCard = createCard(...data);
  const oldCards = $cards.querySelectorAll("div.card");

  oldCards[1].remove(); // delete the last card
  oldCards[0].insertAdjacentElement("beforebegin", newCard); // add the newCard to the start
};
