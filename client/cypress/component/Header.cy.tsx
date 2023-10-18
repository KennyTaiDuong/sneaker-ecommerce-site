import { Header } from "../../src/components/Header/Header"

describe('Header component', () => {
  beforeEach(() => {
    cy.mount(<Header setMenuIsOpen={() => {}} />)
  })

  it('should display search bar when icon clicked', () => {
    cy.get('[data-cy="search-icon"]').click()
    cy.get(`[data-cy="search-bar"]`).should('be.visible')
  })

  it('should close search bar when icon clicked twice', () => {
    cy.get('[data-cy="search-icon"]').click()
    cy.get('[data-cy="search-icon"]').click()
    cy.get(`[data-cy="search-bar"]`).should('not.be.visible')
  })

  it("should call function when menu clicked", () => {
    cy.get('[data-cy="hamburger-icon"]').click()
  })
})