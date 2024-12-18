// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import alpinejs from "@astrojs/alpinejs";
import db from "@astrojs/db";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs(), db(), icon()],
  adapter: vercel(),
});
