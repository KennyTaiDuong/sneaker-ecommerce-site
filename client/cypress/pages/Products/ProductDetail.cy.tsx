import { MemoryRouter } from "react-router-dom";
import { ProductDetail } from "../../../src/pages/Product/ProductDetail";
import Global from "../../../src/GlobalStyles";

const MockProductDetail = () => {

  return (
    <MemoryRouter initialEntries={["/"]}>
      <Global />
      <ProductDetail />
    </MemoryRouter>
  )
}

describe("Product detail page", () => {
  const sizesArray = [
    {
      quantity: "3",
      size: "7.5"
    },
    {
      quantity: "3",
      size: "8"
    },
    {
      quantity: "3",
      size: "8.5"
    },
    {
      quantity: "3",
      size: "9"
    },
    {
      quantity: "3",
      size: "9.5"
    },
    {
      quantity: "3",
      size: "10"
    },
    {
      quantity: "3",
      size: "10.5"
    },
    {
      quantity: "3",
      size: "11"
    },

    {
      quantity: "3",
      size: "11.5"
    },
    {
      quantity: "3",
      size: "12"
    },
    {
      quantity: "3",
      size: "13"
    },
    {
      quantity: "3",
      size: "14"
    },
    {
      quantity: "3",
      size: "15"
    },
  ]

  beforeEach(() => {
    cy.viewport("iphone-x")
    cy.mount(<MockProductDetail />)
    cy.intercept("GET", "**/api/products/**", {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        sku: "DD1391-100",
        name: 'Nike Dunk Low "Panda"',
        price: 200,
        sizes: sizesArray,
        category: "m",
        images: "https://www.kicksonfire.com/wp-content/uploads/2022/01/Nike-Dunk-Low-Panda-DD1391-100-1.jpeg"
      },
    })
  })

  it("should select size 7.5 and have it displayed on screen", () => {
    cy.contains('Nike Dunk Low "Panda"').should("be.visible")
    cy.contains("Select Size").click()
    cy.contains("7.5").click()
    cy.get('[data-cy="size-display"]').should("have.text", "7.5")
  })

  it("should display error message when size not selected", () => {
    cy.get('[data-cy="cart-btn"]').click()
    cy.contains("User not logged in!").should("be.visible")
  })

})
