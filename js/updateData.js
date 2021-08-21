const baseAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKEY = "6a1ddb216b2f48966cd789b4bdc81cbf";
const iconURL = "http://openweathermap.org/img/wn";

const $cards = document.getElementById("cards");

const createContent = (data) => {
  const {
    name,
    weather,
    main: { temp },
  } = data;

  const city = document.createElement("h1");
  city.textContent = name;
  const degrees = document.createElement("p");
  degrees.textContent = `${Math.floor(temp)}ºC`;
  const weatherConditionIcon = document.createElement("img");
  weatherConditionIcon.src = `${iconURL}/${weather[0].icon}@2x.png`;
  const weatherConditionDesc = document.createElement("p");
  weatherConditionDesc.textContent = weather[0].description;

  $cards.append(city, degrees, weatherConditionIcon, weatherConditionDesc);
};

export const updateData = async (cityName = "London") => {
  try {
    const response = await fetch(
      `${baseAPI}?q=${cityName}&appid=${apiKEY}&units=metric`
    );
    const data = await response.json();

    if (data.cod === "404") {
      return alert("Ciudad no encontrada");
    }

    createContent(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
