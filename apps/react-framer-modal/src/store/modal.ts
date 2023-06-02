import type { ReactNode } from "react";
import { create } from "zustand";
import { devtools, combine } from "zustand/middleware";

const useModalStore = create(
  devtools(
    combine(
      {
        open: false,
        children: null as ReactNode,
      },
      (set) => ({
        openModal: (children: ReactNode) => set({ children, open: true }),
        closeModal: () => set({ open: false }),
      }),
    ),
  ),
);

export default useModalStore;
