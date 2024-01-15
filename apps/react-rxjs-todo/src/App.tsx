import { useEffect, useState } from "react";
import { Todo, todoService } from "./TodoService";

const TodoItem = ({ todo }: { todo: Todo }) => {
  const deleteTodo = () => {
    todoService.deleteTodo(todo.id);
  };

  return (
    <div>
      {todo.title}
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const subscription = todoService.todos.subscribe(setTodos);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const renderTodo = (todo: Todo, idx: number) => {
    return (
      <li key={idx}>
        <TodoItem todo={todo} />
      </li>
    );
  };

  const addTodo = () => {
    if (!title) return;
    todoService.addTodo({
      id: Date.now(),
      title,
      completed: false,
    });
    setTitle("");
  };

  return (
    <div>
      <h1>Todo service</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>{todos.map(renderTodo)}</ul>
    </div>
  );
};

export default App;
