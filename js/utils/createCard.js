const iconURL = "http://openweathermap.org/img/wn";

const cardTemplate = ({ nameCity, weather, temp }) => {
  return `<div class="card-item">
    <div class="card-miniwrapper">
      <h2 class="card-city">${nameCity}</h2>
      <h3 class="card-temp">${temp}<span>°C</span></h3>  
    </div>
    <img class="card-icon" src="${iconURL}/${weather[0].icon}@2x.png" />
    <div class="card-miniwrapper">
      <p class="card-description">${weather[0].description}</p>
    </div>
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
