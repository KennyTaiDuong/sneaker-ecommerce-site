import Global from "../../src/GlobalStyles";
import { Pagination } from "../../src/components/Pagination/Pagination";
import { BrowserRouter } from "react-router-dom";

const MockProductsNavbar = () => {
  return (
    <BrowserRouter>
      <Global />
      <Pagination pageCount={5} />
    </BrowserRouter>
  )
}

describe("Products Navbar", () => {
  beforeEach(() => {
    cy.mount(<MockProductsNavbar />)
  })

  it("", () => {

  })
})