import debounce from "just-debounce-it";
import { useEffect } from "react";

export const useResizeObserverB = (selector: string, callback: (entry?: ResizeObserverEntry) => void) => {
  useEffect(() => {
    const node = `[data-resize-observer-target="${selector}"]`;
    const element = document.querySelector(node);
    if (!element) return;

    const onResize = debounce<ResizeObserverCallback>(([entry]) => {
      callback(entry);
    }, 300);

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.unobserve(element);
    };
  }, [selector, callback]);
};
