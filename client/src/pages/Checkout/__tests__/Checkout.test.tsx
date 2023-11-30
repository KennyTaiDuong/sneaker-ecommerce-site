import { Checkout } from "../Checkout";
import { it } from "vitest"
import { BrowserRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

const MockCheckout = () => {
  return (
    <BrowserRouter>
      <Checkout />
    </BrowserRouter>
  )
}

global.fetch = vi.fn() as any;

describe("Checkout page", () => {
  it("should render checkout page", async () => {
    const mockCart = {
      products: [
        { id: 1, name: 'Product 1', price: 10, quantity: 2 },
        { id: 2, name: 'Product 2', price: 15, quantity: 1 },
      ],
    };
    
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

    render(<MockCheckout />)

    await waitFor(() => {
      const backBtn = screen.getByText("Go Back")
      expect(backBtn.textContent).contains("Go Back")
    })
  })
})
// const backButton = screen.getByText("Go Back")
// const payButton = screen.getByText("Pay $100")
// expect(backButton.textContent).contains("Go Back")
// expect(payButton.textContent).contains("Pay $100")