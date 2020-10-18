//for map
function initMap() {
  // The location of Seattle
  const seattle = { lat: 47.6062, lng: 122.3321 };
  // The map, centered at Seattle
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: seattle,
  });
}