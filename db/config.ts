import { column, defineDb, defineTable } from "astro:db";

const Project = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    category: column.text(),
    preview: column.text(),
    description: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Project },
});
