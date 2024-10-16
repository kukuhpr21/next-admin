import type { Config } from "tailwindcss";
import tailwindScrollbar from "tailwind-scrollbar";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Montserrat: "Montserrat",
      },
      scrollbarWidth: {
        thin: 'thin',
        auto: 'auto',
        none: 'none',
      },
    },
  },
  variants: {
    scrollbar: ['responsive'], // Enable scrollbar variants
  },
  plugins: [
    tailwindScrollbar
  ],
};
export default config;
