// Libs
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

// Themes
import {
  customColors,
  customFontSizes,
  customRadius,
} from "./src/themes";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: customColors,
      fontSize: customFontSizes,
      borderRadius: customRadius,
    },
  },
  plugins: [nextui()],
};
export default config;
