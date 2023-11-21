import { BrowserRouter } from "react-router-dom";
import { LoginButton } from "../../src/components/LoginButton/LoginButton";
import { Auth0Provider } from "@auth0/auth0-react";

const MockLoginButton = () => {
  return (
    <Auth0Provider
      domain="dev-u3z00aypdqeez6q6.us.auth0.com"
      clientId="WJEW4YQtfIDgnQqDoEHczDgwYRLFcMZl"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/profile"
      }}
    >
      <BrowserRouter>
        <LoginButton />
      </BrowserRouter>

    </Auth0Provider>
  )
}

describe("Login Button", () => {
  it("should render button", () => {
    cy.mount(<MockLoginButton />)
    cy.get('[data-cy="login-btn"]').should("exist")
  })
})