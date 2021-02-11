const fs = require('fs')
/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
// }

module.exports = () => {}

const cucumber = require('cypress-cucumber-preprocessor').default

const {
  addMatchImageSnapshotPlugin,
  matchImageSnapshotPlugin
} = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  on('file:preprocessor', cucumber()),
    on('after:screenshot', details => {
      const newPath = details.path.replace('#', '-')
      return new Promise((resolve, reject) => {
        // fs.rename moves the file to the existing directory 'new/path/to'
        // and renames the image to 'screenshot.png'
        fs.rename(details.path, newPath, err => {
          if (err) return reject(err)
          // because we renamed and moved the image, resolve with the new path
          // so it is accurate in the test results
          resolve({ path: newPath })
          matchImageSnapshotPlugin(details)
        })
      })
    })
}
