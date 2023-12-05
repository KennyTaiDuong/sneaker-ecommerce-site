

describe("unauthenticated user test", () => {
  beforeEach(() => {
    cy.intercept("http://localhost:5000/api/products").as("fetchProducts")
    cy.visit("/")
    cy.wait("@fetchProducts")
  })

  it("should get error message for adding item to cart while not logged in", async () => {
    cy.get('[id="nike"]')
      .should("have.id", "nike")
      .click()
  
    cy.get('#FQ0257-666')
      .click()
  
    cy.get('[data-cy="size-display"]')
      .click()
  
    cy.get('[id="5.5W"]')
      .click()
  
    cy.contains("ADD TO CART")
      .click()
  
    cy.get('[data-cy="error-msg"]')
      .should("exist")

  })
})