// var civilizationAreas = [
//     {
//         "civilizationName": 'Incan Empire',
//         "startYear": 1230,
//         "endYear": 1400,
//         "info": 'Incans could travel up to 8mph on llama back',
//         "pic": "http://www-tc.pbs.org/wgbh/nova/assets/img/lost-inca-empire/image-05-large.jpg",
//         "coordinates": [
//             {
//                 "lat":-12.726084,
//                 "lng":-72.756958
//             },
//             {
//                 "lat":-13.183794,
//                 "lng":-72.962952
//             },
//             {
//                 "lat":-13.427024,
//                 "lng":-72.210388
//             },
//             {
//                 "lat":-12.758232,
//                 "lng":-72.05658
//             } 
//         ]
//     },
//     {
//         "civilizationName": 'Incan Empire',
//         "startYear": 1493,
//         "endYear": 1525,
//         "info": 'Incans GREW STRONGER',
//         "pic": "http://www-tc.pbs.org/wgbh/nova/assets/img/lost-inca-empire/image-05-large.jpg",
//         "coordinates": [
//             {
//                 "lat":1.472006,
//                 "lng":-78.914795
//               },
//               {
//                 "lat":0.922812,
//                 "lng":-77.772217
//               },
//               {
//                 "lat":-1.164471,
//                 "lng":-77.980957
//               },
//               {
//                 "lat":-1.461023,
//                 "lng":-78.475342
//               },
//               {
//                 "lat":-0.175781,
//                 "lng":-80.683594
//               },
//               {
//                 "lat":1.63674,
//                 "lng":-80.024414
//               } 
//         ]
//     }
// ];
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
