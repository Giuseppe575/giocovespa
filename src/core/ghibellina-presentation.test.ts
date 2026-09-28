import {describe,it,expect} from 'vitest';
import {ghibellinaFacadeProfile} from './ghibellina-presentation';
describe('Ghibellina visual scope',()=>{
 it('keeps the already approved Proconsolo face unchanged',()=>{
  expect(ghibellinaFacadeProfile('r1461750',[5,-228.4],[-1.3,-260.5],-1,0)).toBeNull();
  expect(ghibellinaFacadeProfile('r4098970',[4,-60],[5,-120],-1,0)).toBeNull();
 });
 it('recognizes the Bargello wall facing Ghibellina',()=>expect(ghibellinaFacadeProfile('r1461750',[68.1,-228.8],[26.6,-223.9],0,-1)?.kind).toBe('bargello'));
 it('selects the Borghese palace frontage but not its courtyard/back',()=>{
  expect(ghibellinaFacadeProfile('r1598079',[155.6,-229.6],[82.1,-222],0,1)?.kind).toBe('palace');
  expect(ghibellinaFacadeProfile('r1598079',[93.4,-190.7],[156.1,-191.1],0,-1)).toBeNull();
 });
 it('rejects facades pointing away from the street',()=>expect(ghibellinaFacadeProfile('r1461750',[68.1,-228.8],[26.6,-223.9],0,1)).toBeNull());
});
