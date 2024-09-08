import { type Config } from "tailwindcss";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        exo: ["'Exo 2'", "sans-serif"],
      },
    },
  },
} satisfies Config;
