console.log("working");



let map = L.map("mapid", {
    center: [
      37.5, -122.5
    ],
    zoom: 10
  });




// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":
  [{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"
    },
    "geometry":{
        "type":"Point",
        "coordinates":[-122.375,37.61899948120117]
    }
  }]
};

// Create a polyline using the line coordinates and make the line black.
// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

/* L.geoJson(sanFranAirport, {
  pointToLayer: function(feature, latlng) {
    console.log(feature)
    return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.city + "</h2>");
   }
}).addTo(map); */

L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer)
    layer.bindPopup("Hey!");
  }
}).addTo(map);

//let mapStyle = "streets-v11";
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{mapStyle}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  mapStyle: "satellite-streets-v11",
	accessToken: API_KEY
});

streets.addTo(map);
// Loop through the cities array and create one marker for each city.
/* cities.forEach(function(city) {
  console.log(city);
  L.circleMarker(city.location,{
      radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " 
                + city.population.toLocaleString() + "</h3>" 
                + "<hr><h3>"+city.state+"</h3>")
    .addTo(map)
 }); */