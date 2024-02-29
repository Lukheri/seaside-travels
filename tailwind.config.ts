import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "myrtle": "#4A8268",
        "emerald": "#30645C",
        "seafoam": "#84BE9D",
        "shoreline": "#A0825F",
        "warm-sand": "#C6A982",
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["pastel"]
  }
};
export default config;
