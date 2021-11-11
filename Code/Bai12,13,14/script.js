function initMap() {
  const myHouse = {
    lat: 15.438433780056652,
    lng: 108.63794591839698,
  };
  new google.maps.Map(document.getElementById("map"), {
    mapId: "a9342363da6ea9dc",
    center: myHouse,
    zoom: 30,
    zoomControl: false,
    gestureHandling: "none",
  });
}
