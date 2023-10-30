import { Auth0Provider } from "@auth0/auth0-react";
import { LoginPage } from "../../src/pages/Profile/LoginPage";
import Global from "../../src/GlobalStyles";

const MockLoginPage = () => {
  return (
    <Auth0Provider
      domain=""
      clientId=""
      authorizationParams={{
      redirect_uri: ""
    }}
    >
      <Global />
      <LoginPage />
    </Auth0Provider>
  )
}

describe("Login Page", () => {
  it("render login page", () => {
    cy.mount(<MockLoginPage />)

    cy.contains("Log In")
  })
})