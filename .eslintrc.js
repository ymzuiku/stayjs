// yarn add eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-jsx-control-statements babel-eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser husky lint-staged prettier -D

// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint", "react", "jsx-control-statements", "prettier"],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    "jsx-control-statements/jsx-control-statements": true,
  },
  globals: {
    $: true,
  },
  rules: {
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prettier/prettier": 1,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    eqeqeq: ["warn", "always"],
    "prefer-const": ["error", { destructuring: "all", ignoreReadBeforeAssign: true }],
    "@typescript-eslint/indent": ["error", 2, { VariableDeclarator: 4, SwitchCase: 1 }],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/no-triple-slash-reference": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/triple-slash-reference": ["error", { path: "always", types: "never", lib: "never" }],
    // React相关校验规则
    "react/jsx-indent": [2, 4],
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "jsx-control-statements/jsx-use-if-tag": 0,
  },
};
