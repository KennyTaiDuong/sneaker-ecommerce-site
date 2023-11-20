import { BrowserRouter } from "react-router-dom";
import { CardSection } from "../../src/components/Products/CardSection";
import Global from "../../src/GlobalStyles";

const mockProducts = [
  {
    sku: "DD1391-100",
    name: `Nike Dunk Low "Panda"`,
    price: 200,
    category: "m",
    images: "https://www.kicksonfire.com/wp-content/uploads/2022/01/Nike-Dunk-Low-Panda-DD1391-100-1.jpeg",
    sizes: []
  },
  {
    sku: "DD1391-104",
    name: `Nike Dunk Low "Court Purple"`,
    price: 250,
    category: "m",
    images: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_nike-dunk-low-championship-court-purple.jpeg",
    sizes: []
  },
  {
    sku: "DCT8532-104",
    name: `Jordan 3 "UNC"`,
    price: 500,
    category: "m",
    images: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-3-unc.jpg",
    sizes: []
  },
  {
    sku: "DH6927-111",
    name: `Jordan 4 "Military Black"`,
    price: 500,
    category: "m",
    images: "https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_air-jordan-4-military-black.jpeg",
    sizes: []
  },
  {
    sku: "F36640",
    name: `Yeezy 500 "Utility Black"`,
    price: 350,
    category: "m",
    images: "https://www.kicksonfire.com/wp-content/uploads/2020/11/adidas-Yeezy-500-Utility-Black-2020-Restock-1.jpg?x58464",
    sizes: []
  },
  {
    sku: "CP9654",
    name: `Yeezy 350 "Zebra"`,
    price: 400,
    category: "m",
    images: "https://m.media-amazon.com/images/I/61fV7hEoklL._AC_UY1000_.jpg",
    sizes: []
  }
]

const MockCardSection = () => {
  

  return (
    <BrowserRouter>
      <Global />
      <CardSection productsArray={mockProducts} brand="Nike" logo=""/>
      <CardSection productsArray={mockProducts} brand="Jordan" logo=""/>
      <CardSection productsArray={mockProducts} brand="Yeezy" logo=""/>
    </BrowserRouter>
  )
}

describe("Card section", () => {
  it("render each card section with different brands", () => {
    cy.mount(<MockCardSection />)
  })
})