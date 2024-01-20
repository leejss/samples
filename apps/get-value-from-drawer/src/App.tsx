import { useContext, useState } from "react";
import Dialog from "./Dialog";
import { EventContext } from "./EventProvider";

const App = () => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(EventContext);
  const [emitter, eventSource] = ctx.eventSource;
  return (
    <div>
      <button
        onClick={async () => {
          setOpen(!open);
          const result = await eventSource.getValue();
          console.log(result);
        }}
      >
        Toggle Dialog
      </button>
      {open && <Dialog />}
    </div>
  );
};

export default App;
