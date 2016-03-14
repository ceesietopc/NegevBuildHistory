var polys = [];

function mapperFunc(obj) {
    return {
        'lat': obj['Latitude'],
        'lng': obj['Longitude']
    }
}

function pullSpreadSheetData(url, callback)  {
    $.getJSON(url, function(data) {
        var entry = data.feed.entry;

        $(entry).each(function(){
            polys.push({
               'startYear': this.gsx$startyear.$t,
                'endYear': this.gsx$endyear.$t,
                'coordinates': JSON.parse(this.gsx$coordinates.$t).map(mapperFunc),
                'info': this.gsx$info.$t,
                'civilization': this.gsx$civilization.$t
            });
        });

        callback(polys);
    });

}
