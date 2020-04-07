console.log("working");



let map = L.map("mapid", {
    center: [
      36.1733, -120.1794
    ],
    zoom: 7
  });

//let mapStyle = "streets-v11";
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{mapStyle}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  mapStyle: "satellite-streets-v11",
	accessToken: API_KEY
});

streets.addTo(map);


// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "red",
  dashArray: "4 12 10",
  dashOffset: '0'
}).addTo(map);


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