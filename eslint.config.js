import { config as defaultConfig } from "@epic-web/config/eslint";
import typescript from "@typescript-eslint/eslint-plugin";
import i18next from "eslint-plugin-i18next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/build/**",
      "**/public/build/**",
      ".cache",
      "app/data/api.ts",
      ".react-router/**",
    ],
  },
  ...defaultConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      i18next,
      react,
      "react-hooks": reactHooks,
      prettier,
      "@typescript-eslint": typescript,
      "unused-imports": unusedImports,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "ctl", "cn", "twMerge", "cva", "tw"],
        cssFiles: ["./app/styles/app.css"],
      },
    },
    rules: {
      "no-console": 1,
      "react/self-closing-comp": [
        "warn",
        {
          component: true,
          html: false,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "prefer-const": [
        "warn",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: false,
        },
      ],
      "no-var": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "JSXElement[openingElement.name.name='Await']:not(:has(JSXAttribute[name.name='errorElement']))",
          message: "You must pass `errorElement` when creating an <Await>.",
        },
      ],
    },
  },
];
