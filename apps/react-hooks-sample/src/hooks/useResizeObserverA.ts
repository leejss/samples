import debounce from "just-debounce-it";
import { useEffect, useRef } from "react";

export const useResizeObserverA = (target: Element | null, callback: (entry?: ResizeObserverEntry) => void) => {
  const rect = useRef<DOMRectReadOnly | null>(null);

  useEffect(() => {
    const onResize = debounce<ResizeObserverCallback>(([entry]) => {
      rect.current = entry.contentRect;
      callback(entry);
    }, 300);
    const resizeObserver = new ResizeObserver(onResize);

    if (target) {
      resizeObserver.observe(target);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [callback, target]);

  return () => rect.current;
};
