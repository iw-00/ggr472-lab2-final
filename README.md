# GGR472 - Lab 2

 Code and data for GGR472 Lab 2. Creating a web map using Mapbox GL JS.

## Description

Toronto's tick surveillance program monitors the number and location of blacklegged ticks, as well as the number of them that carry the bacteria that causes Lyme disease.

**Dragging locations** are locations that are selected for tick collection and monitoring. Ticks are usually found in areas that are wooded, bushy, or have tall grasses.

This map shows the dragging locations for tick surveillance along with Toronto's green spaces, where dragging locations are typically located.

The map includes:

* A Mapbox style I created as a basemap. [View on Mapbox](https://api.mapbox.com/styles/v1/iw00/cm6wke90700h201s17joz8hyy.html?title=view&access_token=pk.eyJ1IjoiaXcwMCIsImEiOiJjbTV2aXFlajYwMjZmMmtvbWtrMGRhd3lkIn0.DbEVxhgWv4ANYwpIpCc4iA&zoomwheel=true&fresh=true#10.6/43.6911/-79.3588).
* Two data layers from different types of data sources.

## Data

This map uses two datasets from Toronto Open Data. 

### Blacklegged Tick Surveillance

Data collected at dragging locations between 2013-2023. Shown as point data on the map.

Added to map as a GeoJSON.

Source: https://open.toronto.ca/dataset/blacklegged-tick-surveillance/

### Green Spaces

Includes public parks, beaches, parts of ravines, golf courses, cemeteries, and other open space areas. Green spaces may be publically or privately accessible/owned/maintained.

Added to map as a Mapbox tileset. [View on Mapbox](https://studio.mapbox.com/tilesets/iw00.1c0ufy8s) (requires login).

Source: https://open.toronto.ca/dataset/green-spaces/
