import { Given } from 'cypress-cucumber-preprocessor/steps'

//#region Cucumber steps

Given('an expected snapshot folder: {string}', folderName => {
  cy.wrap(folderName).as('expectedFixtureFolder')
})

Given('an ui {string}', theme => {
  cy.wrap(theme).as('theme')
})

//#endregion
