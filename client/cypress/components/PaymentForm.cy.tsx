import { PaymentForm } from "../../src/components/Checkout/PaymentForm";
import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";
import { Elements } from "@stripe/react-stripe-js";

const MockPaymentForm = () => {


  return (
    <BrowserRouter>
      <Global />
      <Elements stripe={null}>
        <PaymentForm 
          setCartStep={() => {}}
          shippingInfo={{
            street_number: "",
            street_name: "",
            city: "",
            state: "",
            zip: ""
          }} 
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
})