const MAP = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`

$(window).scroll(() => {    
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("[data-navbar]").addClass("new-nav-color");
  };
  if (scroll == 0) {
    $("[data-navbar]").removeClass("new-nav-color");
  }
});

const getMap = () => {
  return $.get(MAP);
}

function initMap() {
  // The location of salon
  var salon = {lat: 33.853874, lng: -84.214363};
  // The map, centered at salon
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: salon});
  // The marker, positioned at salon
  var marker = new google.maps.Marker({position: salon, map: map});
}

// const drawMap = () => {
//   getMap()
//     .then(initMap)
// }

// drawMap();
initMap();