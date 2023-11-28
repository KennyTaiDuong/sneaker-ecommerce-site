declare namespace Cypress {
  interface Chainable {
    waitForCreateUserEvent(): Chainable<void>;
  }
}