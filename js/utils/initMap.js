import { defaultCoord } from "../updateCards.js";

export const initMap = (lat = defaultCoord.lat, lng = defaultCoord.lon) => {
  const coord = { lat, lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });
  const marker = new google.maps.Marker({
    position: coord,
    map: map,
  });
};
