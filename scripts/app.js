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
L.mapbox.accessToken = 'blbajhalhghe';
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
    lyrSpotX = L.mapbox.featureLayer().loadURL('https://raw.githubusercontent.com/jasparkatt/abv/grady-edits/src/data/SpotXX.geojson');
    
    function xTrout() {
        
    }

    $("#btnLocate").click(function() {
        mymap.locate();
    });
    $("btnTrout").click()


    mymap.addLayer(lyrLabels);    
    
    objBasemaps = {
        "Hillshade":lyrRelief,
        "Satellite":lyrSatellite,
        "Labels":lyrLabels
        // "Trout Streams":lyrCreek
    };

    objOverlays = {
        "Trout Streams":lyrCreek,
        "Spot X":lyrSpotX
    };
    
    ctlLayers = L.control.layers(objBasemaps, objOverlays).addTo(mymap);

    mymap.on('locationfound', function(e) {
        console.log(e);
        if (mrkCurrentLocation) {
            mrkCurrentLocation.remove();
        }
        mrkCurrentLocation = L.circle(e.latlng, {radius:e.accuracy/2}).addTo(mymap);
        mymap.setView(e.latlng, 14);
    });

    mymap.on('locationerror', function(e) {
        console.log(e);
        alert("Location was not found");
    });
   
})
