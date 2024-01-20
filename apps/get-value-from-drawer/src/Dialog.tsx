import { useContext } from "react";
import { EventContext } from "./EventProvider";

const Dialog = () => {
  const ctx = useContext(EventContext);
  const [emitter] = ctx.eventSource;
  return (
    <div>
      <button
        onClick={() => {
          emitter.emit("data", "Hello World");
        }}
      >
        I have data: Click
      </button>
    </div>
  );
};

export default Dialog;
