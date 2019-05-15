const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const withTM = require("next-transpile-modules");

module.exports = withTypescript(
  withTM({
    transpileModules: ["@monorepo/home-page", "@monorepo/about-page"]
  })
);
