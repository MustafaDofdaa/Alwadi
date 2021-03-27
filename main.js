// Initialize and add the map

function initMap() { 
// The location of Damanhour 
var cairo = {lat: 31.027995, lng: 30.481890};

// The map, centered at Damanhour 
var map = new google.maps.Map( 
document.querySelector(".map"), {zoom: 4, center: cairo}); 

// The marker, positioned at Damanhour 
var marker = new google.maps.Marker({position: cairo, map: map});
} 

// Smooth scrolling
$("#navbar a, .btn").on("click", function(event) { 
if(this.hash !== "") { 
event.preventDefault(); 
const hash = this.hash; 

$("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800); 
}
}); 

// navbar Opacity 
window.addEventListener("scroll", function() 
{ 
if(window.scrollY > 150) { 
document.querySelector("#navbar").style.opacity = 0.9; } else { document.querySelector("#navbar").style.opacity = 1; 
}
});
