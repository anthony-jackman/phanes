import RegisterComponet from './Register.vue';
import '../../../assets/main.css';

describe('Register Component', () => {

  it('should render', () => {
    cy.mount(RegisterComponet);
    // Assert that the form exists
    // cy.get('form').should('exist')
    // Assert that the form contains the necessary fields
    // cy.get('input[name="username"]').should('exist')
    // cy.get('input[name="password"]').should('exist')
    // cy.get('input[name="confirmPassword"]').should('exist')
    // cy.get('button[type="submit"]').should('exist')
  });

  it.skip('submits the form', () => {
    // Mount the component
    mount(Register)

    // Fill out the form
    cy.get('input[name="username"]').type('testuser')
    cy.get('input[name="password"]').type('testpassword')
    cy.get('input[name="confirmPassword"]').type('testpassword')

    // Stub the form submission event
    cy.get('form').submit().then(() => {
      // Add your assertions here
    });
  });

});
