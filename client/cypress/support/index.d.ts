/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    loginToAuth0(username: string, password: string): Chainable<any>;
  }
}

interface Auth0Window extends Window {
  auth0: {
    useAuth0: () => {
      isAuthenticated: boolean;
      user: {
        email: string;
      };
      isLoading: boolean;
    };
  };
}

declare let window: Auth0Window;