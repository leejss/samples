import { BehaviorSubject } from "rxjs";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};
const todos: Todo[] = [];

const subject = new BehaviorSubject(todos);

export const todoService = {
  addTodo: (todo: Todo) => subject.next([...subject.getValue(), todo]),
  deleteTodo: (id: number) => subject.next(subject.getValue().filter((todo) => todo.id !== id)),
  clearTodo: () => subject.next([]),
  todos: subject.asObservable(),
};
