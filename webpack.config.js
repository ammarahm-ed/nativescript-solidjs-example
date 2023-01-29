const webpack = require("@nativescript/webpack");
const path = require("path");
module.exports = (env) => {
  webpack.init(env);
  webpack.chainWebpack((config) => {
    config.resolve.alias.set(
      "node_modules",
      path.resolve(__dirname, "node_modules")
    );
  });
  return webpack.resolveConfig();
};
