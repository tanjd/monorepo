import { getGreeting } from '../support/app.po';

describe('jeddy-tan', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome jeddy-tan');
  });
});

context('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });

  it('should display intro message', () => {
    cy.get('h2').contains('Hello! I am Jeddy.');
  });
});
