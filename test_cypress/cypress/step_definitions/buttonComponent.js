import { Then } from 'cypress-cucumber-preprocessor/steps'

//#region Cucumber steps

Then('I compare with the expected format button snapshot', () => {
  cy.get('@expectedFixtureFolder').then(folder => {
    cy.get('@theme').then(theme => {
      cy.get('@formatButton').then(format => {
        const fixSnapShotName = `${folder}_${theme}Theme_${format}Format`.replace(
          new RegExp(' ', 'g'),
          ''
        )
        cy.copySnapshotToCompareFolder(folder, theme, fixSnapShotName)
        cy.get(`[data-testid="visual-test-button-${format}"]`).matchImageSnapshot(fixSnapShotName)
      })
    })
  })
})

Then('I compare with the expected basic button snapshot', () => {
  cy.get('@expectedFixtureFolder').then(folder => {
    cy.get('@theme').then(theme => {
      cy.get('@basicButton').then(basic => {
        const fixSnapShotName = `${folder}_${theme}Theme_${basic}Color`.replace(
          new RegExp(' ', 'g'),
          ''
        )
        cy.copySnapshotToCompareFolder(folder, theme, fixSnapShotName)
        cy.get(`[data-testid="visual-test-button-${basic}"]`).matchImageSnapshot(fixSnapShotName)
      })
    })
  })
})

//#endregion
