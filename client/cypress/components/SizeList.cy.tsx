import Global from "../../src/GlobalStyles";
import { SizeList } from "../../src/components/SizeList/SizeList";

type Props = {
  type: string,
  sizesArray: {
    quantity: string
  }[]
}

const MockSizeList = ({ type, sizesArray }: Props) => {

  

  return (
    <>
      <Global />
      <SizeList changeSize={(e) => e} sizes={sizesArray} type={type}/>
    </>
  )
}

describe("SizeList component", () => {
  const fullSizesArray = [
    {
      quantity: "5"
    },
    {
      quantity: "5"
    },
    {
      quantity: "6"
    },
    {
      quantity: "5"
    },
    {
      quantity: "5"
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
      quantity: "5"
    },
    {
      quantity: "5"
    },
    {
      quantity: "4"
    },
    {
      quantity: "7"
    },
    {
      quantity: "6"
    },
    {
      quantity: "7"
    },
    {
      quantity: "5"
    },
    {
      quantity: "3"
    },
    {
      quantity: "5"
    },
    {
      quantity: "6"
    },
    {
      quantity: "5"
    },
    {
      quantity: "5"
    },
  ]

  const lowQuantitySizesArray = [
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
    {
      quantity: "2"
    },
  ]

  it("render size list for slides with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="slide" sizesArray={fullSizesArray} />)
    cy.contains("4").click()
    cy.contains("5").click()
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

  it("render size list for foam rnnrs with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="foam" sizesArray={fullSizesArray} />)
    cy.contains("4").click()
    cy.contains("5").click()
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

  it("render size list for yeezys with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="yeezy" sizesArray={fullSizesArray} />)
    cy.contains("4").click()
    cy.contains("4.5").click()
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
    cy.contains("12").click()
    cy.contains("13").click()
    cy.contains("14").click()
    cy.contains("15").click()
  })

  it("render size list for mens with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="m" sizesArray={fullSizesArray} />)
    cy.contains("7.5").click()
    cy.contains("8").click()
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

  it("render size list for womens with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="w" sizesArray={fullSizesArray} />)
    cy.contains("5W").click()
    cy.contains("5.5W").click()
    cy.contains("6W").click()
    cy.contains("6.5W").click()
    cy.contains("7W").click()
    cy.contains("7.5W").click()
    cy.contains("8W").click()
    cy.contains("8.5W").click()
    cy.contains("9W").click()
    cy.contains("9.5W").click()
    cy.contains("10W").click()
    cy.contains("10.5W").click()
    cy.contains("11W").click()
    cy.contains("11.5W").click()
    cy.contains("12W").click()
  })

  it("render size list for grade school with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="gs" sizesArray={fullSizesArray} />)
    cy.contains("3.5").click()
    cy.contains("4").click()
    cy.contains("4.5").click()
    cy.get("#5").click()
    cy.contains("5.5").click()
    cy.contains("6").click()
    cy.contains("6.5").click()
    cy.contains("7").click()
  })

  it("render size list for preschool with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="ps" sizesArray={fullSizesArray} />)
    cy.contains("10.5C").click()
    cy.contains("11C").click()
    cy.contains("11.5C").click()
    cy.contains("12C").click()
    cy.contains("12.5C").click()
    cy.contains("13C").click()
    cy.contains("13.5C").click()
    cy.contains("1Y").click()
    cy.contains("1.5Y").click()
    cy.contains("2Y").click()
    cy.contains("2.5Y").click()
    cy.contains("3Y").click()
  })

  it("render size list for toddler with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="td" sizesArray={fullSizesArray} />)
    cy.contains("2C").click()
    cy.contains("2.5C").click()
    cy.contains("3C").click()
    cy.contains("3.5C").click()
    cy.contains("4C").click()
    cy.contains("4.5C").click()
    cy.get("#5C").click()
    cy.contains("5.5C").click()
    cy.contains("6C").click()
    cy.contains("6.5C").click()
    cy.contains("7C").click()
    cy.contains("7.5C").click()
    cy.contains("8").click()
    cy.contains("8.5C").click()
    cy.contains("9C").click()
    cy.contains("9.5C").click()
    cy.contains("10C").click()
  })

  it("render size list for slides with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="slide" sizesArray={lowQuantitySizesArray} />)
    cy.get('#4').should("have.text", "4Low Stock!")
    cy.get('#5').should("have.text", "5Low Stock!")
    cy.get('#6').should("have.text", "6Low Stock!")
    cy.get('#7').should("have.text", "7Low Stock!")
    cy.get('#8').should("have.text", "8Low Stock!")
    cy.get('#9').should("have.text", "9Low Stock!")
    cy.get('#10').should("have.text", "10Low Stock!")
    cy.get('#11').should("have.text", "11Low Stock!")
    cy.get('#12').should("have.text", "12Low Stock!")
    cy.get('#13').should("have.text", "13Low Stock!")
    cy.get('#14').should("have.text", "14Low Stock!")
    cy.get('#15').should("have.text", "15Low Stock!")
  })

  it("render size list for foam rnnrs with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="foam" sizesArray={lowQuantitySizesArray} />)
    cy.get('#4').should("have.text", "4Low Stock!")
    cy.get('#5').should("have.text", "5Low Stock!")
    cy.get('#6').should("have.text", "6Low Stock!")
    cy.get('#7').should("have.text", "7Low Stock!")
    cy.get('#8').should("have.text", "8Low Stock!")
    cy.get('#9').should("have.text", "9Low Stock!")
    cy.get('#10').should("have.text", "10Low Stock!")
    cy.get('#11').should("have.text", "11Low Stock!")
    cy.get('#12').should("have.text", "12Low Stock!")
    cy.get('#13').should("have.text", "13Low Stock!")
    cy.get('#14').should("have.text", "14Low Stock!")
    cy.get('#15').should("have.text", "15Low Stock!")
  })

  it("render size list for yeezys with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="yeezy" sizesArray={lowQuantitySizesArray} />)
    cy.get('#4').should("have.text", "4Low Stock!")
    cy.contains("4.5").should("have.text", "4.5Low Stock!")
    cy.get('#5').should("have.text", "5Low Stock!")
    cy.contains("5.5").should("have.text", "5.5Low Stock!")
    cy.contains("6").should("have.text", "6Low Stock!")
    cy.contains("6.5").should("have.text", "6.5Low Stock!")
    cy.contains("7").should("have.text", "7Low Stock!")
    cy.contains("7.5").should("have.text", "7.5Low Stock!")
    cy.contains("8").should("have.text", "8Low Stock!")
    cy.contains("8.5").should("have.text", "8.5Low Stock!")
    cy.contains("9").should("have.text", "9Low Stock!")
    cy.contains("9.5").should("have.text", "9.5Low Stock!")
    cy.get('#10').should("have.text", "10Low Stock!")
    cy.contains("10.5").should("have.text", "10.5Low Stock!")
    cy.get('#11').should("have.text", "11Low Stock!")
    cy.contains("11.5").should("have.text", "11.5Low Stock!")
    cy.get('#12').should("have.text", "12Low Stock!")
    cy.get('#13').should("have.text", "13Low Stock!")
    cy.get('#14').should("have.text", "14Low Stock!")
    cy.get('#15').should("have.text", "15Low Stock!")
  })

  it("render size list for mens with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="m" sizesArray={lowQuantitySizesArray} />)
    cy.contains("7.5").should("have.text", "7.5Low Stock!")
    cy.contains("8").should("have.text", "8Low Stock!")
    cy.contains("8.5").should("have.text", "8.5Low Stock!")
    cy.get('#9').should("have.text", "9Low Stock!")
    cy.contains("9.5").should("have.text", "9.5Low Stock!")
    cy.get('#10').should("have.text", "10Low Stock!")
    cy.contains("10.5").should("have.text", "10.5Low Stock!")
    cy.get('#11').should("have.text", "11Low Stock!")
    cy.contains("11.5").should("have.text", "11.5Low Stock!")
    cy.get('#12').should("have.text", "12Low Stock!")
    cy.get('#13').should("have.text", "13Low Stock!")
    cy.get('#14').should("have.text", "14Low Stock!")
    cy.get('#15').should("have.text", "15Low Stock!")
  })

  it("render size list for womens with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="w" sizesArray={lowQuantitySizesArray} />)
    cy.contains("5W").should("have.text", "5W (3.5 M)Low Stock!")
    cy.contains("5.5W").should("have.text", "5.5W (4 M)Low Stock!")
    cy.contains("6W").should("have.text", "6W (4.5 M)Low Stock!")
    cy.contains("6.5W").should("have.text", "6.5W (5 M)Low Stock!")
    cy.contains("7W").should("have.text", "7W (5.5 M)Low Stock!")
    cy.contains("7.5W").should("have.text", "7.5W (6 M)Low Stock!")
    cy.contains("8W").should("have.text", "8W (6.5 M)Low Stock!")
    cy.contains("8.5W").should("have.text", "8.5W (7 M)Low Stock!")
    cy.contains("9W").should("have.text", "9W (7.5 M)Low Stock!")
    cy.contains("9.5W").should("have.text", "9.5W (8 M)Low Stock!")
    cy.contains("10W").should("have.text", "10W (8.5 M)Low Stock!")
    cy.contains("10.5W").should("have.text", "10.5W (9 M)Low Stock!")
    cy.contains("11W").should("have.text", "11W (9.5 M)Low Stock!")
    cy.contains("11.5W").should("have.text", "11.5W (10 M)Low Stock!")
    cy.contains("12W").should("have.text", "12W (10.5 M)Low Stock!")
  })

  it("render size list for grade school with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="gs" sizesArray={lowQuantitySizesArray} />)
    cy.contains("3.5").should("have.text", "3.5Low Stock!")
    cy.contains("4").should("have.text", "4Low Stock!")
    cy.contains("4.5").should("have.text", "4.5Low Stock!")
    cy.get('#5').should("have.text", "5Low Stock!")
    cy.contains("5.5").should("have.text", "5.5Low Stock!")
    cy.get('#6').should("have.text", "6Low Stock!")
    cy.contains("6.5").should("have.text", "6.5Low Stock!")
    cy.get('#7').should("have.text", "7Low Stock!")
  })

  it("render size list for preschool with low quantity for all sizes", () => {
    cy.mount(<MockSizeList type="ps" sizesArray={lowQuantitySizesArray} />)
    cy.contains("10.5C").should("have.text", "10.5CLow Stock!")
    cy.contains("11C").should("have.text", "11CLow Stock!")
    cy.contains("11.5C").should("have.text", "11.5CLow Stock!")
    cy.contains("12C").should("have.text", "12CLow Stock!")
    cy.contains("12.5C").should("have.text", "12.5CLow Stock!")
    cy.contains("13C").should("have.text", "13CLow Stock!")
    cy.contains("13.5C").should("have.text", "13.5CLow Stock!")
    cy.contains("1Y").should("have.text", "1YLow Stock!")
    cy.contains("1.5Y").should("have.text", "1.5YLow Stock!")
    cy.contains("2Y").should("have.text", "2YLow Stock!")
    cy.contains("2.5Y").should("have.text", "2.5YLow Stock!")
    cy.contains("3Y").should("have.text", "3YLow Stock!")
  })

  it("render size list for toddler with quantity for all sizes", () => {
    cy.mount(<MockSizeList type="td" sizesArray={lowQuantitySizesArray} />)
    cy.contains("2C").should("have.text", "2CLow Stock!")
    cy.contains("2.5C").should("have.text", "2.5CLow Stock!")
    cy.contains("3C").should("have.text", "3CLow Stock!")
    cy.contains("3.5C").should("have.text", "3.5CLow Stock!")
    cy.contains("4C").should("have.text", "4CLow Stock!")
    cy.contains("4.5C").should("have.text", "4.5CLow Stock!")
    cy.get("#5C").should("have.text", "5CLow Stock!")
    cy.contains("5.5C").should("have.text", "5.5CLow Stock!")
    cy.contains("6C").should("have.text", "6CLow Stock!")
    cy.contains("6.5C").should("have.text", "6.5CLow Stock!")
    cy.contains("7C").should("have.text", "7CLow Stock!")
    cy.contains("7.5C").should("have.text", "7.5CLow Stock!")
    cy.contains("8").should("have.text", "8CLow Stock!")
    cy.contains("8.5C").should("have.text", "8.5CLow Stock!")
    cy.contains("9C").should("have.text", "9CLow Stock!")
    cy.contains("9.5C").should("have.text", "9.5CLow Stock!")
    cy.contains("10C").should("have.text", "10CLow Stock!")
  })
})