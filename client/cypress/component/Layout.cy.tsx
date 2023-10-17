import { BrowserRouter } from "react-router-dom"
import { Layout } from "../../src/components/Layout/Layout"
import Global from "../../src/GlobalStyles"

const MockLayout = () => {
  return (
    <BrowserRouter>
    <Global />
      <Layout />
    </BrowserRouter>
  )
}

describe("Testing functionality of layour", () => {
  it("should render component", async () => {
    cy.viewport('iphone-x')
    cy.mount(<MockLayout />)
  })
})