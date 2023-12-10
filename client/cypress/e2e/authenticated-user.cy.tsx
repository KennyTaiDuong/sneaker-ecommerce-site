import "cypress-plugin-stripe-elements"
import "cypress-iframe"
import "cypress-plugin-tab"

describe("home page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5000/api/products").as("fetchProducts")
    cy.loginToAuth0(Cypress.env("auth0_username"), Cypress.env("auth0_password"));
    cy.visit("/")
    cy.wait("@fetchProducts")
  })
  
  it("should add items to cart and handle inventory error", async () => {
    
    // cy.get('[data-cy="account-btn"]')
    // .click()
  
    // cy.get('[data-cy="login-btn"]')
    // .click()

    cy.get("#logo").click()    

    cy.get('[id="nike"]').should("have.id", "nike").click()

    cy.get('#CU1727-100').click()

    cy.get('[data-cy="size-display"]').click()

    cy.get('[id="10"]').click()

    cy.contains("ADD TO CART").click()

    cy.contains("ADD TO CART").click()

    cy.contains("ADD TO CART").click()

    cy.contains("ADD TO CART").click()

    cy.get('[data-cy="search-button"]').click()

    cy.get('[data-cy="search-input"]').type("jordan{enter}")

    cy.get('[data-cy="search-button"]').click()
    
    cy.get('[data-cy="sort-btn"]').click()

    cy.get('[data-cy="sort-alpha"]').click()

    cy.get('#CT88013-116').click()

    cy.contains("Select Size").click()

    cy.get("[id='7.5']").click()

    cy.contains("ADD TO CART").click()

    cy.get('[data-cy="cart-btn"]').click()

    cy.intercept("http://localhost:5000/stripe/create-payment-intent").as("createPaymentIntent")

    cy.intercept("http://localhost:5000/stripe/config").as("stripeConfig")
    
    cy.get('[data-testid="checkout-btn"]').click()

    cy.wait("@createPaymentIntent")

    cy.wait("@stripeConfig")
    
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.intercept('https://js.stripe.com/**').as('stripeRequests');
    
    cy.wait('@stripeRequests');

    cy.request("POST", "https://api.stripe.com/v1/payment_intents/pi_3OL5CVLIx0Zt0Fdx0S8TfLiX/confirm", {
      id: "pi_3OL5CVLIx0Zt0Fdx0S8TfLiX",
      object: "payment_intent",
      amount: 55000,
      automatic_payment_methods: {
          allow_redirects: "always",
          enabled: true
      },
      capture_method: "automatic",
      client_secret: "pi_3OL5CVLIx0Zt0Fdx0S8TfLiX_secret_2zVYXCIrWCoZwkdlDfkk2u13b",
      confirmation_method: "automatic",
      created: 1702046327,
      currency: "usd",
      livemode: false,
      payment_method: "pm_1OL5JfLIx0Zt0FdxlT0KWvHh",
      payment_method_types: [
          "card"
      ],
      shipping: {
          address: {
              city: "Kings Park",
              country: "US",
              line1: "123 Sesame Street",
              line2: null,
              postal_code: "11754",
              state: "NY"
          },
          carrier: null,
          name: "adwad",
          phone: "",
          tracking_number: null
      },
      status: "requires_payment_method"
  })
  
  })

  it.only("should change account information", () => {
    cy.get('[data-cy="account-btn"]').click()

    cy.get('[data-cy="login-btn"]').click()

    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })

    cy.get("#first").type("Test")

    cy.get("#last").type("User")

    cy.get("#phone").type("1112223333")

    cy.get('#street').type("123 Sesame St")

    cy.get('#city').type("Elmo")

    cy.get("#state").type("FL")
    
    cy.get("#zip").type("52352")
    
    cy.get("#update-button").click()

    cy.get('[data-cy="cart-btn"]').click()

    cy.contains("Test User").should("be.visible")

    cy.contains("123 Sesame St").should("be.visible")

    cy.contains("Elmo, FL, 52352").should("be.visible")
  })
})