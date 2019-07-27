describe('logout', () => {
  it.only('should logout and redirect to the homepage', () => {
    cy.login({ username: 'admin', password: 'admin' })
      .visit('/')
      .getByText(/logout/i)
      .click()
      .url()
      .should('eq', `${Cypress.config().baseUrl}/`)
      .window()
      .its('localStorage.user')
      .should('be.undefined');
  });
});
