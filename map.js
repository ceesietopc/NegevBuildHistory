/**
 * Created by Cees on 23-02-16.
 */
//basic map config with custom fills, mercator projection
$(document).ready(function(){
    // Initialize map
    var map = updateMap()

    // Pull data
    var url = "https://en.wikipedia.org/w/api.php?action=query&prop=info|coordinates&titles=Assassination_of_John_F._Kennedy&format=json&callback=jsonCallback"

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            $(json.query.pages).each(function(){

                lati = this[Object.keys(json.query.pages)[0]].coordinates[0].lat;
                longi = this[Object.keys(json.query.pages)[0]].coordinates[0].lon;
                console.log(lati)


                //map.bubbles([
                //    {name: 'Switzerland!', latitude: lati, longitude: longi, radius: 20, fillKey: 'gt50'},
                //
                //], {
                //    popupTemplate: function(geo, data) {
                //        return "<div class='hoverinfo'>It is " + data.name + "</div>";
                //    }
                //})
            });
        },
        error: function(e) {
            console.log(e.message);
        }
    });

});

function updateMap(year) {

    year = typeof year !== 'undefined' ? year : 1950;

    var map = new Datamap({
        scope: 'geo',
        element: document.getElementById('map'),
        geographyConfig: {
          dataUrl: 'http://api.thenmap.net/v1/world/geo/'+year+'?geo_type=topojson',
          //  dataUrl: 'http://joelgombin.fr/cartes/comm.couleur.json',
          hideAntarctica: true
        },
        //setProjection: function(element, options) {
        //    var width = options.width || element.offsetWidth;
        //    var height = options.height || element.offsetHeight;
        //
        //    var projection, path;
        //    projection = d3.geo[options.projection]()
        //    .scale((width + 1) / 2)
        //    .translate([width / 2, height / (options.projection === "mercator" ? 1.45 : 1.8)]);
        //    path = d3.geo.path().projection(projection);
        //
        //    return ({path: path, projection: projection})
        //},
        height: 500,
        width: 500,
    });

    return map;
}