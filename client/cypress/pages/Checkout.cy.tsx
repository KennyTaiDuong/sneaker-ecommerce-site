import { BrowserRouter } from "react-router-dom";
import { Checkout } from "../../src/pages/Checkout/Checkout";
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
    cy.intercept("http://localhost:5000/stripe/create-payment-intent", {
      statusCode: 200,
    })
    cy.mount(<MockCheckout />)

  })
})