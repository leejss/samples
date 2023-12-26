import { ElementRects } from "@floating-ui/core";

export const computeCoordsFromPlacement = ({ reference, floating }: ElementRects) => {
  // Centered horizontally
  const commonX = reference.x + reference.width / 2 - floating.width / 2;

  return {
    x: commonX,

    // Below the reference
    y: reference.y + floating.height,
  };
};
