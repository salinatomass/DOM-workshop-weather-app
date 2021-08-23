const baseAPI = "https://api.openweathermap.org/data/2.5";
const apiKEY = "6a1ddb216b2f48966cd789b4bdc81cbf";
// see https://openweathermap.org/current

export const getData = async (city = { cityName, lat, lon }) => {
  try {
    if (city.cityName) {
      const response = await fetch(
        `${baseAPI}/weather?q=${city.cityName}&appid=${apiKEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404")
        swal({
          title: "Uuups!!",
          text: "City not found",
          icon: "error",
        });

      return data;
    } else {
      const response = await fetch(
        `${baseAPI}/find?lat=${city.lat}&lon=${city.lon}&cnt=2&appid=${apiKEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404")
        swal({
          title: "Uuups!!",
          text: "City not found",
          icon: "error",
        });

      return data;
    }
  } catch (err) {
    swal({
      title: "Uuups!!",
      text: "Something went wrong",
      icon: "error",
    });
    console.log(err);
  }
};
