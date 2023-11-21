import { BrowserRouter } from "react-router-dom";
import { Products } from "../../../src/pages/Product/Products";
import Global from "../../../src/GlobalStyles";

const MockProducts = () => {
  return (
    <BrowserRouter>
      <Global />
      <Products />
    </BrowserRouter>
  )
}

describe("Products Page", () => {
  beforeEach(() => {
    cy.viewport("iphone-x")
    cy.intercept("GET", "http://localhost:5000/api/products", {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: [
        {
          sku: "DD1391-100",
          name: 'Nike Dunk Low "Panda"',
          category: "m",
          sizes: [],
          price: 250,
          images: "https://www.kicksonfire.com/wp-content/uploads/2022/01/Nike-Dunk-Low-Panda-DD1391-100-1.jpeg"
        }
      ],
    })
    cy.mount(<MockProducts />)
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

  it("should render empty page", () => {

  })

  // it("sort by lowest price", () => {
  //   cy.get("[data-cy='sort-btn']").click()
  //   cy.get("[data-cy='sort-low']").click()
  // })

  // it("sort by highest price", () => {
  //   cy.get("[data-cy='sort-btn']").click()
  //   cy.get("[data-cy='sort-high']").click()
  // })

  // it("sort by alphabetical order", () => {
  //   cy.get("[data-cy='sort-btn']").click()
  //   cy.get("[data-cy='sort-alpha']").click()
  // })

  // it("sort by reverse-alphabetical order", () => {
  //   cy.get("[data-cy='sort-btn']").click()
  //   cy.get("[data-cy='sort-reverse']").click()
  // })
})