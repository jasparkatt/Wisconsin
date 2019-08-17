var map;
var lyrOMS;
var lyrImagery;
var lyrTopo;
var objBasemaps;
var objOverlays;
var ctlLayers;
var jsonTest;
var myIcon = L.icon({
    iconUrl: './style/',
    iconSize: [25, 25],
    className: 'fish-icons'
        /* iconAnchor: [22, 94],
        popupAnchor: [-3, -76] */
});
//create the map

$(document).ready(function() {
    map = L.map('map', {
        center: [44.41, -89.00],
        zoom: 7.5,
        zoomControl: false,
        attributionControl: false
    });

    //********** Initialize layers ************
    lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik');
    lyrTopo = L.tileLayer.provider('OpenTopoMap');
    lyrImagery = L.tileLayer.provider('Esri.WorldImagery');
    map.addLayer(lyrOSM);

    //********** Initialize layer control ************ 
    objBasemaps = {
        "Open Street Maps": lyrOSM,
        "Topo Map": lyrTopo,
        "Imagery": lyrImagery
    };

    objOverlays = {};

    ctlLayers = L.control.layers(objBasemaps, objOverlays).addTo(map);


    // i should be able to apply some sort of filter here to get the 4 different species...then return the proper icon.
  $.getJSON("https://raw.githubusercontent.com/jasparkatt/abv/grady-edits/POINT.json", function(data) {
        var fishPts = L.geoJson(data, {
            pointToLayer: function(feature, latlng) {
                return L.marker(latlng, {
                    icon: myIcon
                }).on('mouseover', function() {
                    this.bindPopup('<b>' + 'Fish: ' + '</b>' + feature.properties.Species + '<br>' + '<b>' + 'Stream Name: ' + '</b>' + feature.properties.Stream + ' <br>' + '<b>' + 'ID #: ' + '</b>' + feature.properties.OBJECTID + ' <br>' + '<b>' + 'County:' + '</b>' + feature.properties.County).openPopup();
                });
            }
        }).addTo(map);
    })

    // this ajax call is working now...had to explicity set dataType to "json".
    /* function popUp(f, l) {
        var out = [];
        if (f.properties) {
            for (key in f.properties) {
                out.push(key + ": " + f.properties[key]);
            }
            l.bindPopup(out.join("<br />"));
        }
    }

    jsonTest = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/jasparkatt/abv/grady-edits/POINT.json", { dataType: "json" }, { onEachFeature: popUp }).addTo(map);
 */

    // L.marker([44.5060106, -89.594339], { icon: myIcon, className: 'fish-icons' }).addTo(map);
})