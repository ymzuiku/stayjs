#!/usr/bin/env node

/* eslint-disable no-console */
const fs = require("fs-extra");
const { resolve } = require("path");
const { exec } = require("child_process");
const pwd = (...args) => resolve(process.cwd(), ...args);
const pkg = require("../package.json");
const version = "v" + pkg.version.replace(/\./g, "_");
const argv = process.argv.splice(2);

// 运行本地命令
const bash = (code) => {
  return new Promise((res) => {
    exec(code, (err, stdout, stderr) => {
      console.log(stdout, stderr);
      if (err) {
        throw err;
      }
      res(stdout);
    });
  });
};

async function start() {
  if (!argv[0]) {
    console.error("[ERROR] Need input path in argv");
    return;
  }
  if (!fs.existsSync(pwd(argv[0]))) {
    fs.mkdirpSync(pwd(argv[0]));
  }
  if (argv[0] === "./") {
    fs.copySync(resolve(__dirname, "../lib"), pwd(argv[0]));
  } else {
    fs.copySync(resolve(__dirname, "../lib"), pwd(argv[0], pkg.name));
  }
}

start();
