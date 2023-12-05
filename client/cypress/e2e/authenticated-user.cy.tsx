
describe("home page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5000/api/products").as("fetchProducts")
    cy.loginToAuth0(Cypress.env("auth0_username"), Cypress.env("auth0_password"));
    cy.visit("/")
    cy.wait("@fetchProducts")
  })
  
  it("should log user in and add item to cart", async () => {
    cy.get('[id="nike"]').should("have.id", "nike").click()

    cy.get('#CU1727-100').click()

    cy.get('[data-cy="size-display"]').click()

    cy.get('[id="10"]').click()

    cy.contains("ADD TO CART").click()

    cy.get('[data-cy="cart-btn"]').click()

    cy.get('[data-cy="account-btn"]')
    .click()
  
    cy.get('[data-cy="login-btn"]')
    .click()

    cy.get('[data-cy="cart-btn"]').click()
    
    // cy.get('[data-cy="search-button"]').click()

    // cy.get('[data-cy="search-input"]').type("jordan{enter}")
    
    // cy.get('[data-cy="sort-btn"]').click()

    // cy.get('[data-cy="sort-alpha"]').click()

    // cy.get('#CT88013-116').click()

    // cy.contains("Select Size").click()

    // cy.get("[id='10']").click()

    // cy.contains("ADD TO CART").click()

    // cy.get('[data-cy="cart-btn"]').click()

    cy.intercept("http://localhost:5000/stripe/create-payment-intent").as("createPaymentIntent")
    
    cy.get('[data-testid="checkout-btn"]').click()

    cy.wait("@createPaymentIntent")
    
    // cy.fillStripeElement("#Field-numberInput", "4242424242424242");
    // cy.fillStripeElement("#Field-expiryInput", "2030");
    // cy.fillStripeElement("#Field-cvcInput", "123");
    // cy.fillStripeElement("#Field-postalCodeInput", "54321");
  })
})