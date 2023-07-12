import { useState } from "react";
import Scanner from "./components/Scanner";

const App = () => {
  const [showScanner, setShowScanner] = useState(false);
  const [uri, setUri] = useState("");

  return (
    <div>
      <h1>Sacnner</h1>
      <button
        onClick={() => {
          setShowScanner((prev) => !prev);
        }}
      >
        {showScanner ? "Stop scan" : "Start scan"}
      </button>
      {showScanner ? (
        <Scanner
          onScan={(uri) => {
            setUri(uri);
          }}
          onError={(err) => {
            console.log(err);
          }}
        />
      ) : null}
      <p>{uri && uri}</p>
    </div>
  );
};

export default App;
