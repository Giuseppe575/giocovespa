# Visual assets

The runtime scooter, rider, residents, buildings, church, street furniture and surface textures are authored procedurally in this repository. The classic scooter and rider were refined against the rear-view image supplied by the user on 25 September 2026. The image itself is not embedded or redistributed.

No external model files or texture downloads are required by the published game. Three.js and its geometry utilities remain governed by their package license. This is an original game model inspired by a classic Italian scooter, not a photogrammetric scan or an officially licensed Piaggio model.

## Music added 26 September 2026

“Carefree” by Kevin MacLeod (incompetech.com), ISRC USUAN1400037, CC BY 4.0. Source: https://incompetech.com/music/royalty-free/index.html?gt=&isrc=USUAN1400037 ; license: https://creativecommons.org/licenses/by/4.0/ . The unchanged MP3 is distributed locally in public/audio/carefree.mp3 (copied to docs/audio by Vite); playback is looped and mixed at a lower volume. On-screen attribution is in the main menu; full credit in public/audio/CREDITS.md. No third-party network request is required during play.

## Florence geographic data used at runtime

src/data/florence-route.json contains a route computed by OSRM from © OpenStreetMap contributors, ODbL (https://www.openstreetmap.org/copyright), plus signal coordinates from Comune di Firenze's CC BY 4.0 dataset (https://opendata.comune.fi.it/page_dataset_show?id=0d9fc6ec-cd6c-4bad-b7b1-a4ef70e82c2b). src/data/florence-map.json is an adapted OSM extract: building footprints/parts, river outline and crossing nodes, retrieved 26 September 2026 from https://api.openstreetmap.org/api/0.6/map?bbox=11.2545,43.7640,11.2780,43.7745 . Coordinates are converted to local metres; missing heights are estimated. These OSM-derived databases are made available under ODbL 1.0: https://opendatacommons.org/licenses/odbl/1-0/ . Source JSON is publicly available in this repository under src/data. In-game attribution identifies OSM and Comune di Firenze. Visual materials are original, not surveyed facades. No Google imagery or extracted models are included.
