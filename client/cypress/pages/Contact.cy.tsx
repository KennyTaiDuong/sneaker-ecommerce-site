import { BrowserRouter } from "react-router-dom";
import { Contact } from "../../src/pages/Contact";
import Global from "../../src/GlobalStyles";

const MockContact = () => {
  return (
    <BrowserRouter>
      <Global />
      <Contact />
    </BrowserRouter>
  )
}

describe("Contact page", () => {
  it("mounts Contact page", () => {
    cy.mount(<MockContact />)
  })
})