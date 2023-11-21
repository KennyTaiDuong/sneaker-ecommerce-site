import Global from "../../src/GlobalStyles";
import { SizeList } from "../../src/components/SizeList/SizeList";

type Props = {
  type: string,
  length: number
}

const MockSizeList = ({ type, length }: Props) => {

  const sizesArray = [
    {
      quantity: "0"
    },
    {
      quantity: "0"
    },
    {
      quantity: "6"
    },
    {
      quantity: "2"
    },
    {
      quantity: "1"
    },
    {
      quantity: "5"
    },
    {
      quantity: "3"
    },
    {
      quantity: "6"
    },
    {
      quantity: "1"
    },
    {
      quantity: "2"
    },
    {
      quantity: "4"
    },
    {
      quantity: "2"
    },
    {
      quantity: "6"
    },
    {
      quantity: "1"
    },
    {
      quantity: "5"
    },
    {
      quantity: "3"
    },
    {
      quantity: "0"
    },
    {
      quantity: "1"
    },
    {
      quantity: "5"
    },
    {
      quantity: "0"
    },
  ]

  return (
    <>
      <Global />
      <SizeList changeSize={(e) => e} sizes={sizesArray} type={type}/>
    </>
  )
}

describe("SizeList component", () => {

  it("render size list for slides", () => {
    cy.mount(<MockSizeList type="slide" length={13} />)
    cy.contains("4").should("be.disabled")
    cy.contains("5").should("be.disabled")
    cy.contains("6").click()
    cy.contains("7").click()
    cy.contains("8").click()
    cy.contains("9").click()
    cy.contains("10").click()
    cy.contains("11").click()
    cy.contains("12").click()
    cy.contains("13").click()
    cy.contains("14").click()
    cy.contains("15").click()
  })

  it("render size list for foam rnnrs", () => {
    cy.mount(<MockSizeList type="foam" length={13} />)
    cy.contains("4").should("be.disabled")
    cy.contains("5").should("be.disabled")
    cy.contains("6").click()
    cy.contains("7").click()
    cy.contains("8").click()
    cy.contains("9").click()
    cy.contains("10").click()
    cy.contains("11").click()
    cy.contains("12").click()
    cy.contains("13").click()
    cy.contains("14").click()
    cy.contains("15").click()
  })

  it("render size list for yeezys", () => {
    cy.mount(<MockSizeList type="yeezy" length={20} />)
    cy.contains("4").should("be.disabled")
    cy.contains("4.5").should("be.disabled")
    cy.get("#5").click()
    cy.contains("5.5").click()
    cy.contains("6").click()
    cy.contains("6.5").click()
    cy.contains("7").click()
    cy.contains("7.5").click()
    cy.contains("8").click()
    cy.contains("8.5").click()
    cy.contains("9").click()
    cy.contains("9.5").click()
    cy.contains("10").click()
    cy.contains("10.5").click()
    cy.contains("11").click()
    cy.contains("11.5").click()
    cy.contains("12").should("be.disabled")
    cy.contains("13").click()
    cy.contains("14").click()
    cy.contains("15").should("be.disabled")
  })

  it("render size list for mens", () => {
    cy.mount(<MockSizeList type="m" length={13} />)
    cy.contains("7.5").should("be.disabled")
    cy.contains("8").should("be.disabled")
    cy.contains("8.5").click()
    cy.contains("9").click()
    cy.contains("9.5").click()
    cy.contains("10").click()
    cy.contains("10.5").click()
    cy.contains("11").click()
    cy.contains("11.5").click()
    cy.contains("12").click()
    cy.contains("13").click()
    cy.contains("14").click()
    cy.contains("15").click()
  })

  it("render size list for womens", () => {
    cy.mount(<MockSizeList type="w" length={15} />)
    cy.contains("7.5W").click()
  })

  it("render size list for grade school", () => {
    cy.mount(<MockSizeList type="gs" length={8} />)
    cy.contains("6.5").click()
  })

  it("render size list for preschool", () => {
    cy.mount(<MockSizeList type="ps" length={12} />)
    cy.contains("12C").click()
  })

  it("render size list for toddler", () => {
    cy.mount(<MockSizeList type="td" length={17} />)
    cy.contains("3C").click()
  })
})