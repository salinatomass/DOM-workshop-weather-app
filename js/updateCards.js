const baseAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKEY = "6a1ddb216b2f48966cd789b4bdc81cbf";
const iconURL = "http://openweathermap.org/img/wn";

const $cards = document.getElementById("cards");

const getData = async (citiesName = []) => {
  try {
    const weatherOfCities = [];

    for (let i = 0; i < citiesName.length; i++) {
      const response = await fetch(
        `${baseAPI}?q=${citiesName[i]}&appid=${apiKEY}&units=metric`
      );
      const responseInJSON = await response.json();

      if (responseInJSON.cod === "404") alert("Ciudad no encontrada");

      weatherOfCities.push(responseInJSON);
    }

    return weatherOfCities;
  } catch (err) {
    console.log(err);
  }
};

const cardTemplate = ({ nameCity, weather, temp }) => {
  return `<div>
    <h1>${nameCity}</h1>
    <p>${temp}<span>°C</span></p>
    <img src="${iconURL}/${weather[0].icon}@2x.png" />
    <p>${weather[0].description}</p>
  </div>`;
};

const createContent = (data) => {
  const {
    name,
    weather,
    main: { temp },
  } = data;

  const parameters = {
    nameCity: name,
    weather,
    temp: Math.floor(temp),
  };

  const container = document.createElement("div");
  container.className = "card";
  container.innerHTML = cardTemplate(parameters);

  return container;
};

export const updateCards = async (cityName = "") => {
  const data = await getData([cityName]);

  const newCard = createContent(...data);

  const oldCards = $cards.querySelectorAll("div.card");

  oldCards[1].remove();
  oldCards[0].insertAdjacentElement("beforebegin", newCard);
};

export const initCards = async (firstCityName, secondCityName) => {
  const data = await getData([firstCityName, secondCityName]);

  $cards.append(createContent(data[0]), createContent(data[1]));
};
