import { MemoryRouter } from "react-router-dom";
import { Products } from "../../../src/pages/Product/Products";
import Global from "../../../src/GlobalStyles";
import { ProductsContext } from "../../../src/components/Layout/ProductsLayout";

type Size = {
  size: string,
  quantity: string
}

type Product = {
  sku: string;
  name: string;
  price: number;
  sizes: Size[];
  category: "m" | "w" | "gs" | "ps" | "td" | "yeezy" | "slide" | "foam";
  images: string;
}

type Props = {
  searchQuery: string
}

const MockProducts = ({ searchQuery }: Props) => {
  const allProducts: Product[] = [
    {
      sku: "CU1726-100",
      name: 'Nike Dunk Low "Kentucky"',
      price: 300,
      sizes: [
        {
          quantity: "3",
          size: "8"
        },
        {
          quantity: "2",
          size: "8.5"
        }
      ],
      category: "m",
      images: "https://image.goat.com/attachments/product_template_additional_pictures/images/079/877/500/medium/603667_03.jpg.jpeg?1666623686"
    },
    {
      sku: "DD1391-100",
      name: 'Nike Dunk Low "Panda"',
      price: 200,
      sizes: [
        {
          quantity: "3",
          size: "8"
        },
        {
          quantity: "2",
          size: "8.5"
        }
      ],
      category: "m",
      images: "https://www.kicksonfire.com/wp-content/uploads/2022/01/Nike-Dunk-Low-Panda-DD1391-100-1.jpeg"
    },
    {
      sku: "DH6927-111",
      name: 'Jordan 4 "Military Black"',
      price: 500,
      sizes: [
        {
          quantity: "3",
          size: "8"
        },
        {
          quantity: "2",
          size: "8.5"
        }
      ],
      category: "m",
      images: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-4-military-black.jpeg"
    }
  ]

  return (
    <MemoryRouter initialEntries={[searchQuery]}>
      <Global />
      <ProductsContext.Provider value={{ allProducts }}>
        <Products />
      </ProductsContext.Provider>
    </MemoryRouter>
  )
}

describe("Products Page", () => {

  it("should render empty page", () => {
    cy.mount(<MockProducts searchQuery="/?page=1&query=lsod"/>)
    cy.contains("No products found!").should("be.visible")
  })

  it("should render first page with all test products", () => {
    cy.mount(<MockProducts searchQuery="/?page=1"/>)
    cy.get(`[data-cy="button-0"]`).should("be.visible")
    cy.contains("Kentucky").should("be.visible")
    cy.contains("Panda").should("be.visible")
  })

  it("should render only brand passed in search query", () => {
    cy.mount(<MockProducts searchQuery="/?page=1&brand=jordan"/>)
    cy.contains("Jordan 4 \"Military Black\"").should("be.visible")
  })

  it("should render products that match query", () => {
    cy.mount(<MockProducts searchQuery="/?page=1&query=dunk"/>)
    cy.contains("Kentucky").should("be.visible")
  })

  it("should render sidebar in tablet/bigger screen size", () => {
    cy.mount(<MockProducts searchQuery="/?page=1&query=dunk"/>)
    cy.get('[data-cy="close-button"]')
  })
})