// Data Target
const jumbo = $('[data-jumbo]')

//Function to be passed as argument
const newSize = () => {
  if ($(window).width() > 550) {
    jumbo.removeClass('display-4');
    jumbo.addClass('display-1');
  }
  else {
    jumbo.addClass('display-4')
    jumbo.removeClass('display-1')
  }
}

// Changes Header size of JumboTron on window resize
$(window).resize(newSize);

// Determines Header size of Jumbotron based on window size on load
$(document).ready(newSize);

// Navbar Change on Scroll
$(window).scroll(() => {    
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("[data-navbar]").addClass("new-nav-color");
  };
  if (scroll == 0) {
    $("[data-navbar]").removeClass("new-nav-color");
  }
});

// Renders Google Map
function initMap() {
  // The location of salon
  var salon = {lat: 33.853874, lng: -84.214363};
  // The map, centered at salon
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: salon});
  // The marker, positioned at salon
  var marker = new google.maps.Marker({position: salon, map: map});
}

initMap();