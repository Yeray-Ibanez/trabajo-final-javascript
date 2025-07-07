// 40.391380/-3.707172

//Creación del mapa
var mapa = L.map('mapa').setView([40.391380, -3.707172],18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

//Creación de la marca

L.marker([40.391380, -3.707172]).addTo(mapa)
    .bindPopup('NovaTech Solutions <br> Calle de Mariblanca 28, Madrid, España <br>  +34 912 345 6780')
    .openPopup();

var options = {
enableHighAccuracy: true,
timeout: 30000,
maximumAge: 0
}

// Habilitar geolocalización
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
} else {
    alert("Los servicios de geolocalización no están disponibles");
}

//función en caso de exito
function success(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    
    // Añadir marcador del usuario
    L.marker([lat, lon]).addTo(mapa)
        .bindPopup('Tu ubicación actual')
        .openPopup();

    // Centrar mapa en la ubicación del usuario
    mapa.setView([lat, lon], 6);

    let ruta = L.Routing.control({
        waypoints:[
            L.latLng(lat, lon),
            L.latLng(40.391380, -3.707172)
        ],
        language: 'es'
    }).addTo(mapa)
}


// Función en caso de error
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}