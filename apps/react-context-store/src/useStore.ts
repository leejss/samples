import { Context, useContext, useState } from "react";

type Store<T> = {
  get: () => T;
  set: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (cb: () => void) => () => void;
};

function useStore<T>(ctx: Context<Store<T> | null>) {
  const store = useContext(ctx);
  if (!store) throw new Error("Provider is missing");
  const [data, setData] = useState(store.get);
  store.subscribe(() => {
    setData(store.get());
  });
  return [data, store.set] as const;
}

export default useStore;
