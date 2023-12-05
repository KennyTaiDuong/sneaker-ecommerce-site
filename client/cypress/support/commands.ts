/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

function loginViaAuth0Ui(username: string, password: string) {
  cy.visit("/")
  cy.visit("/")
  
  cy.get('[data-cy="account-btn"]')
  .click()

  cy.get('[data-cy="login-btn"]')
  .click()

  // Use cy.origin to ensure the commands are executed within the expected origin
  cy.origin(
    Cypress.env("auth0_domain"),
    { args: { username, password } },
    ({ username, password }) => {
      
      // Login on Auth0.
      cy.get('input#username').type(username);
      cy.get('input#password').type(password);
      cy.get('button[name="action"][value="default"]:visible').click();

      // Ensure Auth0 has redirected us back to the RWA.
      // cy.visit("http://localhost:5173/profile")
      cy.url().should("include", "")
    }
  );
}

Cypress.Commands.add('loginToAuth0', (username: string, password: string) => {
  const log = Cypress.log({
    displayName: 'AUTH0 LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    // @ts-ignore
    autoEnd: false,
  });

  log.snapshot('before');

  cy.session(`auth0-${username}`, () => {
    loginViaAuth0Ui(username, password);
  });

  log.snapshot('after');
  log.end();
});


Cypress.Commands.add("fillStripeElement", (selector, value) => {

  if (Cypress.config("chromeWebSecurity")) {
    // https://docs.cypress.io/guides/guides/web-security

    throw new Error(
      "To get stripe element `chromeWebSecurity` must be disabled."
    );
  }
  cy.get("iframe")
    .should((iframe) => expect(iframe.contents().find(selector).should("exist")))
    .then((iframe) => cy.wrap(iframe.contents().find(selector)))
    .within((input) => {
      cy.wrap(input).should("not.be.disabled").clear().type(value);
    });
});