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
    cy.get(`[data-cy="search-bar"]`).should('have.css', 'display').and('match', /block/)
  })

  it('should close search bar when icon clicked twice', () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="search-button"]').click()
    cy.get(`[data-cy="search-bar"]`).should('have.css', 'display').and('match', /none/)
  })

  it("should open sidebar", () => {
    cy.get('[data-cy="hamburger-icon"]').click()
  })
})