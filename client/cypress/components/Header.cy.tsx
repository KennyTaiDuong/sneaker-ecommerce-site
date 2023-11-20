import { BrowserRouter } from "react-router-dom"
import Global from "../../src/GlobalStyles"
import { Header } from "../../src/components/Header/Header"

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Global />
      <Header setMenuIsOpen={() => {}} />
    </BrowserRouter>
  )
}

describe('Header component', () => {
  beforeEach(() => {
    cy.mount(<MockHeader />)
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

  it("should open sidebar", () => {
    cy.get('[data-cy="hamburger-icon"]').click()
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
})