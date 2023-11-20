import { EmptyFeed } from "../../src/components/EmptyFeed/EmptyFeed";
import Global from "../../src/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const MockEmptyFeed = () => {
  return (
    <BrowserRouter>
      <Global />
      <EmptyFeed />
    </BrowserRouter>
  )
}

describe("Empty Feed component", () => {
  it("render empty feed", () => {
    cy.mount(<MockEmptyFeed />)
  })
})