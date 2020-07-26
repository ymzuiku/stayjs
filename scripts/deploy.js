#!/usr/bin/env node

/* eslint-disable no-console */

/**
 * 1. 确保服务器已安装 nodejs，rsync, yarn
 * 2. 确保目标路径及目标备份路径在服务器存在
 * 3. 确保本地 sshkeyPath 有 ssh 密钥，并且已在目标服务器注册
 * 4. 确保服务器所使用的端口已配置好外网访问
 */
const fs = require("fs-extra");
const { resolve } = require("path");
const { exec } = require("child_process");
const pwd = (...args) => resolve(process.cwd(), ...args);
const pkg = require("../package.json");
const version = "v" + pkg.version.replace(/\./g, "_");

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

// 运行远程命令
const bashOrigin = (url, sshkey, code) => {
  const orignShell = `
ssh -i ${sshkey} ${url} 2>&1 << eeooff
  ${code}
eeooff
  `;
  return bash(orignShell);
};

const app = pkg.name;
const targetUrl = "ubuntu@0.0.0.0";
const targetProject = "~/service";
const sshKeyPath = "~/.ssh/id_rsa";
const buildScript = "NODE_ENV=production yarn server:build";
const sourceDir = pwd("dist");
const targetDir = `${targetUrl}:${targetProject}/${app}`;
const backupDir = `${targetUrl}:${targetProject}/backups/${app}_${version}`;
// 不进行编译和二次确认，一般是配合调试使用

console.log({
  app,
  targetUrl,
  targetProject,
  sshKeyPath,
  sourceDir,
  targetDir,
  backupDir,
});

if (process.env.log) {
  return;
}

const deploy = async () => {
  const yarnlibTime = Date.now();
  await bash(buildScript);

  const yarnlibTimeEnd = Date.now();

  pkg.dependencies = {};
  fs.writeFileSync(resolve(sourceDir, "package.json"), JSON.stringify(pkg));
  fs.copySync(pwd("yarn.lock"), resolve(sourceDir, "yarn.lock"));

  console.log(`rsync -av ${sourceDir}/* ${backupDir}`);
  await bash(`rsync -av ${sourceDir}/* ${backupDir}`);
  await bashOrigin(
    targetUrl,
    sshKeyPath,
    `
    rm -rf ${targetProject}/${app}
    cp -rf ${targetProject}/backups/${app}_${version} ${targetProject}/${app}
    cd ${targetProject}/${app}
    yarn
    {pm2 delete ${app}} || {}
    pm2 start index.js --name=${app} -i 0
  `
  );

  console.log("wait 1500ms... run: pm2 ls");
  await new Promise((res) => setTimeout(res, 1500));
  await bashOrigin(targetUrl, sshKeyPath, "pm2 ls");
  console.log(`项目: ${app}_${version}`);
  console.log(`目标路径: ${targetDir}`);
  console.log("本地编译耗时:", (yarnlibTimeEnd - yarnlibTime) / 1000, "s");
};

deploy();
