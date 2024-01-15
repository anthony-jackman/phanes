// https://on.cypress.io/api

describe('Basic page routes', () => {
  it('Visits the home page', () => {
    cy.visit('/');
    cy.contains('h1', 'Home Page');
  });
  it('Visits the users page', () => {
    cy.visit('/users');
    cy.contains('h1', 'User Management');
  });
});