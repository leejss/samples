import { createContext, PropsWithChildren, useContext, useReducer } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: number) => void;
  editTodo: (todo: Todo) => void;
  doneTodo: (id: number) => void;
};

const TodoContext = createContext<TodoContextType | null>(null);
const initialState: Todo[] = [];
type Action =
  | {
      type: "add";
      payload: Todo;
    }
  | {
      type: "delete";
      payload: number;
    }
  | {
      type: "edit";
      payload: Todo;
    }
  | {
      type: "done";
      payload: number;
    };

const todoReducer = (state: typeof initialState, action: Action) => {
  if (action.type === "add") {
    if (!state.some((todo) => todo.id === action.payload.id)) return state.concat(action.payload);
  }
  if (action.type === "delete") {
    return state.filter((todo) => todo.id !== action.payload);
  }
  if (action.type === "edit") {
    return state.map((todo) => {
      if (todo.id === action.payload.id) {
        return action.payload;
      }
      return todo;
    });
  }
  if (action.type === "done") {
    return state.map((todo) => {
      if (todo.id === action.payload) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
  }
  return state;
};

export const useTodos = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("Provider is missing");
  return ctx;
};

const TodoProvider = ({ children }: PropsWithChildren) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (newTodo: Todo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };
  const deleteTodo = (id: number) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };
  const editTodo = (newTodo: Todo) => {
    dispatch({
      type: "edit",
      payload: newTodo,
    });
  };

  const doneTodo = (id: number) => {
    dispatch({
      type: "done",
      payload: id,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        doneTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen w-full bg-gray-200">
        <h1 className="text-3xl font-bold text-red-500">Todo Reducer</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
