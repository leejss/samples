import { useRef, useCallback } from "react";

function createRefStore<T>(initialData: T) {
  type StateUpdateFunction<T> = (prev: T) => T;
  const _data = useRef<T>(initialData);
  const subscribers = useRef(new Set<() => void>()).current;
  const get = useCallback(() => _data.current, []);
  const set = useCallback((nextState: T | StateUpdateFunction<T>) => {
    _data.current =
      typeof nextState === "function"
        ? (nextState as StateUpdateFunction<T>)(_data.current)
        : nextState;
    subscribers.forEach((cb) => cb());
  }, []);

  const subscribe = useCallback((cb: () => void) => {
    subscribers.add(cb);
    return () => {
      subscribers.delete(cb);
    };
  }, []);

  return {
    get,
    set,
    subscribe,
  };
}

export default createRefStore;
