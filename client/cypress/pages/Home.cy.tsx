import { BrowserRouter } from "react-router-dom";
import { Home } from "../../src/pages/Home";
import Global from "../../src/GlobalStyles";

const MockHome = () => {
  return (
    <BrowserRouter>
      <Global />
      <Home />
    </BrowserRouter>
  )
}

describe("Home page", () => {
  
  it("handle failed fetch request", () => {
    cy.viewport("iphone-x")
    cy.mount(<MockHome />)
    cy.intercept("GET", "http://localhost:5000/api/products", {
      statusCode: 400,
      body: "Something went wrong",
      headers: {
        'Content-Type': 'application/json',
      },
    }).as("fetchProducts")
  })

  it("should mount home page and render products", () => {
    cy.viewport("iphone-x")
    cy.mount(<MockHome />)
  })
})