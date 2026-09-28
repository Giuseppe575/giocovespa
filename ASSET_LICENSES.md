# Visual assets

## Ghibellina reference extension · 27 September 2026

The 11 additional user frames, Frame_01_Screenshot_21.png through Frame_11_Screenshot_31.png, and Vespa_Firenze_Via_Ghibellina_11_frame.zip are reference-only inputs. The accompanying eight-frame ZIP duplicates the previous references. No archive or image pixels are copied into runtime assets or redistributed. Source provenance of the pre-rework images remains unestablished.

New arches, sparse Bargello openings, ironwork and facade detail are authored geometry. GARAGE and OSTERIA plaques are original canvas lettering, not cropped business signs; placement, dimensions and styling are artistic estimates, not a surveyed commercial inventory. Existing OSM footprints and CC0 surface materials retain their respective attribution below.

## User frames / Proconsolo pilot · 27 September 2026

Frame_01.png–Frame_08.png supplied by the user are visual references only. The user described them as ChatGPT Image rework; the underlying source provenance was not established. No frame pixels, crops or projected photographs are redistributed. The architectural details and new ashlar/paving textures are authored in code, not extracted from Google imagery or presented as scans.

src/data/florence-multipolygons.json is a derived OSM dataset under ODbL 1.0, from the existing extract acquired on 26 September. It preserves relation IDs, closed outer rings, 94 courtyard rings, attribution and an explicit list of incomplete relations excluded from import. Rebuild with `node scripts/florence-multipolygons.mjs output/playwright/florence-map.osm src/data/florence-multipolygons.json`; the source extract is a local ignored input, not silently downloaded by the script. 66 complete building polygons are added. Heights inherited from OSM levels remain inferred by the existing 3.3m-per-level convention, not surveyed heights.

The runtime scooter, rider, residents, buildings, church, street furniture and surface textures are authored procedurally in this repository. The classic scooter and rider were refined against the rear-view image supplied by the user on 25 September 2026. The image itself is not embedded or redistributed.

No external model files are required. Florence's new local preview uses the photographic materials listed below, served from this repository with no third-party calls while playing. Three.js and its geometry utilities remain governed by their package license. This is an original game model inspired by a classic Italian scooter, not a photogrammetric scan or an officially licensed Piaggio model.

## Florence photographic materials · local preview revision

Poly Haven assets, CC0 (https://polyhaven.com/license), downloaded at 1K resolution on 26 September 2026. Original diffuse and OpenGL normal JPGs are kept in public/textures/florence; tinting/tiling happens at runtime. These are generic photographed surfaces, NOT photographs of individual Florence facades.

- Medieval Blocks 05, diffuse/normal: https://polyhaven.com/a/medieval_blocks_05
- Painted Plaster Wall, diffuse/normal: https://polyhaven.com/a/painted_plaster_wall
- Aerial Asphalt 01, diffuse/normal: https://polyhaven.com/a/aerial_asphalt_01
- Grass Path 2, diffuse: https://polyhaven.com/a/grass_path_2

The Google Earth imagery consulted for visual orientation is NOT copied or redistributed. FIRENZE_VISUAL_SURVEY.md records sources and imagery date. src/data/florence-southbank.json adds 49 complete OSM building footprints from the same previously downloaded extract under ODbL, with attribution embedded. Bridge and weir endpoints are also from that extract; vertical dimensions are authored estimates.

## Music added 26 September 2026

“Carefree” by Kevin MacLeod (incompetech.com), ISRC USUAN1400037, CC BY 4.0. Source: https://incompetech.com/music/royalty-free/index.html?gt=&isrc=USUAN1400037 ; license: https://creativecommons.org/licenses/by/4.0/ . The unchanged MP3 is distributed locally in public/audio/carefree.mp3 (copied to docs/audio by Vite); playback is looped and mixed at a lower volume. On-screen attribution is in the main menu; full credit in public/audio/CREDITS.md. No third-party network request is required during play.

## Florence geographic data used at runtime

The 27 September correction adds src/data/florence-riverside-paths.json: ten footway/cycleway alignments from the same 26 September OSM extract, with original way IDs and attribution, under ODbL 1.0. Path widths/elevations and historic street cross sections are reconstruction estimates. User-supplied Google screenshots are reference only, not redistributed. Torre della Zecca details refer to https://musefirenze.it/blog/torredellazecca/ ; the model is authored geometry, not an extracted scan.

src/data/florence-route.json contains a route computed by OSRM from © OpenStreetMap contributors, ODbL (https://www.openstreetmap.org/copyright), plus signal coordinates from Comune di Firenze's CC BY 4.0 dataset (https://opendata.comune.fi.it/page_dataset_show?id=0d9fc6ec-cd6c-4bad-b7b1-a4ef70e82c2b). src/data/florence-map.json is an adapted OSM extract: building footprints/parts, river outline and crossing nodes, retrieved 26 September 2026 from https://api.openstreetmap.org/api/0.6/map?bbox=11.2545,43.7640,11.2780,43.7745 . Coordinates are converted to local metres; missing heights are estimated. These OSM-derived databases are made available under ODbL 1.0: https://opendatacommons.org/licenses/odbl/1-0/ . Source JSON is publicly available in this repository under src/data. In-game attribution identifies OSM and Comune di Firenze. Visual materials are original, not surveyed facades. No Google imagery or extracted models are included.

## Frame utente 32–51 · 28 settembre 2026
Vespa_Firenze_20_frame_32_51.zip: riferimenti visivi locali, non distribuiti. Estensione delle facciate, filari, texture del fogliame e parcheggi sono geometrie/materiali originali; le auto riusano il modello originale del progetto. Nessun pixel dei frame incorporato. Larghezze, corsie e posizioni decorative sono ricostruzioni artistiche.
