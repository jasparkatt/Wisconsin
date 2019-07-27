var mymap;
var lyrRelief; //style layer from mapbox
var lyrCreek; //style layer from mapbox
var lyrSpotX; //geojson point data
var lyrLabels; //style layer from mapbox
var mrkCurrentLocation; //locate user

//get public access token
L.mapbox.accessToken = 'pk.eyJ1IjoiYnVkc3V0dHJlZSIsImEiOiJjanh6Y3R1dWYwMW82M2Nya3BiajFjYXRsIn0.KfnC6zslYrBhd4L0flo-WA';
//create map and overlays
$(document).ready(function() {
    mymap = L.mapbox.map('map').setView([44.41, -89.00], 7.5).addLayer(L.mapbox.styleLayer('mapbox://styles/budsuttree/cjxzb1lq71k3y1cob7ha24xw1'));

})