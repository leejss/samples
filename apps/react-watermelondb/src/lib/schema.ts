import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const TABLES = {
  TODOS: "todos",
} as const;

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TABLES.TODOS,
      columns: [
        { name: "title", type: "string" },
        { name: "content", type: "string" },
        { name: "is_completed", type: "boolean" },
      ],
    }),
  ],
});
