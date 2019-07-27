Cypress.Commands.add('login', ({ username, password }) => {
  cy.request({
    url: 'http://localhost:3000/api/users/sign-in',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: { username, password },
  }).then(response => {
    localStorage.setItem('user', JSON.stringify(response.body));
  });
});
