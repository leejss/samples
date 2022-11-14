import { useState } from "react";
import { Todo, useTodos } from "./App";
import cn from "classnames";

const TodoList = () => {
  const { todos, deleteTodo, editTodo, doneTodo } = useTodos();
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          doneTodo={doneTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  editTodo: (tood: Todo) => void;
  doneTodo: (id: number) => void;
}

const TodoItem = ({ todo, deleteTodo, editTodo, doneTodo }: TodoItemProps) => {
  const [content, setContent] = useState("");
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="flex gap-2 items-center">
      {editMode ? (
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      ) : (
        <p className={cn("font-bold text-blue-800", { "line-through": todo.done })}>
          {todo.content}
        </p>
      )}
      <div className="flex gap-1">
        <button
          onClick={() => {
            if (editMode) {
              editTodo({
                ...todo,
                content,
              });
            } else {
              setContent(todo.content);
            }
            setEditMode((prev) => !prev);
          }}
          className="rounded bg-slate-100 p-1 font-semibold"
        >
          edit
        </button>
        <button
          onClick={() => {
            deleteTodo(todo.id);
          }}
          className="rounded bg-slate-100 p-1 font-semibold"
        >
          delete
        </button>
        <button
          onClick={() => {
            doneTodo(todo.id);
          }}
          className="rounded bg-slate-100 p-1 font-semibold"
        >
          done
        </button>
      </div>
    </div>
  );
};
