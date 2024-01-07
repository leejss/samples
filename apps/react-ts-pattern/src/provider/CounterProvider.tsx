import { PropsWithChildren, createContext, useCallback, useEffect, useState } from "react";
import { asyncClient } from "../service/async-client";
import { AsyncState } from "../type";

export type CounterRes = AsyncState<{
  value: number;
}>;

type CountContextType = {
  res: CounterRes;
  increment: () => Promise<void>;
  decrement: () => Promise<void>;
};
export const CounterContext = createContext<null | CountContextType>(null);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [res, setRes] = useState<CounterRes>({
    status: "loading",
  });

  const increment = useCallback(async () => {
    setRes({
      status: "loading",
    });
    const res = await asyncClient.post<{ value: number }>("/api/counter/increment");
    setRes(res);
  }, []);

  const decrement = useCallback(async () => {
    setRes({
      status: "loading",
    });
    const res = await asyncClient.post<{ value: number }>("/api/counter/decrement");
    setRes(res);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await asyncClient.get<{ value: number }>("/api/counter");
      setRes(res);
    })();
  }, []);

  return (
    <CounterContext.Provider
      value={{
        res,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
