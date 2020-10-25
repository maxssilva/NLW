const options= {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

//create map
const map = L.map('mapid',options/*options funciona como argumento do mapid*/).setView([-27.2119529,-49.6638543], 13);

//create and add title layer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);

// create icon
const icon = L.icon({
iconUrl: "./public/images/map-marker.svg",
iconSize: [58, 68],
iconAnchor:[29,68],
popupAnchor:[170,2]
})


//create and add marker
L
.marker([-27.2119529,-49.6638543], {icon})
.addTo(map)


  