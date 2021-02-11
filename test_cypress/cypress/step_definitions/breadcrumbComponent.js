import { Then } from 'cypress-cucumber-preprocessor/steps'

//#region Cypress locators

const BREADCRUMB = '[data-testid="visual-test-breadcrumb"]'

//#endregion

//#region Cucumber steps

Then('I compare with the expected snapshot', () => {
  cy.get('@expectedFixtureFolder').then(folder => {
    cy.get('@theme').then(theme => {
      cy.copySnapshotToCompareFolder(folder, theme)
      cy.get('@fixSnapShot').then(fixSnapShot => {
        cy.get(BREADCRUMB).matchImageSnapshot(fixSnapShot)
      })
    })
  })
})

//#endregion
