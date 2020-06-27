// @ts-check
const preactRefresh = require("@prefresh/vite");

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: {
    factory: "h",
    fragment: "Fragment",
  },
  // jsx: "preact",
  // plugins: [preactRefresh()],
  // optimizeDeps: {
  //   include: ["core-js"],
  // },
};

module.exports = config;
