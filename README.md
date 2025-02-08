# GGR472 - Lab 2

 Code and data for GGR472 Lab 2. Creating a web map using Mapbox GL JS.

## Description

Toronto's tick surveillance program helps to determine the overall risk of Lyme disease in the city. Ticks are found in wooded or bushy areas with lots of leaves on teh ground or where there are tall grasses. As tick populations expand, ticks may be found outside these areas. This map aims to show 

Shows dragging locations in Toronto.

## Data

This map uses two datasets from Toronto Open Data. 

### Blacklegged Tick Surveillance

Data from Toronto’s tick surveillance program which monitors the number of blacklegged ticks, their locations, and the number of them that carry the bacteria that causes Lyme disease.

Tick dragging is a process of collecting ticks in the environment and is done in the spring and fall when adult ticks are active. Dragging locations are selected based on suitable blacklegged tick habitat or a previous confirmed finding of a blacklegged tick. Blacklegged ticks may still be present in very low numbers at a site where none were found by tick dragging efforts. Ticks are found in wooded or bushy areas with lots of leaves on the ground or where there are tall grasses. As tick populations are expanding, it is possible that blacklegged ticks could be present outside the areas identified by Toronto Public Health. In addition, ticks can travel or migrate on the bodies of animals such as birds and therefore can be present in an area for a year in very low numbers and then disappear. The ticks are sent to the National Microbiology Laboratory in Winnipeg for confirmation of species and testing of adults and nymphs for Borrelia burgdorferi.

Data from 2013-2023

Added to map as a GeoJSON.

Source: https://open.toronto.ca/dataset/blacklegged-tick-surveillance/

### Green Spaces

includes public parks, beaches, parts of ravines, golf courses, cemeteries, and other open space areas such as those offered by various private institutions. These spaces may or may not be publicly accessible and are either publicly owned/maintained or they are privately owned/maintained. 

Added to map as a Mapbox tileset.

Source: https://open.toronto.ca/dataset/green-spaces/