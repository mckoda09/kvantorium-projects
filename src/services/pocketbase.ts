import PocketBase from "pocketbase";

export const pb = new PocketBase(
  import.meta.env.POCKETBASE_URL || "http://127.0.0.1:8090",
);

export const getProject = async (id: string) =>
  await pb.collection("projects").getOne(id);

export const listProjects = async () =>
  (await pb.collection("projects").getList(1, 10, { expand: "area" })).items;
