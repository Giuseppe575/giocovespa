import { FLORENCE_CROSSINGS, type Crossing } from "./florence";
export type CrossingPhase = "waiting" | "crossing" | "clear";
export type CrossingState = Crossing & {phase:CrossingPhase; elapsed:number; progress:number; light:"red"|"green"; served:boolean};

/** Deterministic game timings, not live municipal signal phases. Pedestrians
 * cannot enter until the player has stopped at the approach line. */
export class TrafficRules {
  crossings:CrossingState[]=[];
  reset(definitions: readonly Crossing[]=FLORENCE_CROSSINGS) {
    this.crossings=definitions.map(c=>({...c,phase:"waiting",elapsed:0,progress:0,light:c.signal?"red":"green",served:false}));
  }
  update(distance:number,speed:number,dt:number) {
    for(const c of this.crossings) {
      if(c.served||c.at-distance>70)continue;
      const stop=Math.max(0,c.at-7);
      if(c.phase==="waiting"&&distance>=stop-.25&&speed<.15)c.phase="crossing";
      if(c.phase==="crossing"){
        c.elapsed+=dt;c.progress=Math.min(1,c.elapsed/6);
        if(c.elapsed>=7){c.phase="clear";c.light="green";c.served=true;}
      }
    }
  }
  next(distance:number) { return this.crossings.find(c=>!c.served&&c.at>=distance-1); }
  limitSpeed(distance:number,requested:number,dt:number) {
    const next=this.next(distance);if(!next)return requested;
    const remaining=Math.max(0,next.at-7-distance);
    // Kinematic braking envelope; hard frame clamp prevents crossing the line
    // even with turbo, a long frame or a deliberately excessive input speed.
    if(remaining<.04)return 0;
    return Math.min(requested,Math.sqrt(2*6*remaining),remaining/Math.max(dt,.001));
  }
  message(distance:number) {
    const next=this.next(distance);
    if(!next||next.at-distance>65)return "";
    if(next.phase==="crossing")return "Pedoni in attraversamento · attendi";
    return next.signal?"Semaforo rosso · frenata assistita":"Strisce pedonali · lascia passare";
  }
}
