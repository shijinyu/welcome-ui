import { Given } from 'cypress-cucumber-preprocessor/steps'

//#region Cucumber steps

Given('an expected snapshot folder: {string}', folderName => {
  cy.wrap(folderName).as('expectedFixtureFolder')
})

Given('an ui {string} theme', theme => {
  cy.wrap(theme).as('theme')
})

Given('a format button {string}', format => {
  cy.wrap(format).as('formatButton')
})

Given('a basic color button {string}', basic => {
  cy.wrap(basic).as('basicButton')
})

//#endregion
