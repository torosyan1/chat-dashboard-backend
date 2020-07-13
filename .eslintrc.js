module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier", "airbnb-base"],
  rules: {},
};
