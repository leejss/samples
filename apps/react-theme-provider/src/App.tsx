import { ThemeProvider } from "./ThemeProvider";
import "./App.css";
import { useTheme } from "./useTheme";

const App = () => {
  const { toggle } = useTheme();
  return (
    <ThemeProvider>
      <h1 className="title">Foreground</h1>
      <button onClick={toggle}>toggle theme</button>
    </ThemeProvider>
  );
};

export default App;
