/**
 * Created by Cees on 23-02-16.
 */
//basic map config with custom fills, mercator projection
$(document).ready(function(){
    // Initialize map
    var map = initMap()

    // Pull data
    var url = "https://en.wikipedia.org/w/api.php?action=query&prop=coordinates&titles=Switzerland&format=json&callback=jsonCallback"

    $.ajax({
        type: 'GET',
        url: url,
        async: false,
        jsonpCallback: 'jsonCallback',
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
            $(json.query.pages).each(function(){

                lati = this[26748].coordinates[0].lat;
                longi = this[26748].coordinates[0].lon;
                console.log(lati)


                map.bubbles([
                    {name: 'Switzerland!', latitude: lati, longitude: longi, radius: 20, fillKey: 'gt50'},

                ], {
                    popupTemplate: function(geo, data) {
                        return "<div class='hoverinfo'>It is " + data.name + "</div>";
                    }
                })
            });
        },
        error: function(e) {
            console.log(e.message);
        }
    });

});

function initMap() {
    var map = new Datamap({
        scope: 'world',
        element: document.getElementById('container1'),
        projection: 'mercator',
        height: 500,
        fills: {
            defaultFill: '#f0af0a',
            lt50: 'rgba(0,244,244,0.9)',
            gt50: 'red'
        },

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