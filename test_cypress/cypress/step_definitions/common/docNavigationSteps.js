import { When } from 'cypress-cucumber-preprocessor/steps'

//#region Cypress locators

const THEME_MENU = '[aria-autocomplete="list"][aria-labelledby="navigation-label"]'
const THEME_LIST = 'ul[id="navigation-menu"]'

//#endregion

//#region Cucumber steps

When('I visit the {string} page', page => {
  switch (page) {
    case 'Breadcrumb':
      cy.visit('/components/breadcrumb')
  }
})

When('I choose {string}', theme => {
  cy.get(THEME_MENU).click()
  cy.get(THEME_LIST)
    .contains(theme)
    .click()
})

//#endregion
