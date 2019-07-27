var mymap;
var lyrSatellite; //open street maps
var lyrRelief; //style layer from mapbox
var lyrCreek; //style layer from mapbox
var lyrSpotX; //geojson point data
var lyrLabels; //style layer from mapbox
var mrkCurrentLocation; //locate user
var ctlLayers;
var ctlBasemaps;
var ctlOverlays;

//get public access token
L.mapbox.accessToken = 'pk.eyJ1IjoiYnVkc3V0dHJlZSIsImEiOiJjanh6Y3R1dWYwMW82M2Nya3BiajFjYXRsIn0.KfnC6zslYrBhd4L0flo-WA';
//create map and overlays
$(document).ready(function() {
    mymap = L.map('map', {
        center:[44.41, -89.00],
        zoom:7.5,
        zoomControl:false,
        attributionControl:false
    });
    lyrRelief = L.mapbox.styleLayer('mapbox://styles/budsuttree/cjxxen8yq5twc1cqaapjf1my9');
    lyrCreek = L.mapbox.styleLayer('mapbox://styles/budsuttree/cjxw63sdr03gj1cmy6y89ul89');
    lyrLabels = L.mapbox.styleLayer('mapbox://styles/budsuttree/cjxzb1lq71k3y1cob7ha24xw1');
    lyrSatellite = L.mapbox.styleLayer('mapbox://styles/mapbox/satellite-v9');
    lyrSpotX = L.mapbox.featureLayer().loadURL('')
    mymap.addLayer(lyrLabels);
    
    objBasemaps = {
        "Hillshade":lyrRelief,
        "Satellite":lyrSatellite
    }
})