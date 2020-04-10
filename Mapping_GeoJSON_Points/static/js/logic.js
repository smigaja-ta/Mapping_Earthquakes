console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: "mapbox.pirates",
	accessToken: API_KEY
});

//Create the map
let map = L.map("mapid", {
  center: [41.7, -94.5],
  zoom: 4,
  layers: [streets]
});


//This data set is as part of Data Science for Good collection.  
//The data set consists of HDI, GDI, population, Education, Health related data.
 
d3.json("/static/json/countries").then(function(data) {

    //first we calculate the IQR and quartiles for detecting outliers
    let gdps = []
 
    data.features.forEach(feature => {
      gdps.push(feature.properties.gdp_md_est)
    });
    
    IQR = ss.interquartileRange(gdps);
    
    gdps.sort();
    
    let quarter = Math.floor(gdps.length/4);
    let q1 = gdps[quarter];
    let q3 = gdps[3*quarter];
 
  L.geoJson(data, {
 
    style: function(feature) {
    
      //set that style
      if(feature.properties.gdp_md_est >= q3 + 1.5*IQR){
        color="green"
      }
      else if(feature.properties.gdp_md_est >= q1){
        color="red"
      }
      else{
        color="blue"
      }

      return {
        "color": color,
      }
    }
 
  }).addTo(map);
 
});






