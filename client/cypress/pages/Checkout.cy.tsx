import { BrowserRouter } from "react-router-dom";
import { Checkout } from "../../src/pages/Checkout";
import Global from "../../src/GlobalStyles";

const MockCheckout = () => {
  return (
    <BrowserRouter>
      <Global />
      <Checkout />
    </BrowserRouter>
  )
}

describe("Checkout page", () => {
  it("renders checkout", () => {
    cy.mount(<MockCheckout />)
  })
})