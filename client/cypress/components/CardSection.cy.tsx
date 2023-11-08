import { BrowserRouter } from "react-router-dom";
import { CardSection } from "../../src/components/Products/CardSection";
import Global from "../../src/GlobalStyles";

const MockCardSection = () => {
  const mockProducts = [
    {
      sku: "DD1391-100",
      name: `Nike Dunk Low "Panda"`,
      price: 200,
      category: "m",
      images: "https://www.kicksonfire.com/wp-content/uploads/2022/01/Nike-Dunk-Low-Panda-DD1391-100-1.jpeg",
      sizes: []
    }
  ]

  return (
    <BrowserRouter>
      <Global />
      <CardSection productsArray={mockProducts} brand="Nike" logo=""/>
    </BrowserRouter>
  )
}

describe("Card section", () => {
  it("render card section", () => {
    cy.mount(<MockCardSection />)
  })
})