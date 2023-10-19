import { BrowserRouter } from "react-router-dom";
import { Contact } from "../../src/pages/Contact";

const MockContact = () => {
  return (
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  )
}

describe("Contact page", () => {
  it("mounts Contact page", () => {
    cy.mount(<MockContact />)
  })
})