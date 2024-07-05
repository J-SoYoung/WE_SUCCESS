// eslint.config.js

export default [
  {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:@next/next/recommended",
      "next/core-web-vitals",
    ],
    plgins: ["react", "react-hooks", "@next/eslint-plugin-next"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
