import { BrowserRouter } from "react-router-dom";
import { ProductsPageLayout } from "../../src/components/Layout/ProductsLayout";
import Global from "../../src/GlobalStyles";

const MockProductsPageLayout = () => {
  return (
    <BrowserRouter>
      <Global />
      <ProductsPageLayout />
    </BrowserRouter>
  )
}

describe("Products page layout", () => {
  beforeEach(() => {
    cy.mount(<MockProductsPageLayout />)
  })

  it("should display all", () => {
    cy.contains("All Products").should("be.visible")
  })

  it("handle failed fetch request", () => {
    cy.intercept("GET", "http://localhost:5000/api/products", {
      statusCode: 400,
      body: "Something went wrong",
      headers: {
        'content-type': 'application/json',
      },
    }).as("fetchData")
  })
  
  it("open sort bar", () => {
    cy.contains("Sort By").click()
    cy.get("[data-cy=sort-low]").should("be.visible")
    cy.get("[data-cy=sort-high]").should("be.visible")
    cy.get("[data-cy=sort-alpha]").should("be.visible")
    cy.get("[data-cy=sort-reverse]").should("be.visible")
  })

  it("should select lowest price", () => {
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-low]").click()
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-low]").should("have.id", "selected")
  })

  it("should select highest price", () => {
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-high]").click()
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-high]").should("have.id", "selected")
  })

  it("should select alpha price", () => {
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-alpha]").click()
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-alpha]").should("have.id", "selected")
  })

  it("should select reverse-alpha price", () => {
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-reverse]").click()
    cy.contains("Sort By:").click()
    cy.get("[data-cy=sort-reverse]").should("have.id", "selected")
  })

})