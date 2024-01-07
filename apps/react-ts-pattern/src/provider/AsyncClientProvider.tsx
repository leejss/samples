import { PropsWithChildren, createContext } from "react";

export const AsyncClinetContext = createContext(null);

export const AsyncClientProvider = ({ children }: PropsWithChildren) => {
  return <AsyncClinetContext.Provider value={null}>{children}</AsyncClinetContext.Provider>;
};
