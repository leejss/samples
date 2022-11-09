function createStore<T>(initialData: T) {
  type StateUpdateFunction<T> = (prev: T) => T;
  let data = initialData;
  const subscribers = new Set<() => void>();
  const get = () => data;
  const set = (nextState: T | StateUpdateFunction<T>) => {
    data =
      typeof nextState === "function" ? (nextState as StateUpdateFunction<T>)(data) : nextState;
    subscribers.forEach((cb) => cb());
  };
  const subscribe = (cb: () => void) => {
    subscribers.add(cb);
    return () => {
      subscribers.delete(cb);
    };
  };

  return {
    get,
    set,
    subscribe,
  };
}

export default createStore;
