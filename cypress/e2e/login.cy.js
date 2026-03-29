/// <reference types="cypress" />

describe('Login Flow - E2E Tests', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('should login successfully with valid credentials', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.success').should('contain', 'You logged into a secure area!')
    cy.url().should('include', '/secure')
  })

  it('should show error with invalid credentials', () => {
    cy.get('#username').type('invalid_user')
    cy.get('#password').type('wrong_password')
    cy.get('button[type="submit"]').click()
    cy.get('.flash.error').should('be.visible')
    cy.url().should('include', '/login')
  })

  it('should show error when fields are empty', () => {
    cy.get('button[type="submit"]').click()
    cy.get('.flash.error').should('be.visible')
  })
})
