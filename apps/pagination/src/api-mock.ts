import { todos } from "./data";

const sleep = (wait: number) => new Promise((resolve) => setTimeout(resolve, wait));

type PageParam = {
  page: number;
  limit: number;
};

const getTodos = async ({ page, limit }: PageParam) => {
  // await sleep(1000);
  const leftIdx = (page - 1) * limit;
  const rightIdx = leftIdx + limit;
  return {
    todos: todos.slice(leftIdx, rightIdx),
    totalCount: todos.length,
  };
};

export default getTodos;
