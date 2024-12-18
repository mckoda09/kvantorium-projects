import { db, Project } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Project).values({
    category: "it",
    title: "Бот для рассылки",
    preview: "https://i.imgur.com/hCJyCgg.png",
    description: "Telegram-бот для рассылки в группы Кванториума.",
  });
}
