import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";
import { Sidebar } from "../../src/components/Sidebar/Sidebar";

const MockSidebar = () => {
  return (
    <BrowserRouter>
      <Global />
      <Sidebar setMenuIsOpen={() => cy.stub()}/>
    </BrowserRouter>
  )
}

describe("Sidebar component", () => {
  it("should mount sidebar", () => {
    cy.mount(<MockSidebar />)
    cy.get('[data-cy="close-button"]').click()
  })
  
  it("should navigate to home page", () => {
    cy.mount(<MockSidebar />)
    cy.get('#aksupplied').click()
    cy.url().should("eq", "http://localhost:5173/")
  })

  it("should navigate to all products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?page=1")
  })

  it("should navigate to Nike products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=nike&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=nike&page=1")
  })

  it("should navigate to Jordan products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=jordan&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=jordan&page=1")
  })

  it("should navigate to Yeezy products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=yeezy&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=yeezy&page=1")
  })

  it("should navigate to Adidas products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=adidas&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=adidas&page=1")
  })

  it("should navigate to New Balance products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=new+balance&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=new+balance&page=1")
  })

  it("should navigate to Asics products", () => {
    cy.mount(<MockSidebar />)
    cy.get('[href="/products?brand=asics&page=1"]').click()
    cy.url().should("eq", "http://localhost:5173/products?brand=asics&page=1")
  })
})