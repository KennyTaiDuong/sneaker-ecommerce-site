import { BrowserRouter } from "react-router-dom";
import { ProductDetail } from "../../../src/pages/Product/ProductDetail";
import Global from "../../../src/GlobalStyles";

const MockProductDetail = () => {
  return (
    <BrowserRouter>
      <Global />
      <ProductDetail />
    </BrowserRouter>
  )
}

describe("Product detail page", () => {
  it("render product detail page", () => {
    cy.mount(<MockProductDetail />)
  })
})