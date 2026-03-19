import defaultConfig from "@epic-web/config/prettier";

/** @type {import("prettier").Options} */
export default {
  ...defaultConfig,
  useTabs: false,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./app/styles/app.css",
  tailwindFunctions: ["clsx", "twMerge"],
};
