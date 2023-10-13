import { Layout } from "../../src/components/Layout/Layout"

describe("Testing functionality of layour", () => {
  it("should render component", async () => {
    cy.mount(<Layout />)
  })
})