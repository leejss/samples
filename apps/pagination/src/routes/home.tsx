import { useLoaderData } from "react-router-dom";
import getTodos from "../api-mock";
import Pagination from "../Pagination";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const loader = async (pageParams: string) => {
  return getTodos({
    page: +pageParams,
    limit: 10,
  });
};

const HomePage = () => {
  const data = useLoaderData() as {
    todos: Todo[];
    totalCount: number;
  };

  return (
    <div className="min-h-screen grid grid-rows-[1fr_auto] place-content py-5">
      <ul>
        {data.todos.map((todo) => (
          <li key={todo.id}>
            <h2>
              #{todo.id} {todo.title}
            </h2>
          </li>
        ))}
      </ul>
      <Pagination totalCount={data.totalCount} />
    </div>
  );
};

export default HomePage;
