# Visual direction — Mediterranean daylight

The driving scene uses warm limestone and plaster, dark mineral asphalt, muted green shutters, turquoise water and coral scooter paint. The goal is a more natural, detailed browser game. It remains procedural 3D; it does not claim photographic realism or use scanned assets.

## Implemented

- A single lighting setup: atmospheric sky, baked environment reflections, warm directional sunlight, hemisphere fill and soft shadows. Removed the conflicting lighting path from the game loop initialization.
- Locally generated 512 px surface textures: asphalt aggregate, paving joints, sand, terracotta roof tiles and four plaster facades with shutters, window reveals and sills. Textures are cached, repeatable and require no external service or download.
- Window proportions are mapped in metres on all building facades. Stone balconies add real depth; the ground closes the former gaps under the town.
- Seaside water with animated normals and sky reflections, non-overlapping water tiles, detailed instanced palm fronds, promenade railings and beach parasols. Coast starts earlier in the initial scenery sequence.
- Rounded scooter panels, a smoother rider silhouette, mirrors and chrome details. Traffic cars have rounded bodywork, glass, bumpers, handles, plates and wheel hubs. Gameplay collision dimensions and traffic speed rules are unchanged.
- Dark translucent driving instruments, warm ivory menu panels, quieter borders and typography, and accessible focus states. Instruments hide behind menus so modal text does not compete with the HUD. Existing UI IDs and input contracts are preserved.

## Runtime budget

No new package or remote asset dependencies. Sky reflections bake once, not every frame. Surface maps and vehicle detail geometries are shared. Palm fronds and railing posts use instancing. Pixel ratio is capped at 1.75 for desktop and 1.5 for coarse-pointer devices; the latter use 1024 px rather than 2048 px shadows. Water animation only updates one shared shader uniform. No full-screen bloom, depth-of-field or other expensive post-processing passes.

## Validation and limits

Existing gameplay regression tests, TypeScript and production build are required. Browser QA covers menu/start/restart, console errors, desktop, portrait and mobile landscape layout. Emulated small viewports do not establish FPS or thermal behaviour on a physical phone.

The 1,800 m circuit now drives rendered districts, shop fronts and roadside chunks. The road, markings, vehicles and scenery share a continuous curved route and a camera-relative coordinate system. Collision checks stay in longitudinal/lane coordinates so turns do not change hitboxes. A starting-district selector allows direct access to all four environments. Scene chunks recycle outside the visible foreground; geometries and materials are shared.

The player uses an original rounded classic scooter and seated rider matching the user's supplied image: lacquered body, black saddle, chrome strips/mirrors, cream helmet and petrol jacket. Red, white and gray paint are selectable before play and saved locally. The model is detailed procedural geometry, not a photogrammetric scan. No external model assets are required. Physical-device profiling remains future work.

The historic centre narrows continuously from three to two lanes, with spawn choices and lane positions adapted to its width. Ground-floor shops are open rooms with masonry piers, small transparent panes, counters and striped awnings; cafes have seated customers. Independent pedestrians walk only on sidewalks. A recurring civic square has a church, bell tower, fountain and benches; it can also be selected as the starting point. Pedestrians and buildings are scenery, not collision hazards.

The engine now has an unmodulated output gain after its LFO and filter. Game over, mute and tab hiding close this gate, including pending volume automation; restart reopens it smoothly. Browser regression measured output gain 1 during play, 0 after a real obstacle collision, and 1 after restart.

The design-critique skill guided the hierarchy/readability review; the design-system skill guided the UI tokens and consistent materials. Two scoped agents handled vehicle details and UI using a lightweight model; integration, environment rendering and visual review stayed with the supervising agent.
