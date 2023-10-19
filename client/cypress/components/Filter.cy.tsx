import { BrowserRouter } from "react-router-dom";
import { Filter } from "../../src/components/Filter/Filter";
import Global from "../../src/GlobalStyles";

const MockFilter = () => {
  return (
    <BrowserRouter>
  <Global />
      <Filter />
    </BrowserRouter>
  )
}

describe("Filter component", () => {
  beforeEach(() => {
    cy.viewport("iphone-x")
    cy.mount(<MockFilter />)
  })

  it("should open category dropdown", () => {
    cy.get('[data-cy="category-dropdown"]').click()
    cy.get('[data-cy="item-1"]').should("be.visible")
  })

  it("should open size dropdown", () => {
    cy.get('[data-cy="size-dropdown"]').click()
    cy.get('[data-cy="item-2"]').should("be.visible")
  })

  it("should open price dropdown", () => {
    cy.get('[data-cy="price-dropdown"]').click()
    cy.get('[data-cy="item-3"]').should("be.visible")
  })

  it("should open brands dropdown", () => {
    cy.get('[data-cy="brands-dropdown"]').click()
    cy.get('[data-cy="item-4"]').should("be.visible")
  })
})