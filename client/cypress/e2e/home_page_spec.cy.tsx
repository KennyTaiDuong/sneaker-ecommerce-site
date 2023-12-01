import { waitFor } from "@testing-library/react"


describe("home page", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5000/api/products").as("fetchProducts")
    cy.visit("/")
    cy.wait("@fetchProducts")
  })

  it("should render home page with welcome message", async () => {
    cy.get('[data-cy="hero-section"]')
      .should("have.text", "Welcome toAKSUPPLIED")
  })

  it("should navigate to Nike products", async () => {
    cy.get('[id="nike"]')
      .should("have.id", "nike")
      .click()
  })

  it("should navigate to Jordan products", async () => {
    cy.get('#jordan')
      .should("have.id", "jordan")
      
  })
  
  it("should navigate to Yeezy products", async () => {
    cy.get('[id="yeezy"]')
      .should("have.id", "yeezy")
      
  })
})