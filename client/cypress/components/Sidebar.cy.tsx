import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";
import { Sidebar } from "../../src/components/Sidebar/Sidebar";

const MockSidebar = () => {
  return (
    <BrowserRouter>
      <Global />
      <Sidebar setMenuIsOpen={() => {}}/>
    </BrowserRouter>
  )
}

describe("Sidebar component", () => {
  it("should mount sidebar", () => {
    cy.mount(<MockSidebar />)
    cy.get('[data-cy="close-button"]').click()
  })
})