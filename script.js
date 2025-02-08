// Add default public map token from Mapbox.
mapboxgl.accessToken = "pk.eyJ1IjoiaXcwMCIsImEiOiJjbTV2aXFlajYwMjZmMmtvbWtrMGRhd3lkIn0.DbEVxhgWv4ANYwpIpCc4iA"; 

const map = new mapboxgl.Map({
    container: "tick-map", // map container ID
    style: "mapbox://styles/iw00/cm6wke90700h201s17joz8hyy", // style URL
    center: [-79.3567, 43.9845], // starting position [lng, lat]
    zoom: 5 // starting zoom
})

map.on("load", () => {

    // Add stargazing sites as points
    // map.addSource("stargazing-sites", {
    //     type: "geojson",
    //     data: "https://iw-00.github.io/ggr472-lab1/data/stargazing_sites.geojson"
    // });
    
    // map.addLayer({
    //     id: "stargazing-pt",
    //     type: "circle",
    //     source: "stargazing-sites",
    //     paint: {
    //         "circle-radius": 4,
    //         "circle-color": "#ebe834"
    //     }
    // })

    // Add buildings as points
    map.addSource("buildings-data", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/iw-00/ggr472-ex4/refs/heads/main/data/buildings.geojson"
    });
    
    map.addLayer({
        id: "buildings-pt",
        type: "circle",
        source: "buildings-data",
        paint: {
            "circle-radius": 4,
            "circle-color": "#1ff258"
        }
    });

    // Add Toronto census tracts (zoom in to see on map).
    map.addSource("toronto-ct-data", {
        type: "vector",
        url: "mapbox://iw00.c9uhqvg4"
    });

    map.addLayer({
        id: "toronto-ct",
        type: "fill",
        source: "toronto-ct-data",
        paint: {
            "fill-color": "#f768c5",
            "fill-opacity": 0.4,
            "fill-outline-color": "#8f1464"
        },
        "source-layer": "torontoct-0pw4sa"
    },
    // Draw building points over census tracts.
    "buildings-pt"
);

    



})