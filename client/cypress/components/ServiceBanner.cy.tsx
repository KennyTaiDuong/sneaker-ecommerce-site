import { ServiceBanner } from "../../src/components/ServiceBanner/ServiceBanner";
import { BrowserRouter } from "react-router-dom";
import Global from "../../src/GlobalStyles";

const MockServiceBanner = () => {
  return (
    <BrowserRouter>
      <Global />
      <ServiceBanner />
    </BrowserRouter>
  )
}

describe("Service Banner", () => {
  it("render service banner", () => {
    cy.mount(<MockServiceBanner />)
  })
})