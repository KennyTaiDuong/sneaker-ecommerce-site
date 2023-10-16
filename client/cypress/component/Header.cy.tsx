import { Header } from "../../src/components/Header/Header"

describe('Header component', () => {
  it('should display search bar when icon clicked', () => {
    cy.mount(<Header />)
    cy.get('[data-cy="search-icon"]').click()
    cy.get(`[data-cy="search-bar"]`).should('be.visible')
  })

  it('should close search bar when icon clicked twice', () => {
    cy.mount(<Header />)
    cy.get('[data-cy="search-icon"]').click()
    cy.get('[data-cy="search-icon"]').click()
    cy.get(`[data-cy="search-bar"]`).should('not.be.visible')
  })

})