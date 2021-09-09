/// <reference types="cypress" />

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('check if the home page and title exist on it', () => {
    cy.get('h1').contains('Welcome');
  });
  it('check if the link exist', () => {
    cy.get('a').contains('About');
  });
});
