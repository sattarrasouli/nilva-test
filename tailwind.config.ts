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
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
    fontFamily: {
      IranSans: ["IranSans", "sans-serif"],
      IranSansLight: ["IranSansLight", "sans-serif"]
    },
    colors: {
      'DefaultGray': '#F5F6FB',
      'TextGray': '#B2BBB4',
      'TextDarkGray': '#676768',
      'TextGreen': 'green',
      'white': 'white',
      'blue': '#4B6ACB'
    }
  },
  plugins: [],
};
export default config;
