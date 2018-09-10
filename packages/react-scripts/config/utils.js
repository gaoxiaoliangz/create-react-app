'use strict';

const injectBabelPlugin = (plugin, config) => {
  const plugins = config.module.rules[1].oneOf[1].options.plugins || []
  plugins.push(plugin)
  config.module.rules[1].oneOf[1].options.plugins = plugins
}

const injectModuleRule = (rule, config) => {
  config.module.rules[1].oneOf.splice(-1, 0, rule)
}

const injectWebpackPlugin = (plugin, config) => {
  config.plugins.push(plugin)
}

module.exports = {
  injectBabelPlugin,
  injectModuleRule,
  injectWebpackPlugin
}
