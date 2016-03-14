polygons = [];


function createPolygons (civilizations) {
    console.log('civilizations:',civilizations)
    $(civilizations).each(createPolygon)
}

function createPolygon (index, civilizationArea) {
    var shape = new google.maps.Polygon({
        paths: civilizationArea.coordinates,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    })

    shape.data = civilizationArea
    shape.setMap(globalMap);
    shape.setVisible(false);
    polygons.push(shape)
}    

function setAllShapesVisible () {
    $(polygons).each(function(index,polygon){
        polygon.setVisible(true);
    })
}

function showPolygon (polygon) {
    polygon.setVisible(true);
}