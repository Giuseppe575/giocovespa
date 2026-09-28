import {describe,it,expect} from 'vitest';
import {florenceMap} from './florence';
import {clearOfBuildings} from './florence-space';
describe('Recovered Florence building geometry',()=>{
 it('restores the palaces omitted by the old way-only import',()=>{
  for(const id of ['r4098970','r1598079','r4098965','r1461750']){
   const building=florenceMap.buildings.find(b=>b.id===id);expect(building,id).toBeDefined();expect(building!.holes!.length).toBeGreaterThan(0);
  }
  expect(new Set(florenceMap.buildings.map(b=>b.id)).size).toBe(florenceMap.buildings.length);
  expect(florenceMap.buildings.some(b=>['306984398','114560819','306984412','43837065'].includes(b.id))).toBe(false);
 });
 it('does not fill the Nonfinito courtyard with an invisible collision block',()=>{
  const building=florenceMap.buildings.find(b=>b.id==='r4098970')!;
  const ring=building.holes![0].slice(0,-1);
  const x=ring.reduce((n,p)=>n+p[0],0)/ring.length,z=-ring.reduce((n,p)=>n+p[1],0)/ring.length;
  expect(clearOfBuildings({x,z},.1)).toBe(true);
 });
});
