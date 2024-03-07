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
        "theme-100": "#f7f6f9",
        "theme-200": "#bacbd5",
        "theme-300": "#95BDC5",
        "theme-400": "#77BAC3",
        "theme-500": "#5788A9",
        "theme-600": "#2B3D5E",
        "theme-700": "#0B3D5E",
        "theme-primary": "#8fd8d2",
        "theme-secondary": "#FEE0C2",
        "theme-accent": "#F7F1D1",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],

  daisyui: {
    themes: [      {
      mytheme: {
        "primary": "#8fd8d2",
        "secondary": "#f7c5a8",
        "accent": "#f5e2c8",
        "neutral": "#f7f6f9",
        "base-100": "#f7f6f9",
        "base-200": "#bacbd5",
        "base-300": "#8db4c0",
        "base-400": "#4e889d",
        "base-500": "#0f3c5c",
        "base-600": "#011a36",
        "base-700": "#000b25",
        "info": "#a3d2ca",
        "success": "#b8dfc7",
        "warning": "#f8b88b",
        "error": "#f4978e"
      },
    }]
  }
};
export default config;
