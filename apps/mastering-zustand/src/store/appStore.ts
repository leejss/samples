import { create } from "zustand";

type AppState = {
  connected: boolean;
  accounts: string[];
};

type AppAction = {
  setConnected: (connected: boolean) => void;
  setAccounts: (accounts: string[]) => void;
};

// const useAppStore = create<AppState & AppAction>((set) => ({
//   connected: false,
//   accounts: [],
//   setConnected: (connected) => set({ connected }),
//   setAccounts: (accounts) => set({ accounts }),
// }));

// Curried version
const useAppStore = create<AppState & AppAction>()((set) => ({
  accounts: [],
  connected: false,
  setAccounts: (accounts) => set({ accounts }),
  setConnected: (connected) => set({ connected }),
}));

export default useAppStore;
