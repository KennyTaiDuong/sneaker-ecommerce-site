import Global from "../../src/GlobalStyles";
import { Card } from "../../src/components/Products/Card";
import { BrowserRouter } from "react-router-dom";

const MockCard = () => {
  return (
    <BrowserRouter>
      <Global />
      <Card name={`Yeezy Slide "Onyx"`} price={200} image="https://images.stockx.com/images/adidas-Yeezy-Slide-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1646687426" sku={"HQ6448"}/>
    </BrowserRouter>
  )
}

describe("Card component", () => {
  it("should mount card", () => {
    cy.mount(<MockCard />)

    // Render correct name prop
    cy.get('[data-cy="name"]').contains('Yeezy Slide "Onyx"')

    // Render correct price prop
    cy.get('[data-cy="price"]').contains('200')
  })
})