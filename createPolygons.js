polygons = {}


function createPolygons (civilizations) {
    console.log('civilizations:',civilizations)
    $(civilizations).each(function(){

        var shp = new google.maps.Polygon({
            paths: this['loc'],
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        
        shp.setMap(map);
        polygons[this.id] = shp;
    });
}    
