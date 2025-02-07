import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        'lg': '768px',
        'xl': '768px',
        '2xl': '768px',
      },
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "450px" },
        ss: { max: "330px" },
      },
      backgroundImage: {
        "hero-bg": "url('/assets/background-spot.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
