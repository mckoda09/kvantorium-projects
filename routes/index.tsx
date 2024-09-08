import ProjectCard from "../components/ProjectCard.tsx";

export default function Home() {
  return (
    <main class="p-7 space-y-7">
      <div class="space-y-3 py-7">
        <div class="text-center font-exo font-semibold text-xl text-blue-500">
          Кванториум.Проекты
        </div>
        <div class="text-center font-exo font-semibold text-3xl">
          Инновации, Решения и Креативность
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <a href="/project/test">
          <ProjectCard />
        </a>
        <a href="/project/test">
          <ProjectCard />
        </a>
        <a href="/project/test">
          <ProjectCard />
        </a>
      </div>
    </main>
  );
}
