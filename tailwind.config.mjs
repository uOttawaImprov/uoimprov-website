/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      animation: {
        loadIn: "fadeIn .5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: "translateY(1rem)",
          },
          to: {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
