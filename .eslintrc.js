const merge = require('lodash.mergewith')
const shared = require('wttj-config-front/.eslintrc')
const local = {
  extends: ['plugin:cypress/recommended'],
  env: {
    'cypress/globals': true,
  },
  settings: {
    'import/resolve': {
      moduleDirectory: ['node_modules', 'src'],
    },
  },
}

module.exports = merge({}, shared, local, (objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})