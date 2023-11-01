import { BrowserRouter } from "react-router-dom";
import { Cart } from "../../../src/pages/Cart/Cart";
import Global from "../../../src/GlobalStyles";

const MockCart = () => {
  return (
    <BrowserRouter>
      <Global />
      <Cart />
    </BrowserRouter>
  )
}

describe("Cart", () => {
  it("renders cart", () => {
    cy.mount(<MockCart />)
  })
})