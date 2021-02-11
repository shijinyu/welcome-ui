import { Then } from 'cypress-cucumber-preprocessor/steps'

//#region Cypress locators

const BREADCRUMB = '[data-testid="visual-test-breadcrumb"]'

//#endregion

//#region Cucumber steps

Then('I compare with the expected breadcrumb snapshot', () => {
  cy.get('@expectedFixtureFolder').then(folder => {
    cy.get('@theme').then(theme => {
      const fixSnapShotName = `${folder}_${theme}Theme`.replace(new RegExp(' ', 'g'), '')
      cy.copySnapshotToCompareFolder(folder, theme, fixSnapShotName)
      cy.get(BREADCRUMB).matchImageSnapshot(fixSnapShotName)
    })
  })
})

//#endregion
