const baseAPI = "https://api.openweathermap.org/data/2.5/weather";
const apiKEY = "6a1ddb216b2f48966cd789b4bdc81cbf";
// see https://openweathermap.org/current

export const getData = async (citiesName = []) => {
  try {
    const weatherOfCities = [];

    for (let i = 0; i < citiesName.length; i++) {
      const response = await fetch(
        `${baseAPI}?q=${citiesName[i]}&appid=${apiKEY}&units=metric`
      );
      const responseInJSON = await response.json();

      if (responseInJSON.cod === "404")
        swal({
          title: "Uuups!!",
          text: "City not found",
          icon: "error",
        });

      weatherOfCities.push(responseInJSON);
    }

    return weatherOfCities;
  } catch (err) {
    swal({
      title: "Uuups!!",
      text: "Something went wrong",
      icon: "error",
    });
    console.log(err);
  }
};
