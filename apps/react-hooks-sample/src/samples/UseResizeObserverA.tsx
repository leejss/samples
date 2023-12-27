import { useState } from "react";
import { useResizeObserverA } from "../hooks/useResizeObserverA";

export const UseResizeObserverA = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const getRect = useResizeObserverA(target, () => {
    console.log("resize");
  });

  return (
    <div
      ref={(node) => {
        node && setTarget(node);
      }}
    >
      Resize
      <button
        onClick={() => {
          console.log(getRect());
        }}
      >
        getRect
      </button>
    </div>
  );
};

// 1. const rect = useResizeObserver(ref, callback)
// 2. const [setElement] = useResizeObserver(callback)
// 3 const [setElement, rect] = useResizeObserver(callback)
// 4. const rect = useResizeObserver(selector)
