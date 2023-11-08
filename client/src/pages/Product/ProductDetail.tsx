import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { CartItemType, UserDataContext } from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ProductName = styled.p`
  font-weight: bold;
`

const ProductSku = styled.p`
  font-size: 0.875rem;
`

const ProductImage = styled.img`
  width: 100%;
`

const ProductPrice = styled.p`
  font-weight: 700;
`

const DropdownContainer = styled.div`
  position: relative;
`

const SizeDisplay = styled.p`
  border: 2px solid black;
  padding: 0.5rem;
`

const SizeDropdown = styled.ul`
  list-style: none;
  border: 2px solid rgb(216, 216, 216);
  position: absolute;
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

const CartButton = styled.button`
  width: 100%;
  background: rgb(0, 143, 0);
  border: none;
  font-weight: 700;
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  margin-top: 1rem;
  
`

const WarningText = styled.p`
  color: red;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`

type ProductProps = {
  name: string,
  price: number,
  sizes: {
    size: string,
    quantity: string
  }[],
  images: string,
  sku: string,
  category: "m" | "w" | "gs" | "ps" | "td" | "",
  created_on: string,
  updated_on: string,
  id: number
}

export const ProductDetail = () => {
  const { isAuthenticated } = useAuth0()
  const { id } = useParams()
  const { currentCart, currentUser, setCurrentCart } = useContext(UserDataContext)

  const [sizeListOpen, setSizeListOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState("Select Size")
  const [showMessage, setShowMessage] = useState(false)
  const [product, setProduct] = useState<ProductProps>({
    name: "",
    price: 0,
    sizes: [],
    images: "",
    sku: "",
    category: "",
    created_on: "",
    updated_on: "",
    id: 0
  })

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`)

        const data = await res.json()

        setProduct(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProduct()
  }, [])

  const { name, price, images, sku, sizes, category } = product

  const SizeList = () => {
    // Display size range for mens/wmns/kids/infants

    if (name.includes("Slide") || name.includes("Foam RNNR")) {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="4"
          >
            4
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="5"
          >
            5
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="6"
          >
            6
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="7"
          >
            7
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="8"
          >
            8
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="9"
          >
            9
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="10"
          >
            10
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="11"
          >
            11
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="12"
          >
            12
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="13"
          >
            13
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="14"
          >
            14
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="15"
          >
            15
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    } else if (name.includes("Yeezy")) {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="4"
          >
            4
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="4.5"
          >
            4.5
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="5"
          >
            5
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="5.5"
          >
            5.5
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="6"
          >
            6
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="6.5"
          >
            6.5
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="7"
          >
            7
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="7.5"
          >
            7.5
            {/* displays warning if certain size has 3 or less */}
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="8"
          >
            8
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="8.5"
          >
            8.5
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="9"
          >
            9
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="9.5"
          >
            9.5
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[12].quantity === "0"}
            id="10"
          >
            10
            {parseInt(sizes[12].quantity) <= 3 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[13].quantity === "0"}
            id="10.5"
          >
            10.5
            {parseInt(sizes[13].quantity) <= 3 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[14].quantity === "0"}
            id="11"
          >
            11
            {parseInt(sizes[14].quantity) <= 3 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[15].quantity === "0"}
            id="11.5"
          >
            11.5
            {parseInt(sizes[15].quantity) <= 3 && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[16].quantity === "0"}
            id="12"
          >
            12
            {parseInt(sizes[16].quantity) <= 3 && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[17].quantity === "0"}
            id="13"
          >
            13
            {parseInt(sizes[17].quantity) <= 3 && sizes[17].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[18].quantity === "0"}
            id="14"
          >
            14
            {parseInt(sizes[18].quantity) <= 3 && sizes[18].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[19].quantity === "0"}
            id="15"
          >
            15
            {parseInt(sizes[19].quantity) <= 3 && sizes[19].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    } else if (category === "m") {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="7.5"
          >
            7.5
            {/* displays warning if certain size has 3 or less */}
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="8"
          >
            8
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="8.5"
          >
            8.5
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="9"
          >
            9
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="9.5"
          >
            9.5
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="10"
          >
            10
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="10.5"
          >
            10.5
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="11"
          >
            11
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="11.5"
          >
            11.5
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="12"
          >
            12
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="13"
          >
            13
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="14"
          >
            14
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[12].quantity === "0"}
            id="15"
          >
            15
            {parseInt(sizes[12].quantity) <= 3 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    } else if (category === "w") {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="5W"
          >
            5W (3.5 M)
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="5.5W"
          >
            5.5W (4 M)
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="6W"
          >
            6W (4.5 M)
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="6.5W"
          >
            6.5W (5 M)
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="7W"
          >
            7W (5.5 M)
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="7.5W"
          >
            7.5W (6 M)
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="8W"
          >
            8W (6.5 M)
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="8.5W"
          >
            8.5W (7 M)
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="9W"
          >
            9W (7.5 M)
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="9.5W"
          >
            9.5W (8 M)
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="10W"
          >
            10W (8.5 M)
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="10.5W"
          >
            10.5W (9 M)
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[12].quantity === "0"}
            id="11W"
          >
            11W (9.5 M)
            {parseInt(sizes[12].quantity) <= 3 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[13].quantity === "0"}
            id="11.5W"
          >
            11.5W (10 M)
            {parseInt(sizes[13].quantity) <= 3 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[14].quantity === "0"}
            id="12W"
          >
            12W (10.5 M)
            {parseInt(sizes[14].quantity) <= 3 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    } else if (category === "gs") {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="3.5"
          >
            3.5
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="4"
          >
            4
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="4.5"
          >
            4.5
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="5"
          >
            5
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="5.5"
          >
            5.5
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="6"
          >
            6
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="6.5"
          >
            6.5
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="7"
          >
            7
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      ) 
    } else if (category === "ps") {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="10.5C"
          >
            10.5C
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="11C"
          >
            11C
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="11.5C"
          >
            11.5C
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="12C"
          >
            12C
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="12.5C"
          >
            12.5C
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="13C"
          >
            13C
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="13.5C"
          >
            13.5C
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="1Y"
          >
            1Y
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="1.5Y"
          >
            1.5Y
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="2Y"
          >
            2Y
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="2.5Y"
          >
            2.5Y
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="3Y"
          >
            3Y
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    } else if (category === "td") {
      return (
        <SizeDropdown>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[0].quantity === "0"}
            id="2C"
          >
            2C
            {parseInt(sizes[0].quantity) <= 3 && sizes[0].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[1].quantity === "0"}
            id="2.5C"
          >
            2.5C
            {parseInt(sizes[1].quantity) <= 3 && sizes[1].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[2].quantity === "0"}
            id="3C"
          >
            3C
            {parseInt(sizes[2].quantity) <= 3 && sizes[2].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[3].quantity === "0"}
            id="3.5C"
          >
            3.5C
            {parseInt(sizes[3].quantity) <= 3 && sizes[3].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[4].quantity === "0"}
            id="4C"
          >
            4C
            {parseInt(sizes[4].quantity) <= 3 && sizes[4].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[5].quantity === "0"}
            id="4.5C"
          >
            4.5C
            {parseInt(sizes[5].quantity) <= 3 && sizes[5].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[6].quantity === "0"}
            id="5C"
          >
            5C
            {parseInt(sizes[6].quantity) <= 3 && sizes[6].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[7].quantity === "0"}
            id="5.5C"
          >
            5.5C
            {parseInt(sizes[7].quantity) <= 3 && sizes[7].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[8].quantity === "0"}
            id="6C"
          >
            6C
            {parseInt(sizes[8].quantity) <= 3 && sizes[8].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[9].quantity === "0"}
            id="6.5C"
          >
            6.5C
            {parseInt(sizes[9].quantity) <= 3 && sizes[9].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[10].quantity === "0"}
            id="7C"
          >
            7C
            {parseInt(sizes[10].quantity) <= 3 && sizes[10].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[11].quantity === "0"}
            id="7.5C"
          >
            7.5C
            {parseInt(sizes[11].quantity) <= 3 && sizes[11].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[12].quantity === "0"}
            id="8C"
          >
            8C
            {parseInt(sizes[12].quantity) <= 3 && sizes[12].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[13].quantity === "0"}
            id="8.5C"
          >
            8.5C
            {parseInt(sizes[13].quantity) <= 3 && sizes[13].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[14].quantity === "0"}
            id="9C"
          >
            9C
            {parseInt(sizes[14].quantity) <= 3 && sizes[14].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[15].quantity === "0"}
            id="9.5C"
          >
            9.5C
            {parseInt(sizes[15].quantity) <= 3 && sizes[15].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
          <DropdownItem 
            onClick={(event) => ChangeSize(event)} 
            disabled={sizes[16].quantity === "0"}
            id="10C"
          >
            10C
            {parseInt(sizes[16].quantity) <= 3 && sizes[16].quantity != "0" && <WarningText>Low Stock!</WarningText>}
          </DropdownItem>
        </SizeDropdown>
      )
    }
  }

  const UserLoginMessage = () => {
    return (
      <WarningText>
        User not logged in! 
        <StyledNavLink to="/profile">Click Here to log in</StyledNavLink>
      </WarningText>
    )
  }

  function addToCart() {
    if (isAuthenticated) {
      let itemsUpdated = 0

      const newCart = currentCart?.products?.map((shoe) => {

        if (shoe.sku === sku && shoe.size === selectedSize) {
          itemsUpdated++

          return {
            ...shoe,
            quantity: `${parseInt(shoe.quantity) + 1}`
          }
        } else {
          return shoe
        }
      })

      if (itemsUpdated === 0) {
        newCart?.push({
          sku: sku,
          name: name,
          size: selectedSize,
          price: price,
          quantity: "1"
        })
      }

      updateNewCart(newCart)
      
    } else {
      setShowMessage(true)
    }
  }

  async function updateNewCart(newCart: CartItemType[] | undefined) {

    try {
      await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: newCart
        })
      })

      fetchCart()
      
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchCart() {
    try {
      const res = await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`)

      const cart = await res.json()

      setCurrentCart(cart.rows[0])

    } catch (error) {
      console.error(error)
    }
  }

  function ChangeSize(event: any) {
    setSelectedSize(event.target.id)
    setSizeListOpen(false)
  }
  
  return (
    <Container>
      <ProductImage src={images} />
      <TextContainer>
        <ProductName>{name}</ProductName>
        <ProductSku>{sku}</ProductSku>
        <ProductPrice>${price}.00</ProductPrice>
      </TextContainer>
      <DropdownContainer>
        <SizeDisplay onClick={() => setSizeListOpen(prev => !prev)}>{selectedSize}</SizeDisplay>
        {sizeListOpen && <SizeList />}
      </DropdownContainer>
      <CartButton onClick={addToCart}>ADD TO CART</CartButton>
      {showMessage && <UserLoginMessage />}
    </Container>
  )
}