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
        primary: '#FF8C00',
        'primary-dark': '#E67E00',
        navy: '#1E3A8A',
        gray: '#6B7280',
        'light-gray': '#F3F4F6',
      },
    },
  },
  plugins: [],
};
export default config;
