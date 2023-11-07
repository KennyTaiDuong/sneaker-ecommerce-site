import { BrowserRouter } from "react-router-dom";
import { CardSection } from "../../src/components/Products/CardSection";
import Global from "../../src/GlobalStyles";

const MockCardSection = () => {
  return (
    <BrowserRouter>
      <Global />
      <CardSection productsArray={[]} brand="nike" logo=""/>
    </BrowserRouter>
  )
}

describe("Card section", () => {
  it("render card section", () => {
    cy.mount(<MockCardSection />)
  })
})