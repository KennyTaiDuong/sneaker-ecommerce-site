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
  

  it("should mount home page", () => {
    cy.viewport("iphone-x")
    cy.mount(<MockHome />)
  })
})