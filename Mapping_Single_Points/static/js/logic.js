console.log("working");


let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

//let mapStyle = "streets-v11";
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{mapStyle}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  mapStyle: "streets-v11",
	accessToken: API_KEY
});

streets.addTo(map);



L.circleMarker([34.0522, -118.2437], 
          { radius: 300,
            color: "black" }
        ).addTo(map);