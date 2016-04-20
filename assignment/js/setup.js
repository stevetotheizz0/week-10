var map = L.map('map', {
  center: [40.72463,	-73.96698],
  zoom: 13,
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// The viz.json output by publishing on cartodb
var layerUrl = 'https://stephenjskilton.cartodb.com/api/v2/viz/c948b850-ef27-11e5-a54c-0e5db1731f59/viz.json';

cartodb.createLayer(map, layerUrl).addTo(map).on('done', function(layer){
    //I'm just messing around here with the getSubLayer and setSQL calls
    testLayer = layer.getSubLayer(1);
    testLayer.setSQL( "SELECT * FROM nyc_flickr_photos_merge WHERE date >= '1900-01-01 00:00:00' and date < '2000-12-31 00:00:00' ");

});
