import { useResizeObserver } from "../hooks/useResizeObserverC";

export const UseResizeObserverC = () => {
  const [setElement, entry] = useResizeObserver({
    callback: () => {
      console.log("resize");
    },
  });

  console.log(entry);
  return (
    <div
      ref={(node) => {
        if (node) {
          setElement(node);
        }
      }}
    >
      useResizeObserverC
    </div>
  );
};
