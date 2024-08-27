// Map Leaflet;


function init() {

var map = L.map('mapid').setView([48.3881, -4.4908], 15);
var marker = L.marker([48.3881, -4.4908]).addTo(map);
marker.bindPopup("<b>O'Coffee</b><br>Hauts-de-Cloques<br>02.98.01.02.04").openPopup();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

document.addEventListener('DOMContentLoaded', (event) => {
    init();
});

  