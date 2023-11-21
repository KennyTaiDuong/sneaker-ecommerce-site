import { Auth0Provider } from "@auth0/auth0-react";
import { LogoutButton } from "../../src/components/LogoutButton/LogoutButton";

const MockLogoutButton = () => {
  return (
    <Auth0Provider
      domain="dev-u3z00aypdqeez6q6.us.auth0.com"
      clientId="WJEW4YQtfIDgnQqDoEHczDgwYRLFcMZl"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
    >
        <LogoutButton />
    </Auth0Provider>
  )
}

describe("Logout Button", () => {
  it("should render button", () => {
    cy.mount(<MockLogoutButton />)
    cy.contains("Log Out").should("exist")
  })
})