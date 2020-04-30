
function initMap() {
    var uluru = { lat: 44.806604, lng: 20.476165 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 17, center: uluru });
    var marker = new google.maps.Marker({ position: uluru, map: map });
}