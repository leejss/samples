import { useCounter } from "./hook/useCounter";

const App = () => {
  const { decrement, increment, value } = useCounter();
  return (
    <div>
      <h1>{value}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
