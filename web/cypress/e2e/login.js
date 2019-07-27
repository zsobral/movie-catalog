describe('login', () => {
  beforeEach(() => {
    cy.visit('/login')
      .getByLabelText(/username/i)
      .type('admin');
  });

  it('should login and redirect to the homepage', () => {
    cy.getByLabelText(/password/i)
      .type('admin')
      .getByTestId('login-btn')
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .getByText(/logout/i)
      .should('not.be.undefined')
      .window()
      .its('localStorage.user')
      .should('not.be.undefined');
  });

  it('should show an error if failed to login', () => {
    cy.getByLabelText(/password/i)
      .type('wrong')
      .getByTestId('login-btn')
      .click()
      .getByTestId('login-error')
      .should('not.be.undefined');
  });
});
