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
  beforeEach(() => {
    cy.mount(<MockCart />)
    cy.intercept('GET', 'http://localhost:5000/api/users/*', {
      statusCode: 200,
      body: {
        // Mock user data
        id: 123,
        email: 'test@example.com',
        first_name: 'John',
        last_name: 'Doe',
        shipping_info: {
          street_number: '123',
          street_name: 'Main St',
          city: 'Cityville',
          state: 'CA',
          zip: '12345',
        },
      },
    }).as('getUserData');
    
    cy.intercept("GET", "http://localhost:5000/api/carts/*", {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        rows: [
          {
            id: 17,
            user_id: 5,
            products: [
              {
                sku: "CT8532-104",
                name: 'Jordan 3 "UNC"',
                size: "8",
                quantity: "2",
              }
            ]
          }
        ]
        
      }
    }).as("getCart")
  })

  it("should render user not found message", () => {
    
  })
})