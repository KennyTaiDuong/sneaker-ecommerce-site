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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="5"
        >
          5
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="6"
        >
          6
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="7"
        >
          7
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="8"
        >
          8
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="9"
        >
          9
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="10"
        >
          10
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="11"
        >
          11
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="12"
        >
          12
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="13"
        >
          13
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="14"
        >
          14
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="15"
        >
          15
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="4.5"
        >
          4.5
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="5"
        >
          5
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="5.5"
        >
          5.5
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="6"
        >
          6
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="6.5"
        >
          6.5
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="7"
        >
          7
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="7.5"
        >
          7.5
          {/* displays warning if certain size has 3 or less */}
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="8"
        >
          8
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="8.5"
        >
          8.5
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="9"
        >
          9
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="9.5"
        >
          9.5
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="10"
        >
          10
          {sizes[12].quantity <= "2" && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="10.5"
        >
          10.5
          {sizes[13].quantity <= "2" && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="11"
        >
          11
          {sizes[14].quantity <= "2" && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[15].quantity === "0"}
          id="11.5"
        >
          11.5
          {sizes[15].quantity <= "2" && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[16].quantity === "0"}
          id="12"
        >
          12
          {sizes[16].quantity <= "2" && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[17].quantity === "0"}
          id="13"
        >
          13
          {sizes[17].quantity <= "2" && sizes[17].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[18].quantity === "0"}
          id="14"
        >
          14
          {sizes[18].quantity <= "2" && sizes[18].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[19].quantity === "0"}
          id="15"
        >
          15
          {sizes[19].quantity <= "2" && sizes[19].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          {/* displays warning if certain size has 3 or less */}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="8"
        >
          8
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="8.5"
        >
          8.5
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="9"
        >
          9
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="9.5"
        >
          9.5
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="10"
        >
          10
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="10.5"
        >
          10.5
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="11"
        >
          11
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="11.5"
        >
          11.5
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="12"
        >
          12
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="13"
        >
          13
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="14"
        >
          14
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="15"
        >
          15
          {sizes[12].quantity <= "2" && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="5.5W"
        >
          5.5W (4 M)
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="6W"
        >
          6W (4.5 M)
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="6.5W"
        >
          6.5W (5 M)
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="7W"
        >
          7W (5.5 M)
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="7.5W"
        >
          7.5W (6 M)
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="8W"
        >
          8W (6.5 M)
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="8.5W"
        >
          8.5W (7 M)
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="9W"
        >
          9W (7.5 M)
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="9.5W"
        >
          9.5W (8 M)
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="10W"
        >
          10W (8.5 M)
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="10.5W"
        >
          10.5W (9 M)
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="11W"
        >
          11W (9.5 M)
          {sizes[12].quantity <= "2" && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="11.5W"
        >
          11.5W (10 M)
          {sizes[13].quantity <= "2" && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="12W"
        >
          12W (10.5 M)
          {sizes[14].quantity <= "2" && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="4"
        >
          4
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="4.5"
        >
          4.5
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="5"
        >
          5
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="5.5"
        >
          5.5
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="6"
        >
          6
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="6.5"
        >
          6.5
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="7"
        >
          7
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="11C"
        >
          11C
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="11.5C"
        >
          11.5C
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="12C"
        >
          12C
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="12.5C"
        >
          12.5C
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="13C"
        >
          13C
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="13.5C"
        >
          13.5C
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="1Y"
        >
          1Y
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="1.5Y"
        >
          1.5Y
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="2Y"
        >
          2Y
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="2.5Y"
        >
          2.5Y
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="3Y"
        >
          3Y
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
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
          {sizes[0].quantity <= "2" && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[1].quantity === "0"}
          id="2.5C"
        >
          2.5C
          {sizes[1].quantity <= "2" && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[2].quantity === "0"}
          id="3C"
        >
          3C
          {sizes[2].quantity <= "2" && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[3].quantity === "0"}
          id="3.5C"
        >
          3.5C
          {sizes[3].quantity <= "2" && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[4].quantity === "0"}
          id="4C"
        >
          4C
          {sizes[4].quantity <= "2" && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[5].quantity === "0"}
          id="4.5C"
        >
          4.5C
          {sizes[5].quantity <= "2" && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[6].quantity === "0"}
          id="5C"
        >
          5C
          {sizes[6].quantity <= "2" && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[7].quantity === "0"}
          id="5.5C"
        >
          5.5C
          {sizes[7].quantity <= "2" && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[8].quantity === "0"}
          id="6C"
        >
          6C
          {sizes[8].quantity <= "2" && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[9].quantity === "0"}
          id="6.5C"
        >
          6.5C
          {sizes[9].quantity <= "2" && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[10].quantity === "0"}
          id="7C"
        >
          7C
          {sizes[10].quantity <= "2" && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[11].quantity === "0"}
          id="7.5C"
        >
          7.5C
          {sizes[11].quantity <= "2" && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[12].quantity === "0"}
          id="8C"
        >
          8C
          {sizes[12].quantity <= "2" && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[13].quantity === "0"}
          id="8.5C"
        >
          8.5C
          {sizes[13].quantity <= "2" && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[14].quantity === "0"}
          id="9C"
        >
          9C
          {sizes[14].quantity <= "2" && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[15].quantity === "0"}
          id="9.5C"
        >
          9.5C
          {sizes[15].quantity <= "2" && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
        <DropdownItem 
          onClick={(event) => changeSize(event)} 
          disabled={sizes[16].quantity === "0"}
          id="10C"
        >
          10C
          {sizes[16].quantity <= "2" && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
        </DropdownItem>
      </SizeDropdown>
    )
  }
}