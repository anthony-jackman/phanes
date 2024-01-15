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
  it('Visits the group trials page', () => {
    cy.visit('/gt');
    cy.contains('h1', 'Group Trials');
  });
  it('Visits the course detail page', () => {
    cy.visit('/crsedetails');
    cy.contains('h1', 'Course Details');
  });
  it('Visits the helpdesk page', () => {
    cy.visit('/helpdesk');
    cy.contains('h1', 'Helpdesk');
  });
});