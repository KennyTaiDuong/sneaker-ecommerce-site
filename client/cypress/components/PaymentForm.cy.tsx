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

  it("renders header, footer, and service banner", () => {
    cy.mount(<MockPaymentForm />)
    cy.viewport("macbook-16")
    cy.contains("About Us").should("be.visible")
    cy.get('[data-cy="search-button"]').should("be.visible").click()
    cy.get('[data-cy="search-input"]').type("Test{enter}")
    cy.contains("Size out of stock?").should("exist")
  })
})