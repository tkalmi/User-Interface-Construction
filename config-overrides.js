const overrideTsLoader = require('react-app-rewire-typescript-hmr');

module.exports = function override(config, env) {
  config.entry = ['react-hot-loader/patch', ...config.entry];
  return overrideTsLoader(config);
};
