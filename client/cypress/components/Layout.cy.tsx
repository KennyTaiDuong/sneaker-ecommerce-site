import { BrowserRouter } from "react-router-dom"
import { Layout } from "../../src/components/Layout/Layout"
import Global from "../../src/GlobalStyles"

const MockLayout = () => {
  return (
    <BrowserRouter>
      <Global />
      <Layout />
    </BrowserRouter>
  )
}

describe("Layout component", () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.mount(<MockLayout />)
  })

  it("should render component", () => {
    cy.get('[data-cy="hamburger-icon"]').click()
  })

  it('should display search bar when icon clicked', () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get(`[data-cy="search-form"]`).should('have.css', 'display').and('match', /block/)
  })

  it('should close search bar when icon clicked twice', () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="search-button"]').click()
    cy.get(`[data-cy="search-form"]`).should('have.css', 'display').and('match', /none/)
  })

  it("should redirect to products page", () => {
    cy.viewport(1024, 768)
    cy.get('[data-cy="shop-btn"]').click()
  })

  it("should redirect to cart page", () => {
    cy.get('[data-cy="cart-btn"]').click()
  })

  it("should redirect to profile", () => {
    cy.get('[data-cy="account-btn"]').click()
  })

  it("should change text in input", () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="search-input"]').type("Nike")
    cy.get('[data-cy="search-form"]').submit()
  })

  it("should open sidebar", () => {
    cy.get('[data-cy="hamburger-icon"]').click({force: true})
    cy.contains("Shop by Brand:").should("be.visible")
  })

  it("should receive successful GET request", async () => {
    const email = "kd@gmail.com"
    cy.intercept("GET", `http://localhost:5000/api/users/${email}`, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: [
        {
          id: 1,
          email: "kd@gmail.com",
          first_name: "Kenny",
          last_name: "Duong",
          shipping_info: {},
          phone: "2673681421"
        }
      ],
    }).as("fetchUser")
  })
})