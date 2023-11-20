import { BrowserRouter } from "react-router-dom";
import { Pagination } from "../../src/components/Pagination/Pagination";
import Global from "../../src/GlobalStyles";

const MockPagination = () => {
  return (
    <BrowserRouter>
      <Global />
      <Pagination pageCount={5}/>
    </BrowserRouter>
  )
}

describe("Pagination", () => {
  it("render pagination with 5 pages", () => {
    cy.mount(<MockPagination />)

    cy.get('[data-cy="button-0"]').click()
  })
})
