import type {BufferGeometry} from 'three';
import {mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js';

/** Extruded arches are non-indexed; boxes and window panes are indexed.
 * Normalize only mixed batches, preserving existing all-indexed geometry. */
export function mergeGeometryBatch(geometries:BufferGeometry[]){
 const mixed=geometries.some(g=>g.index)&&geometries.some(g=>!g.index);
 const inputs=mixed?geometries.map(g=>g.index?g.toNonIndexed():g):geometries;
 const merged=mergeGeometries(inputs);
 if(mixed)inputs.forEach((g,i)=>{if(g!==geometries[i])g.dispose();});
 if(!merged)throw new Error('Incompatible Florence scenery geometry attributes');
 return merged;
}
