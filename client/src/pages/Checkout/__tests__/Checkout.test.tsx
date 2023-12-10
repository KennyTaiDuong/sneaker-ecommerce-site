import { Checkout } from "../Checkout";
import { it } from "vitest"
import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { Elements } from "@stripe/react-stripe-js";
import { act } from "react-dom/test-utils";

const MockCheckout = () => {
  const clientSecret = "pi_3OI1bqLIx0Zt0Fdx19vLeojS_secret_Lpe1aLR04vf4C7GH1jrTAvaca"

  return (
    <BrowserRouter>
      <Elements stripe={null} options={{ clientSecret }}>
        <Checkout />
      </Elements>
    </BrowserRouter>
  )
}

global.fetch = vi.fn() as any;

describe("Checkout page", () => {
  it("should render checkout page with back and pay button", async () => {
    
    const mockStripeConfig = {
      publishableKey: 'pk_test_51OAvRcLIx0Zt0FdxqUD2dszhSZBhpF0eEmnFUgJty08J5KqVZ5P5lvo0386LoTSI0N1CBCdInYOEwS2l65ZYAeV900stoJeVQZ',
    };

    const mockClientSecret = 'pi_3OI001LIx0Zt0Fdx0yM2ZxZj_secret_MCWNVHv7fNb2kA79gTsGKVyGZ';

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockStripeConfig),
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue({ clientSecret: mockClientSecret }),
    });

    await act(async () => {
      render(<MockCheckout />)
    })
    
    await waitFor(async () => {
      const backBtn = screen.getByText("Go Back")
      expect(backBtn.textContent).toContain("Go Back")
      const totalPrice = screen.getByText("Pay $0")
      expect(totalPrice.textContent).toContain("Pay $0")
    })
  })

  it("should handle failed fetch request for publishableKey", async () => {

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue({ error: "Error! Something went wrong."}),
    });

    await act(async () => {
      render(<MockCheckout />)
    })
  })
})
// const backButton = screen.getByText("Go Back")
// const payButton = screen.getByText("Pay $100")
// expect(backButton.textContent).contains("Go Back")
// expect(payButton.textContent).contains("Pay $100")