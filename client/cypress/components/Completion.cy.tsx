import { Completion } from "../../src/components/Checkout/Completion";
import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";

const MockCompletion = () => {
  return (
    <BrowserRouter>
      <Global />
      <Completion />
    </BrowserRouter>
  )
}

describe("Completion page", () => {
  it("render completion page", () => {
    cy.mount(<MockCompletion />)
  })
})