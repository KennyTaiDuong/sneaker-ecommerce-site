import { Checkout } from "../Checkout";
import { it } from "vitest"
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

const MockCheckout = () => {
  return (
    <BrowserRouter>
      <Checkout />
    </BrowserRouter>
  )
}

describe("Checkout page", () => {
  it("should render checkout page", () => {
    render(<MockCheckout />)
  })
})