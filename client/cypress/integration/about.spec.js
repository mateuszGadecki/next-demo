/// <reference types="cypress" />

context('About Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about');
  });
  it('check if the about page and title exist on it', () => {
    cy.get('h1').contains('About Page');
  });
  it('check if the link exist', () => {
    cy.get('a').contains('Go Back');
  });
});
