import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        text: colors.black,
        bg: colors.white,
        "secondary-bg": colors.neutral[100],
        hint: colors.neutral[500],
        link: colors.blue[500],
        "button-text": colors.neutral[500],
      },
    },
  },
  plugins: [],
};
