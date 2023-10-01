import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    listStyleType: {
      none: "none",
      square: "square",
    },
  },
  plugins: [],
};

export default config;
