import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/globals.css",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#166534', // deep green
        secondary: '#a3e635', // lime/earthy green
        accent: '#22c55e', // vibrant green
        background: '#f7fbe8', // light earth background
        surface: '#e2e8d8', // muted earth surface
        // Optionally, keep Tailwind's default palette for other uses
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
  safelist: ["rounded-md", "border-gray-300", "shadow-sm"],
};

export default config;
