import type { GameState } from "../definitions";

export type GameStateEvent =
  | "START"
  | "CRASH"
  | "RESTART"
  | "RETURN_TO_MENU";

export type GameStateTransition = Readonly<{
  from: GameState;
  to: GameState;
  event: GameStateEvent;
  changed: boolean;
}>;

export type GameStateListener = (transition: GameStateTransition) => void;

const TRANSITIONS: Readonly<
  Record<GameState, Readonly<Partial<Record<GameStateEvent, GameState>>>>
> = {
  MENU: {
    START: "RUNNING",
  },
  RUNNING: {
    CRASH: "GAME_OVER",
    RETURN_TO_MENU: "MENU",
  },
  GAME_OVER: {
    RESTART: "RUNNING",
    RETURN_TO_MENU: "MENU",
  },
};

/**
 * Small state coordinator for the existing MENU/RUNNING/GAME_OVER lifecycle.
 * Invalid events are intentionally no-ops so DOM input can safely dispatch them.
 */
export class GameStateMachine {
  private currentState: GameState;
  private readonly listeners = new Set<GameStateListener>();

  constructor(initialState: GameState = "MENU") {
    this.currentState = initialState;
  }

  get state(): GameState {
    return this.currentState;
  }

  can(event: GameStateEvent): boolean {
    return TRANSITIONS[this.currentState][event] !== undefined;
  }

  dispatch(event: GameStateEvent): GameStateTransition {
    const from = this.currentState;
    const to = TRANSITIONS[from][event] ?? from;
    const transition: GameStateTransition = {
      from,
      to,
      event,
      changed: from !== to,
    };

    if (transition.changed) {
      this.currentState = to;
      for (const listener of this.listeners) listener(transition);
    }

    return transition;
  }

  subscribe(listener: GameStateListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
