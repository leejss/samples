import { useContext } from "react";
import { CounterContext } from "../provider/CounterProvider";

export const useCounter = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("Cannot find CounterProvider");
  return ctx;
};
