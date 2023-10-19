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

describe("Testing functionality of layour", () => {
  beforeEach(() => {
    cy.viewport('iphone-x')
    cy.mount(<MockLayout />)
  })

  it("should render component", () => {
    cy.get('[data-cy="hamburger-icon"]').click()
    
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
})