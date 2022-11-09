import { createContext, PropsWithChildren, useContext, useState } from "react";
import createStore from "./createStore";
// import createRefStore from "./createRefStore";

function createStateContext<T>(initialState: T) {
  type ContextReturnType = ReturnType<typeof createStore<T>>;
  const store = createStore(initialState);
  const StateContext = createContext<ContextReturnType | null>(null);

  const StateProvider = ({ children }: PropsWithChildren) => {
    return <StateContext.Provider value={store}>{children}</StateContext.Provider>;
  };

  const useContextState = () => {
    const storeData = useContext(StateContext);
    if (!storeData) throw new Error("Provider is missing");
    const [data, setData] = useState(store.get());
    store.subscribe(() => {
      setData(storeData.get());
    });
    return [data, storeData.set] as const;
  };

  return [StateProvider, useContextState] as const;
}

export default createStateContext;
