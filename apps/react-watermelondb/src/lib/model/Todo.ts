import { Model } from "@nozbe/watermelondb";
import { text, writer } from "@nozbe/watermelondb/decorators";
import { TABLES } from "../schema";

export default class Todo extends Model {
  static table = TABLES.TODOS;

  @text("title") title!: string;
  @text("contnet") content!: string;
  @text("is_completed") isCompleted!: boolean;

  @writer
  async addTodo(title: string, content: string) {
    const todo = await this.collections.get<Todo>(TABLES.TODOS).create((todo) => {
      todo.title = title;
      todo.content = content;
      todo.isCompleted = false;
    });
    return todo;
  }

  @writer
  async toggleCompleted() {
    await this.update((todo) => {
      todo.isCompleted = !todo.isCompleted;
    });
  }
}
