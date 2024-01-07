import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { asyncClient } from "../service/async-client";

type CountContextType = {
  value: number;
  increment: () => Promise<void>;
  decrement: () => Promise<void>;
};
export const CounterContext = createContext<null | CountContextType>(null);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [value, setValue] = useState(0);

  const increment = useCallback(async () => {
    const res = await asyncClient.post<{ value: number }>("/api/counter/increment");

    console.log("increment.res", res);

    // TODO: pattern mathcing ?
    if (res.status === "success") {
      const value = res.data.value;
      setValue(value);
    }
    if (res.status === "error") {
      // TODO: handle error status
    }
  }, []);

  const decrement = useCallback(async () => {
    const res = await asyncClient.post<{ value: number }>("/api/counter/decrement");
    console.log("decrement.res", res);
    // TODO: pattern mathcing ?
    if (res.status === "success") {
      const value = res.data.value;
      setValue(value);
    }
    if (res.status === "error") {
      // TODO: handle error status
    }
  }, []);

  // const getCount = useCallback(async () => {
  //   const res = await asyncClient.get<{ value: number }>("/api/counter");
  //   if (res.status === "success") {
  //     const value = res.data.value;
  //     setValue(value);
  //   }
  //   if (res.status === "error") {
  //     // TODO: handle error status
  //   }
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const value = await getCount();
  //   })();
  // }, []);

  return (
    <CounterContext.Provider
      value={{
        value,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
