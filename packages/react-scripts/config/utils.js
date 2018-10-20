'use strict';

const tryCatch = (func, onError) => {
  try {
    func()
  } catch (error) {
    onError(error)
  }
}

const handleError = name => err => {
  console.log(`${name} error:`)
  console.log(`  If you see this, it's probably something went wrong with the util function.`)
  console.log(`  Update @gxl/react-scripts to the latest version and try again.`)
  console.log()
  console.error(err)
  process.exit(1)
}

const makeUtilFunc = plugin => {
  return (...args) => {
    tryCatch(() => {
      plugin(...args)
    }, handleError(plugin.name))
  }
}

const injectBabelPlugin = (plugin, config) => {
  const plugins = config.module.rules[2].oneOf[1].options.plugins || []
  plugins.push(plugin)
  config.module.rules[2].oneOf[1].options.plugins = plugins
}

const injectModuleRule = (rule, config) => {
  config.module.rules[2].oneOf.splice(-1, 0, rule)
}

const injectWebpackPlugin = (plugin, config) => {
  config.plugins.push(plugin)
}

module.exports = {
  injectBabelPlugin: makeUtilFunc(injectBabelPlugin),
  injectModuleRule: makeUtilFunc(injectModuleRule),
  injectWebpackPlugin: makeUtilFunc(injectWebpackPlugin)
}
