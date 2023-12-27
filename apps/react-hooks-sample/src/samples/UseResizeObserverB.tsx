import { useResizeObserverB } from "../hooks/useResizeObserverB";

export const UseResizeObserverB = () => {
  const rect = useResizeObserverB("target", () => {
    console.log("resize");
  });

  // console.log("rect", rect);

  return (
    <h1
      data-resize-observer-target="target"
      style={{
        backgroundColor: "red",
      }}
    >
      useResizeObserverB
    </h1>
  );
};
