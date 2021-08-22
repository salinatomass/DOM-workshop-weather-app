export const initMap = (lat = 37.7749, lng = -122.4194) => {
  let coord = { lat, lng };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  let marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
};
