import { createContext, PropsWithChildren, useCallback, useContext, useRef, useState } from "react";
import "./App.css";
import createStateContext from "./createContext";

const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="container">
      <h1>Container</h1>
      {children}
    </div>
  );
};

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="wrapper">
      <h1>Wrapper</h1>
      {children}
    </div>
  );
};

const Box = ({ children }: PropsWithChildren) => {
  return (
    <div className="box">
      <h1>Box</h1>
      {children}
    </div>
  );
};

const Form = () => {
  const [name, setName] = useNameStore();
  return (
    <form>
      <label>
        first name
        <input
          type="text"
          onChange={(e) => {
            setName({
              ...name,
              first: e.target.value,
            });
          }}
        />
      </label>
      <label>
        last name
        <input
          type="text"
          onChange={(e) => {
            setName({
              ...name,
              first: e.target.value,
            });
          }}
        />
      </label>
    </form>
  );
};

const DisplayForm = () => {
  const [name] = useNameStore();

  return <div></div>;
};

type NameStore = {
  first: string;
  last: string;
};

const createNameStore = () => {
  const value = useRef({
    first: "",
    last: "",
  });
  const subscribers = useRef(new Set<() => void>()).current;
  const get = useCallback(() => value.current, []);
  const set = useCallback((newVal: NameStore) => {
    value.current = newVal;
    subscribers.forEach((cb) => cb());
  }, []);

  const subscribe = useCallback((cb: () => void) => {
    subscribers.add(cb);
    return () => {
      subscribers.delete(cb);
    };
  }, []);

  return {
    get,
    set,
    subscribe,
  };
};

type NameContextReturnType = ReturnType<typeof createNameStore>;
const NameContext = createContext<NameContextReturnType | null>(null); // default value is null

const useNameStore = (): [NameStore, (val: NameStore) => void] => {
  const store = useContext(NameContext); // get store from the context
  if (!store) throw new Error("Store is undeclared");
  // rendering layer
  const [name, setName] = useState(store.get());
  store.subscribe(() => {
    setName(store.get());
    // render the components
    // store.set -> store update -> set function called -> rendering
  });
  return [name, store.set];
};

const NameProvider = ({ children }: PropsWithChildren) => {
  const store = createNameStore();
  return <NameContext.Provider value={store}>{children}</NameContext.Provider>;
};

export const [CountProvider, useCountStore] = createStateContext(0);

const Counter = () => {
  const [count, setCount] = useCountStore();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        inc
      </button>
    </div>
  );
};

const App = () => {
  return (
    <CountProvider>
      <NameProvider>
        <h1>App</h1>
        <Container>
          <Wrapper>
            <Box>
              <Form />
              <Counter />
            </Box>
          </Wrapper>
        </Container>
      </NameProvider>
    </CountProvider>
  );
};

export default App;
