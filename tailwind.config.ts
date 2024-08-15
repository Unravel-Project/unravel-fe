import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          500: '#072149',
          400: '#176EF1',
          300: '#73A8F7',
          200: '#B9D3FB',
          100: '#E8EDFB',
        },
        secondary: {
          500: '#0C4C3B',
          400: '#117358',
          300: '#A5E5D4',
          200: '#A5E5D4',
          100: '#E8F9F4',
        },
        negative: {
          500: '#981B1B',
          400: '#DD2222',
          100: '#FECACA',
        },
        accent: {
          500: '#755100',
          400: '#E3C37A',
          300: '#FFDF99',
          200: '#FFF2D6',
          100: '#FFF9EB',
        },
        neutral: {
          coolgray: {
            900: '#22242A',
            800: '#393D46',
            700: '#676D7E',
            500: '#9DA1AF',
            400: '#D5D7DD',
            100: '#F1F2F4',
          },
        },
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
};
export default config;
