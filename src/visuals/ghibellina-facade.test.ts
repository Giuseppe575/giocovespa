import {describe,it,expect} from 'vitest';
import * as THREE from 'three';
import {addGhibellinaFacade} from './ghibellina-facade';
import {mergeGeometryBatch} from './geometry-batch';
describe('Ghibellina facade geometry',()=>{
 for(const kind of ['bargello','palace','street'] as const)it(`batches all ${kind} details into finite geometry`,()=>{
  const details:THREE.BufferGeometry[][]=Array.from({length:9},()=>[]);
  addGhibellinaFacade(details,[0,0],[24,0],14,0,1,kind,10);
  let vertices=0;
  for(const bucket of details){
   if(!bucket.length)continue;
   const merged=mergeGeometryBatch(bucket);vertices+=merged.attributes.position.count;
   expect([...merged.attributes.position.array].every(Number.isFinite)).toBe(true);
   merged.dispose();bucket.forEach(g=>g.dispose());
  }
  expect(vertices).toBeGreaterThan(100);expect(vertices).toBeLessThan(35000);
 });
});
