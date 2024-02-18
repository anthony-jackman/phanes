import LoginView from '@/components/LoginView.vue';
import '../assets/main.css'

describe('LoginView', () => {
  
  // beforeEach(() => {
  //   cy.mount(LoginView);
  // });

  it('should render', () => {
    cy.mount(LoginView);
    cy.get('h2').contains('Log In');
  });

  it.only('should log in', () => {
    cy.mount(LoginView);
    cy.get("#username")
      .should('be.visible')
      .should('not.be.disabled')
      .type('admin@lucky.com');
    cy.get('#password')
      .should('be.visible')
      .should('not.be.disabled')
      .type('password');
    // cy.get('button').click();
    // cy.url().should('eq', 'http://localhost/');
  });

  it('should show error message', () => {
    cy.mount(LoginView);
    cy.get("#username").type('admin');
    cy.get('#password').type('wrongpassword');
    cy.get('button').click();
    cy.get('.error');
  });

  it('should show error message when username is empty', () => {
    cy.mount(LoginView);
    cy.get('#password').type('password');
    cy.get('button').click();
    cy.get('.error').contains('Please fill out this field.');
  });

  it('should show error message when password is empty', () => {
    cy.mount(LoginView);
    cy.get('#password').type('admin');
    cy.get('button').click();
    cy.get('.error').contains('Please fill out this field.');
  });

  it('should show error message when username and password are empty', () => {
    cy.mount(LoginView);
    cy.get('button').click();
    cy.get('.error').contains('Error');
  });

  it('should show error message when username is too short', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('a');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.get('.error').contains('Username must be at least 3 characters');
  });

  it('should show error message when password is too short', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('a');
    cy.get('button').click();
    cy.get('.error').contains('Password must be at least 6 characters');
  });

  it('should show error message when username is too long', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('a'.repeat(51));
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.get('.error').contains('Username must be at most 50 characters');
  });

  it('should show error message when password is too long', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('a'.repeat(51));
    cy.get('button').click();
    cy.get('.error').contains('Password must be at most 50 characters');
  });

  it('should show error message when username contains invalid characters', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('admin!');
    cy.get('input[name="password"]').type('password');
    cy.get('button').click();
    cy.get('.error').contains('Username can only contain letters, numbers, and underscores');
  });

  it('should show error message when password contains invalid characters', () => {
    cy.mount(LoginView);
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('%password');
    cy.get('button').click();
    cy.get('.error').contains('Password can only contain letters, numbers, and underscores');
  });
});
