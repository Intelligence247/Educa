import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0051A0',
        'secondary-blue': '#ADD8E6',
        'accent-green': '#3CB371',
        'success-green': '#0DAF64',
        'light-gray': '#F5F5F5',
        'dark-gray': '#344054',
        "primary-gray":"#383E49",
        "secondary-gray":"#0D0D0D"
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config; 