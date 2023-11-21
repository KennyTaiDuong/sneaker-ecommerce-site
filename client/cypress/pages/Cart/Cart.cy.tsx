import { BrowserRouter } from "react-router-dom";
import { Cart } from "../../../src/pages/Cart/Cart";
import Global from "../../../src/GlobalStyles";
import { Auth0Provider } from "@auth0/auth0-react";
import authConfig from "../../../auth_config.json"

const MockCart = () => {
  const providerConfig = {
    domain: authConfig.domain,
    clientId: authConfig.client_id,
    authorizationParams: {
      redirect_uri: `${window.location.origin}/profile`
    }
  }

  return (
    <Auth0Provider
      {...providerConfig}
    >
      <BrowserRouter>
        <Global />
        <Cart />
      </BrowserRouter>
    </Auth0Provider>
  )
}

describe("Cart", () => {
  it("renders cart", () => {
    cy.mount(<MockCart />)
    cy.intercept("GET", "http://localhost:5000/api/carts/5", {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        id: 17,
        products: [],
        user_id: 5
      }
    })
  })
})