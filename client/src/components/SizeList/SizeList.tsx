import styled from "styled-components";

const SizeDropdown = styled.ul`
  list-style: none;
  border: 1px solid #888;
  background-color: white;
  width: 100%;
  top: 55px;
  max-height: 9.75rem;
  overflow: scroll;
`

const DropdownItem = styled.button`
  width: 100%;
  border: 1px solid rgb(216, 216, 216);
  padding: 0.5rem;
  display: flex; 
  justify-content: space-between;
`

const WarningText = styled.p`
  color: red;
`

type Props = {
  type: string,
  sizes: {
    quantity: string
  }[],
  changeSize: (e: any) => {}
}

export const SizeList = ({ type, sizes, changeSize }: Props) => {
  // Display size range for mens/wmns/kids/infants/yeezys/slides

  if (type === "slide" || type === "foam") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="4"
        >
          4
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="5"
        >
          5
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="6"
        >
          6
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="7"
        >
          7
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="8"
        >
          8
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="9"
        >
          9
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="10"
        >
          10
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="11"
        >
          11
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="12"
        >
          12
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="13"
        >
          13
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="14"
        >
          14
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="15"
        >
          15
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  } else if (type === "yeezy") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="4"
        >
          4
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="4.5"
        >
          4.5
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="5"
        >
          5
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="5.5"
        >
          5.5
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="6"
        >
          6
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="6.5"
        >
          6.5
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="7"
        >
          7
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="7.5"
        >
          7.5
          {/* displays warning if certain size has 3 or less */}
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="8"
        >
          8
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="8.5"
        >
          8.5
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="9"
        >
          9
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="9.5"
        >
          9.5
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="10"
        >
          10
          {parseInt(sizes[12].quantity) <= 2 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="10.5"
        >
          10.5
          {parseInt(sizes[13].quantity) <= 2 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="11"
        >
          11
          {parseInt(sizes[14].quantity) <= 2 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[15].quantity === "0"}
          id="11.5"
        >
          11.5
          {parseInt(sizes[15].quantity) <= 2 && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[16].quantity === "0"}
          id="12"
        >
          12
          {parseInt(sizes[16].quantity) <= 2 && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[17].quantity === "0"}
          id="13"
        >
          13
          {parseInt(sizes[17].quantity) <= 2 && sizes[17].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[18].quantity === "0"}
          id="14"
        >
          14
          {parseInt(sizes[18].quantity) <= 2 && sizes[18].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[19].quantity === "0"}
          id="15"
        >
          15
          {parseInt(sizes[19].quantity) <= 2 && sizes[19].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  } else if (type === "m") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="7.5"
        >
          7.5
          {/* displays warning if certain size has 3 or less */}
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="8"
        >
          8
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="8.5"
        >
          8.5
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="9"
        >
          9
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="9.5"
        >
          9.5
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="10"
        >
          10
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="10.5"
        >
          10.5
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="11"
        >
          11
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="11.5"
        >
          11.5
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="12"
        >
          12
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="13"
        >
          13
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="14"
        >
          14
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="15"
        >
          15
          {parseInt(sizes[12].quantity) <= 2 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  } else if (type === "w") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="5W"
        >
          5W (3.5 M)
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="5.5W"
        >
          5.5W (4 M)
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="6W"
        >
          6W (4.5 M)
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="6.5W"
        >
          6.5W (5 M)
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="7W"
        >
          7W (5.5 M)
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="7.5W"
        >
          7.5W (6 M)
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="8W"
        >
          8W (6.5 M)
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="8.5W"
        >
          8.5W (7 M)
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="9W"
        >
          9W (7.5 M)
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="9.5W"
        >
          9.5W (8 M)
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="10W"
        >
          10W (8.5 M)
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="10.5W"
        >
          10.5W (9 M)
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="11W"
        >
          11W (9.5 M)
          {parseInt(sizes[12].quantity) <= 2 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="11.5W"
        >
          11.5W (10 M)
          {parseInt(sizes[13].quantity) <= 2 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="12W"
        >
          12W (10.5 M)
          {parseInt(sizes[14].quantity) <= 2 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  } else if (type === "gs") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="3.5"
        >
          3.5
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="4"
        >
          4
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="4.5"
        >
          4.5
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="5"
        >
          5
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="5.5"
        >
          5.5
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="6"
        >
          6
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="6.5"
        >
          6.5
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="7"
        >
          7
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    ) 
  } else if (type === "ps") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="10.5C"
        >
          10.5C
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="11C"
        >
          11C
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="11.5C"
        >
          11.5C
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="12C"
        >
          12C
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="12.5C"
        >
          12.5C
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="13C"
        >
          13C
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="13.5C"
        >
          13.5C
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="1Y"
        >
          1Y
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="1.5Y"
        >
          1.5Y
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="2Y"
        >
          2Y
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="2.5Y"
        >
          2.5Y
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="3Y"
        >
          3Y
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  } else if (type === "td") {
    return (
      <SizeDropdown>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[0].quantity === "0"}
          id="2C"
        >
          2C
          {parseInt(sizes[0].quantity) <= 2 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="2.5C"
        >
          2.5C
          {parseInt(sizes[1].quantity) <= 2 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="3C"
        >
          3C
          {parseInt(sizes[2].quantity) <= 2 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="3.5C"
        >
          3.5C
          {parseInt(sizes[3].quantity) <= 2 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="4C"
        >
          4C
          {parseInt(sizes[4].quantity) <= 2 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="4.5C"
        >
          4.5C
          {parseInt(sizes[5].quantity) <= 2 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="5C"
        >
          5C
          {parseInt(sizes[6].quantity) <= 2 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="5.5C"
        >
          5.5C
          {parseInt(sizes[7].quantity) <= 2 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="6C"
        >
          6C
          {parseInt(sizes[8].quantity) <= 2 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="6.5C"
        >
          6.5C
          {parseInt(sizes[9].quantity) <= 2 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="7C"
        >
          7C
          {parseInt(sizes[10].quantity) <= 2 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="7.5C"
        >
          7.5C
          {parseInt(sizes[11].quantity) <= 2 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="8C"
        >
          8C
          {parseInt(sizes[12].quantity) <= 2 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="8.5C"
        >
          8.5C
          {parseInt(sizes[13].quantity) <= 2 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="9C"
        >
          9C
          {parseInt(sizes[14].quantity) <= 2 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[15].quantity === "0"}
          id="9.5C"
        >
          9.5C
          {parseInt(sizes[15].quantity) <= 2 && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[16].quantity === "0"}
          id="10C"
        >
          10C
          {parseInt(sizes[16].quantity) <= 2 && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  }
}