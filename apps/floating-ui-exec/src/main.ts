import "./style.css";
import { arrow, computePosition, flip, offset, shift } from "@floating-ui/dom";

const buttonElement = document.getElementById("button")!;
const tooltipElement = document.getElementById("tooltip")!;
const arrowElement = document.getElementById("arrow")!;

function update() {
  // refrence and floating element
  computePosition(buttonElement, tooltipElement, {
    placement: "top",
    middleware: [
      offset(6),
      flip(),
      shift({
        padding: 5,
      }),
      arrow({ element: arrowElement }),
    ],
  }).then((computedPosition) => {
    const { x, y, placement, middlewareData } = computedPosition;

    // Set position of tooltip element
    Object.assign(tooltipElement.style, { left: `${x}px`, top: `${y}px` });

    // Set position of arrow element
    const arrowData = middlewareData.arrow;
    const arrowX = arrowData?.x;
    const arrowY = arrowData?.y;

    const staticSide = {
      top: "bottom",
      right: "left",
      bottom: "top",
      left: "right",
    }[placement.split("-")[0]]!;

    Object.assign(arrowElement.style, {
      left: arrowX != null ? `${arrowX}px` : "",
      top: arrowY != null ? `${arrowY}px` : "",
      right: "",
      bottom: "",
      [staticSide]: "-4px",
    });
  });
}

function showTooltip() {
  tooltipElement.style.display = "block";
  update();
}

function hideTooltip() {
  tooltipElement.style.display = "";
}

[
  ["mouseenter", showTooltip],
  ["mouseleave", hideTooltip],
  ["focus", showTooltip],
  ["blur", hideTooltip],
].forEach(([event, listener]) => {
  buttonElement.addEventListener(event, listener);
});
