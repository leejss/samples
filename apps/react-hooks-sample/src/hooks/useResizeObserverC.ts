import { useCallback, useEffect, useRef, useState } from "react";
import debounce from "just-debounce-it";

export function useResizeObserver({ lazy = false, debounce: debounceDelay = 500, box = "border-box", callback = () => {} } = {}, deps = []) {
  const entryRef = useRef({});
  const [entry, setEntry] = useState({});
  const [element, setElement] = useState();

  useEffect(() => {
    if (!element) return;

    const onResize = debounce(
      ([entry]) => {
        entryRef.current = entry;

        console.log("onResize");
        callback(entry);

        if (!lazy) {
          setEntry(entry);
        }
      },
      debounceDelay,
      true,
    );

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(element, { box });

    return () => {
      resizeObserver.disconnect();
      onResize.cancel();
    };
  }, [element, lazy, debounceDelay, box, ...deps]);

  const get = useCallback(() => entryRef.current, []);

  return [setElement, lazy ? get : entry];
}
