import Global from "../../src/GlobalStyles"
import { Header } from "../../src/components/Header/Header"

const MockHeader = () => {
  return (
    <>
      <Global />
      <Header setMenuIsOpen={() => {}} />
    </>
  )
}

describe('Header component', () => {
  beforeEach(() => {
    cy.mount(<MockHeader />)
  })

  it('should display search bar when icon clicked', () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get(`[data-cy="search-bar"]`).should('be.visible')
  })

  it('should close search bar when icon clicked twice', () => {
    cy.get('[data-cy="search-button"]').click()
    cy.get('[data-cy="search-button"]').click()
    cy.get(`[data-cy="search-bar"]`).should('not.be.visible')
  })
})