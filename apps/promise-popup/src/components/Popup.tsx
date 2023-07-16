import { useEffect, useState } from "react";
import eventEmitter from "../lib/EventEmitter";

const Popup = () => {
  const [open, setOpen] = useState(false);

  const showPopup = () => {
    setOpen(true);
  };

  useEffect(() => {
    eventEmitter.on("show-popup", showPopup);
    return () => {
      eventEmitter.off("show-popup", showPopup);
    };
  }, []);

  if (!open) return null;
  return (
    <div>
      <div>
        <button
          onClick={() => {
            resolve("ok");
          }}
        >
          OK
        </button>
        <button
          onClick={() => {
            resolve("cancel");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Popup;

export const showPopup = async (options: { title: string; body: string }) => {
  return new Promise<string>((resolve) => {
    eventEmitter.emit("show-popup", resolve);
  });
};
