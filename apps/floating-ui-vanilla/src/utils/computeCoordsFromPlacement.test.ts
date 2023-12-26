import { describe, expect, it } from "vitest";
import { computeCoordsFromPlacement } from "./computeCoordsFromPlacement";

describe("computeCoordsFromPlacement", () => {
  it("should return the correct coordinates", () => {
    const reference = {
      x: 100,
      y: 100,
      width: 100,
      height: 100,
    };

    const floating = {
      x: 0,
      y: 0,
      width: 50,
      height: 50,
    };

    // x is centered horizontally
    // y is below the reference
    const { x, y } = computeCoordsFromPlacement({ reference, floating });
    expect(x).toBe(125);
    expect(y).toBe(150);
  });
});
