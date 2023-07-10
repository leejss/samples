/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const waitAsync = (ms: number) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  };

  const waitSync = (ms: number) => {
    const start = Date.now();
    while (Date.now() - start < ms) {
      // do nothing
    }
  };

  const handleClickAsync = async () => {
    await waitAsync(5000);
    console.log("Async::5 seconds passed");
  };

  const handleClickSync = () => {
    waitSync(5000);
    console.log("Sync::5 seconds passed");
  };

  return (
    <div className="container">
      <button onClick={handleClickAsync}>Wait 5 seconds. It's async but not blocking</button>
      <button onClick={handleClickSync}>Wait 5 seconds. It's sync and it is blocking</button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increment {count}
      </button>
    </div>
  );
};

export default App;
