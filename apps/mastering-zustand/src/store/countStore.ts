import { create, type StateCreator } from "zustand";
import { combine, persist, devtools } from "zustand/middleware";

type CountStore = {
  count: number;
};

type CountAction = {
  inc: () => void;
  dec: () => void;
};

// use combine middleware
const useCountStore = create(
  combine(
    {
      count: 0,
    },
    () => ({
      name: "",
    }),
  ),
);

export default useCountStore;
