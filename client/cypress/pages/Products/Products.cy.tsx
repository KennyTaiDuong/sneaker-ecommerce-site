import { BrowserRouter } from "react-router-dom";
import { ProductsPage } from "../../../src/pages/Product/Products";
import Global from "../../../src/GlobalStyles";

const MockProductsPage = () => {
  return (
    <BrowserRouter>
      <Global />
      <ProductsPage />
    </BrowserRouter>
  )
}

describe("Products Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x")
    cy.mount(<MockProductsPage />)
  })

  it("handle failed fetch request", () => {
    cy.intercept("GET", "http://localhost:5000/api/products", {
      statusCode: 400,
      body: "Something went wrong",
      headers: {
        'content-type': 'application/json',
      },
    }).as("fetchProducts")
  })

  it("sort by lowest price", () => {
    cy.get("[data-cy='sort-btn']").click()
    cy.get("[data-cy='sort-low']").click()
  })

  it("sort by highest price", () => {
    cy.get("[data-cy='sort-btn']").click()
    cy.get("[data-cy='sort-high']").click()
  })

  it("sort by alphabetical order", () => {
    cy.get("[data-cy='sort-btn']").click()
    cy.get("[data-cy='sort-alpha']").click()
  })

  it("sort by reverse-alphabetical order", () => {
    cy.get("[data-cy='sort-btn']").click()
    cy.get("[data-cy='sort-reverse']").click()
  })
})