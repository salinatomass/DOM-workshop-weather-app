const baseAPI = "https://api.openweathermap.org/data/2.5";
const apiKEY = "6a1ddb216b2f48966cd789b4bdc81cbf";
// see https://openweathermap.org/current

export const getData = async (citiesName = [{ cityName: "", lat, lon }]) => {
  // console.log(citiesName[0].cityName);
  try {
    const weatherOfCities = [];

    for (let i = 0; i < citiesName.length; i++) {
      if (citiesName[i].cityName) {
        const response = await fetch(
          `${baseAPI}/weather?q=${citiesName[i].cityName}&appid=${apiKEY}&units=metric`
        );
        const responseInJSON = await response.json();

        if (responseInJSON.cod === "404")
          swal({
            title: "Uuups!!",
            text: "City not found",
            icon: "error",
          });

        weatherOfCities.push(responseInJSON);
      } else {
        const response = await fetch(
          `${baseAPI}/find?lat=${citiesName[i].lat}&lon=${citiesName[i].lon}&cnt=2&appid=${apiKEY}&units=metric`
        );
        const responseInJSON = await response.json();

        if (responseInJSON.cod === "404")
          swal({
            title: "Uuups!!",
            text: "Something went wrong",
            icon: "error",
          });
        weatherOfCities.push(responseInJSON);
      }
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
