const iconURL = "http://openweathermap.org/img/wn";

const cardTemplate = ({ nameCity, weather, temp }) => {
  return `<div>
    <h1>${nameCity}</h1>
    <p>${temp}<span>°C</span></p>
    <img src="${iconURL}/${weather[0].icon}@2x.png" />
    <p>${weather[0].description}</p>
  </div>`;
};

export const createCard = (data) => {
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

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = cardTemplate(parameters);

  return card;
};
