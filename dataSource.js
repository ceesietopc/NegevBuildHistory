function mapperFunc(obj) {
    console.log(obj)
    return {
        'lat': obj['Latitude'],
        'lng': obj['Longitude']
    }
}

peruLats = [
{
    "Latitude":-12.726084,
        "Longitude":-72.756958
},
{
    "Latitude":-13.183794,
        "Longitude":-72.962952
},
{
    "Latitude":-13.427024,
        "Longitude":-72.210388
},
{
    "Latitude":-12.758232,
        "Longitude":-72.05658
}
];

peru = {
    "start": 1230,
    "end": 1400,
    "info": "Inca's were like... pretty awesome...",
    "loc": peruLats.map(mapperFunc)
};

var civilizations = [peru];
