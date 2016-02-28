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
        scope: 'comm.couleur',
        element: document.getElementById('container1'),
        geographyConfig: {
          //dataUrl: 'http://api.thenmap.net/v1/world/geo/'+year+'?geo_type=topojson',
            dataUrl: 'http://joelgombin.fr/cartes/comm.couleur.json',
          hideAntarctica: true
        },
        //setProjection: function(element, options) {
        //    var projection, path;
        //    projection = d3.geo.mercator().center([0,0])
        //        .scale(element.offsetWidth)
        //        .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
        //    path = d3.geo.path().projection(projection);
        //
        //    return ({path: path, projection: projection})
        //},
        fills: {
            defaultFill: '#f0af0a',
            lt50: 'rgba(0,244,244,0.9)',
            gt50: 'red'
        },

        height: 500,

        data: {
            USA: {fillKey: 'lt50' },
            RUS: {fillKey: 'lt50' },
            CAN: {fillKey: 'lt50' },
            BRA: {fillKey: 'gt50' },
            ARG: {fillKey: 'gt50'},
            COL: {fillKey: 'gt50' },
            AUS: {fillKey: 'gt50' },
            ZAF: {fillKey: 'gt50' },
            MAD: {fillKey: 'gt50' }
        }
    })

    return map;
}