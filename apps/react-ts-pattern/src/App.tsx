import { ReactNode } from "react";
import { useCounter } from "./hook/useCounter";
import { match } from "ts-pattern";

const App = () => {
  const { decrement, increment, res } = useCounter();
  return (
    <div>
      <div>
        {match(res)
          .returnType<ReactNode>()
          .with({ status: "success" }, (res) => {
            return <h1>{res.data.value}</h1>;
          })
          .with({ status: "error" }, (res) => {
            return <h1>{res.error.message}</h1>;
          })
          .with({ status: "loading" }, () => {
            return <h1>Loading...</h1>;
          })
          .with({ status: "idle" }, () => {
            return null;
          })
          .exhaustive()}
      </div>
      <div>
        <button disabled={res.status === "loading"} onClick={increment}>
          Increment
        </button>
        <button disabled={res.status === "loading"} onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
