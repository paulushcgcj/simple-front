const path = require('path')
const { addWebpackAlias } = require('customize-cra')

module.exports = function override(config, env) {
  config = addWebpackAlias({
    ['@components']: path.resolve(__dirname, 'src', 'components'),
    ['@main']: path.resolve(__dirname, 'src')
  })(config)

  return config
}