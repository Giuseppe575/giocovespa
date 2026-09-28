import {describe,it,expect} from 'vitest';
import {joinRings,extractMultipolygons} from './florence-multipolygons.mjs';
describe('OSM building relation import',()=>{
 it('joins reversed fragments and keeps disjoint rings',()=>expect(joinRings([['1','2'],['3','2'],['3','1'],['4','5','6','4']])).toEqual([['1','2','3','1'],['4','5','6','4']]));
 it('rejects incomplete rings',()=>expect(()=>joinRings([['1','2','3']])).toThrow('Incomplete'));
 it('imports an untagged outer with courtyard using relation metadata',()=>{
  const coords=[[0,0],[.0001,0],[.0001,.0001],[0,.0001],[.00003,.00003],[.00007,.00003],[.00007,.00007],[.00003,.00007]];
  const nodes=coords.map((p,i)=>`<node id="${i+1}" lon="${11.257831+p[0]}" lat="${43.772579+p[1]}"/>`).join('');
  const way=(id,refs)=>`<way id="${id}">${refs.map(ref=>`<nd ref="${ref}"/>`).join('')}</way>`;
  const xml=nodes+way('10',[1,2,3,4,1])+way('11',[5,6,7,8,5])+'<relation id="100"><member type="way" ref="10" role="outer"/><member type="way" ref="11" role="inner"/><tag k="type" v="multipolygon"/><tag k="building" v="yes"/><tag k="name" v="Palazzo"/></relation>';
  const result=extractMultipolygons(xml,{geometry:{coordinates:[[11.257831,43.772579],[11.257831,43.771579]]},distanceMeters:111});
  expect(result.skipped).toEqual([]);expect(result.buildings).toHaveLength(1);expect(result.buildings[0].holes).toHaveLength(1);expect(result.buildings[0].name).toBe('Palazzo');expect(result.replacedWayIds).toEqual(['10']);
 });
});
