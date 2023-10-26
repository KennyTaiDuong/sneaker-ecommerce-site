import Global from "../../src/GlobalStyles";
import { ProductsNavbar } from "../../src/components/ProductsNavbar/ProductsNavbar";
import { BrowserRouter } from "react-router-dom";

const MockProductsNavbar = () => {
  return (
    <BrowserRouter>
      <Global />
      <ProductsNavbar pageCount={5} />
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