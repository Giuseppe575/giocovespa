import { describe, expect, it, vi } from "vitest";
import { GameStateMachine } from "./game-state-machine";

describe("GameStateMachine", () => {
  it("follows the run lifecycle", () => {
    const machine = new GameStateMachine();

    expect(machine.dispatch("START")).toMatchObject({
      from: "MENU",
      to: "RUNNING",
      changed: true,
    });
    expect(machine.dispatch("CRASH").to).toBe("GAME_OVER");
    expect(machine.dispatch("RESTART").to).toBe("RUNNING");
  });

  it("ignores invalid events and only notifies on changes", () => {
    const machine = new GameStateMachine();
    const listener = vi.fn();
    const unsubscribe = machine.subscribe(listener);

    expect(machine.dispatch("CRASH").changed).toBe(false);
    expect(listener).not.toHaveBeenCalled();

    machine.dispatch("START");
    expect(listener).toHaveBeenCalledTimes(1);
    unsubscribe();
    machine.dispatch("RETURN_TO_MENU");
    expect(listener).toHaveBeenCalledTimes(1);
  });
});
