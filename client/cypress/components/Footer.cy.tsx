import { BrowserRouter } from "react-router-dom";
import { Footer } from "../../src/components/Footer/Footer";
import Global from "../../src/GlobalStyles";

const MockFooter = () => {
  return (
    <BrowserRouter>
      <Global />
      <Footer />
    </BrowserRouter>
  )
}

describe("Footer Component", () => {
  it("should render footer", () => {
    cy.viewport('iphone-x')
    cy.mount(<MockFooter />)
  })
})