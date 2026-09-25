export type MissionDefinition = Readonly<{
  id: string;
  targetScore?: number;
  targetDistance?: number;
  targetCoins?: number;
  targetNearMisses?: number;
}>;

export type MissionProgress = Readonly<{
  id: string;
  completed: boolean;
  score: number;
  distance: number;
  coins: number;
  nearMisses: number;
}>;

export type RunSnapshot = Readonly<{
  score: number;
  distance: number;
  coins: number;
  nearMisses: number;
  combo: number;
  maxCombo: number;
  mission: MissionProgress | null;
}>;

export type RunScoreRules = Readonly<{
  distanceScoreFactor: number;
  coinValue: number;
  nearMissValue: number;
  comboStep: number;
  maxCombo: number;
  comboWindowSeconds: number;
}>;

export type RunEvent =
  | Readonly<{ type: "TICK"; deltaSeconds: number; speed: number }>
  | Readonly<{ type: "COIN"; count?: number }>
  | Readonly<{ type: "NEAR_MISS" }>
  | Readonly<{ type: "BONUS"; points: number }>
  | Readonly<{ type: "RESET" }>;

export const DEFAULT_RUN_SCORE_RULES: RunScoreRules = {
  distanceScoreFactor: 0.35,
  coinValue: 14,
  nearMissValue: 25,
  comboStep: 0.15,
  maxCombo: 6,
  comboWindowSeconds: 2.1,
};

const nonNegative = (value: number, name: string): number => {
  if (!Number.isFinite(value) || value < 0) {
    throw new RangeError(`${name} must be a finite non-negative number`);
  }
  return value;
};

const validateMission = (mission: MissionDefinition | null): void => {
  if (!mission) return;
  if (!mission.id.trim()) throw new Error("Mission id cannot be empty");

  const targets = [
    mission.targetScore,
    mission.targetDistance,
    mission.targetCoins,
    mission.targetNearMisses,
  ].filter((target): target is number => target !== undefined);

  if (targets.length === 0) throw new Error("Mission requires at least one target");
  for (const target of targets) nonNegative(target, "Mission target");
};

/** Pure run progression. Time and gameplay events are supplied by the caller. */
export class RunModel {
  private score = 0;
  private distance = 0;
  private coins = 0;
  private nearMisses = 0;
  private combo = 1;
  private maxCombo = 1;
  private comboTimeRemaining = 0;

  constructor(
    private readonly mission: MissionDefinition | null = null,
    private readonly rules: RunScoreRules = DEFAULT_RUN_SCORE_RULES
  ) {
    validateMission(mission);
    nonNegative(rules.distanceScoreFactor, "distanceScoreFactor");
    nonNegative(rules.coinValue, "coinValue");
    nonNegative(rules.nearMissValue, "nearMissValue");
    nonNegative(rules.comboStep, "comboStep");
    nonNegative(rules.maxCombo, "maxCombo");
    nonNegative(rules.comboWindowSeconds, "comboWindowSeconds");
    if (rules.maxCombo < 1) throw new RangeError("maxCombo must be at least 1");
  }

  apply(event: RunEvent): RunSnapshot {
    switch (event.type) {
      case "TICK":
        this.advance(event.deltaSeconds, event.speed);
        break;
      case "COIN":
        this.collectCoin(event.count);
        break;
      case "NEAR_MISS":
        this.registerNearMiss();
        break;
      case "BONUS":
        this.awardBonus(event.points);
        break;
      case "RESET":
        this.reset();
        break;
    }
    return this.snapshot();
  }

  advance(deltaSeconds: number, speed: number): RunSnapshot {
    nonNegative(deltaSeconds, "deltaSeconds");
    nonNegative(speed, "speed");

    const distanceDelta = speed * deltaSeconds;
    this.distance += distanceDelta;
    this.score += distanceDelta * this.rules.distanceScoreFactor * this.combo;
    this.comboTimeRemaining = Math.max(0, this.comboTimeRemaining - deltaSeconds);
    if (this.comboTimeRemaining === 0) this.combo = 1;
    return this.snapshot();
  }

  collectCoin(count = 1): RunSnapshot {
    if (!Number.isInteger(count) || count <= 0) {
      throw new RangeError("Coin count must be a positive integer");
    }
    this.coins += count;
    this.score += this.rules.coinValue * count * this.combo;
    this.increaseCombo(this.rules.comboStep * count);
    return this.snapshot();
  }

  registerNearMiss(): RunSnapshot {
    this.nearMisses += 1;
    this.score += this.rules.nearMissValue * this.combo;
    this.increaseCombo(this.rules.comboStep);
    return this.snapshot();
  }

  awardBonus(points: number): RunSnapshot {
    nonNegative(points, "Bonus points");
    this.score += points;
    return this.snapshot();
  }

  reset(): RunSnapshot {
    this.score = 0;
    this.distance = 0;
    this.coins = 0;
    this.nearMisses = 0;
    this.combo = 1;
    this.maxCombo = 1;
    this.comboTimeRemaining = 0;
    return this.snapshot();
  }

  snapshot(): RunSnapshot {
    return {
      score: this.score,
      distance: this.distance,
      coins: this.coins,
      nearMisses: this.nearMisses,
      combo: this.combo,
      maxCombo: this.maxCombo,
      mission: this.missionProgress(),
    };
  }

  private increaseCombo(amount: number): void {
    this.combo = Math.min(this.rules.maxCombo, this.combo + amount);
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    this.comboTimeRemaining = this.rules.comboWindowSeconds;
  }

  private missionProgress(): MissionProgress | null {
    if (!this.mission) return null;
    const completed =
      (this.mission.targetScore === undefined || this.score >= this.mission.targetScore) &&
      (this.mission.targetDistance === undefined || this.distance >= this.mission.targetDistance) &&
      (this.mission.targetCoins === undefined || this.coins >= this.mission.targetCoins) &&
      (this.mission.targetNearMisses === undefined ||
        this.nearMisses >= this.mission.targetNearMisses);

    return {
      id: this.mission.id,
      completed,
      score: this.score,
      distance: this.distance,
      coins: this.coins,
      nearMisses: this.nearMisses,
    };
  }
}

export const createRunModel = (
  mission: MissionDefinition | null = null,
  rules: RunScoreRules = DEFAULT_RUN_SCORE_RULES
): RunModel => new RunModel(mission, rules);
