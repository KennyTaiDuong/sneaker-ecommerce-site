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
    cy.intercept("GET", "http://localhost:5000/api/products", {
      statusCode: 400,
      body: "Something went wrong",
      headers: {
        'content-type': 'application/json',
      },
    }).as("fetchProducts")
  })

  it("should mount home page", () => {
    cy.viewport("iphone-x")
    cy.mount(<MockHome />)
  })
})