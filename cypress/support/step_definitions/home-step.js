import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePageOb from '../page_objects/home-page'


Given('I access to home page', function () {
  homePageOb.go()
  cy.viewport(1024, 768)
  homePageOb.acceptCookie().click()
})

When('navigate to collection page', function () {
  homePageOb.searchBtn().click()
  homePageOb.searchBtn2().click()
  cy.get('.heading-1')
    .should('have.text', 'Collectie')
    .and('be.visible')
  cy.url().should('include', 'collectie');
})

Then('I search for a painting', function (table) {
    const { paintingName } = table.rowsHash();
  homePageOb.typePaintingName().type(paintingName)
  homePageOb.searchPainting().click()
  cy.scrollTo('top')
})

And('Should return more than {string} result', function (results) {
  cy.get('.results').invoke('text')
    .then(parseInt)
    .should('be.greaterThan', (parseInt(results)))
})

And('I pick the first painting', function () {
  homePageOb.selectPainting().click()
})

And('I validate the painting info', function (table) {
  const { Fnummer, JHnummer, Inventarisnummer } = table.rowsHash();

  cy.get('section').contains('Het Gele Huis').should('be.visible')

  homePageOb.validatingPainting()
  cy.get('@fNummer')
    .should('be.equal', Fnummer)
  cy.get('@jhNummer')
    .should('be.equal', JHnummer)
  cy.get('@inventarisNummer')
    .should('be.equal', Inventarisnummer)
  cy.url()
    .should('include', Inventarisnummer);
})