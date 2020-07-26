#!/usr/bin/env node

/* eslint-disable no-console */

// yarn add esbuild rollup rollup-plugin-esbuild rollup-plugin-node-resolve rollup-plugin-uglify typescript -D

const rollup = require("rollup");
const { resolve } = require("path");
const pwd = (...args) => resolve(process.cwd(), ...args);
const pkg = require("./package.json");
const fs = require("fs-extra");
const esbuild = require("rollup-plugin-esbuild");
const argv = process.argv.splice(2);

function clearDir(dir) {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      fs.remove(`$\{dir}/$\{file}`);
    });
  }
}
function haveArgv(...args) {
  let isHave = false;
  args.forEach((str) => {
    argv.forEach((v) => {
      if (v === str) {
        isHave = true;
      }
    });
  });

  return isHave;
}

clearDir(pwd("dist"));

const watchOptions = {
  external: [
    "express",
    "crypto",
    "cluster",
    "lodash",
    "fastify",
    "fastify-cors",
    "fastify-static",
    "fastify-compress",
    "fastify-ws",
    "fastify-helmet",
    "mongodb",
    "fs-extra",
    "path",
    "fs",
    "ws",
    "http",
    "url",
  ],
  input: "./server/index.ts",
  output: {
    file: `./dist/index.js`,
    format: "cjs",
    name: pkg.name,
    sourcemap: true,
    globals: {
      react: "React",
    },
  },
  plugins: [
    esbuild({
      // All options are optional
      include: /\.(ts|tsx|js|jsx)?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      watch: process.argv.includes("--watch"),
      sourceMap: false, // default
      minify: process.env.NODE_ENV === "production",
      target: "es2017", // default, or 'es20XX', 'esnext'
      // jsxFactory: 'React.createElement',
      // jsxFragment: 'React.Fragment'
      // Like @rollup/plugin-replace
      // define: {
      //   __VERSION__: '"x.y.z"'
      // },
      // Add extra loaders
      // loaders: {
      //   // Add .json files support
      //   // require @rollup/plugin-commonjs
      //   // '.json': 'json',
      //   // Enable JSX in .js files too
      //   '.js': 'jsx'
      // }
    }),
  ],
};
const watcher = rollup.watch(watchOptions);

const copyList = ["yarn.lock", "env.json", "env.local.json"];

// event.code can be one of:
//   START        — the watcher is (re)starting
//   BUNDLE_START — building an individual bundle
//   BUNDLE_END   — finished building a bundle
//   END          — finished building all bundles
//   ERROR        — encountered an error while bundling
//   FATAL        — encountered an unrecoverable error
watcher.on("event", (event) => {
  if (event.code === "ERROR") {
    console.log(event);
  } else if (event.code === "BUNDLE_END") {
    // console.log(event);
    console.log("BUNDLE_END");
  } else if (event.code === "END") {
    delete pkg.devDependencies;
    fs.writeJSONSync("./dist/package.json", pkg, { spaces: 2 });
    copyList.forEach((f) => {
      if (fs.existsSync(f)) {
        fs.copyFileSync(f, "./dist/" + f);
      }
    });
    if (!haveArgv("--watch", "-w")) {
      watcher.close();
    }
  }
});
