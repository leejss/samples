import { useState } from "react";
import { useTodos } from "./App";

const AddTodo = () => {
  const [content, setContent] = useState("");
  const { addTodo } = useTodos();
  return (
    <div className="border">
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          addTodo({
            id: Date.now(),
            content,
            done: false,
          });
          setContent("");
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default AddTodo;
