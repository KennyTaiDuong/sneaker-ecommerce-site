import { PaymentForm } from "../../src/components/Checkout/PaymentForm";
import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";
import { Layout } from "../../src/components/Layout/Layout";

const MockPaymentForm = () => {

  return (
    <BrowserRouter>
      <Layout />
      <Global />
      <Elements stripe={null}>
        <PaymentForm
          totalPrice={0} 
        />
      </Elements>
    </BrowserRouter>
  )
}

describe("Payment Form component", () => {
  it("render payment form", () => {
    cy.mount(<MockPaymentForm />)
  })

  it("renders footer", () => {
    cy.mount(<MockPaymentForm />)
    cy.contains("About Us").should("be.visible")
  })
})