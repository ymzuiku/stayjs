const fs = require("fs-extra");
const { resolve } = require("path");

const files = [
  ".eslintrc.js",
  ".gitignore",
  ".npmignore",
  ".prettierrc.js",
  "package.json",
  "rollup.server.js",
  "tsconfig.json",
  "yarn.lock",
  "index.html",
  "vite.config.js",
];

const dirs = ["scripts", "src", "server"];

fs.emptyDirSync(resolve(__dirname, "../lib"));
fs.mkdirp(resolve(__dirname, "../lib"));
files.forEach((f) => {
  fs.copyFileSync(resolve(__dirname, "../", f), resolve(__dirname, "../lib", f));
});

dirs.forEach((d) => {
  fs.copySync(resolve(__dirname, "../", d), resolve(__dirname, "../lib", d));
});
