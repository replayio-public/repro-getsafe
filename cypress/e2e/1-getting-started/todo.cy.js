/// <reference types="cypress" />

const locators = ['.todo-list li', '.todo-list li']

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  locators.forEach((locator, index) => {
    runTest(locator, index);
  })
})

function runTest(locator, index) {
  it(`displays two todo items by default ${index}`, () => {
    cy.get(locator).should('have.length', 2)
    cy.get(locator).first().should('have.text', 'Pay electric bill')
    // make it fail
    cy.get(locator).last().should('have.text', 'Walk the cat')
    // cy.get(locator).last().should('have.text', 'Walk the dog')
  })
}