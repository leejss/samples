import { PropsWithChildren, createContext, useMemo } from "react";
import { createNanoEvents } from "nanoevents";

export const EventContext = createContext<any>(null);

const EventProvider = ({ children }: PropsWithChildren) => {
  const eventSource = useMemo(() => {
    const emitter = createNanoEvents();
    const EventSource = {
      getValue: async () => {
        return new Promise((resolve) => {
          emitter.on("data", (data) => {
            resolve(data);
          });
        });
      },
    };
    return [emitter, EventSource];
  }, []);
  return (
    <EventContext.Provider
      value={{
        eventSource,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
