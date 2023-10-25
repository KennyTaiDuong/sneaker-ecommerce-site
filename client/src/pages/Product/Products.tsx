import styled from "styled-components";
import { useEffect, useState } from "react";
import { Card } from "../../components/Products/Card";

const Container = styled.div`
  overflow: hidden;
  padding: 1rem;
`

const Header = styled.p`
  font-size: 2rem;
  color: rgb(160, 160, 160);
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 0.5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
`

const StyledButton = styled.button`
  width: 100%;
  border: 2px solid rgb(238, 238, 238);
  background-color: white;
  padding: 0.5rem;
  font-weight: 700;
  color: rgb(160, 160, 160);
  position: relative;
  
  &:active {
    background-color: rgb(238, 238, 238);
    color: white;
  }
  `

const DropDownContainer = styled.div`
  width: 100%;
  border: 2px solid black;
  background-color: white;
  position: absolute;
  top: 48px;
  left: 0;
`

const DropdownItem = styled.p`
  border: 1px solid rgb(238, 238, 238);
  padding: 0.5rem 0;
`

type ProductProps = {
  name: string,
  price: number,
  images: string
  sku: string,
}

export const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState([])
  const [sortOpen, setSortOpen] = useState(false)
  const [refresh, setRefresh] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch all products
        const res = await fetch("http://localhost:5000/api/products")

        const data = await res.json()
        
        setAllProducts(data.rows)
      } catch (error) {
        console.error(error)
      }
    } 

    fetchData()
  }, [])

  function sortData(arrange: string) {
    if (arrange === "low") {
      allProducts.sort((a: ProductProps, b: ProductProps) => {
        // sorts by lowest price
        return a.price - b.price
      })
    } else if (arrange === "high") {
      allProducts.sort((a: ProductProps, b: ProductProps) => {
        // sorts by highest price
        return b.price - a.price
      })
    } else if (arrange === "alpha") {
      allProducts.sort((a: ProductProps, b: ProductProps) => {
        // takes the first letter of the colorway name and sorts in alphabetical order
        return a.name.split("\"", 2)[1].charCodeAt(0) - b.name.split("\"", 2)[1].charCodeAt(0)
      })
    } else if (arrange === "reverse-alpha") {
      allProducts.sort((a: ProductProps, b: ProductProps) => {
        // takes the first letter of the colorway name and sorts in reverse alphabetical order
        return b.name.split("\"", 2)[1].charCodeAt(0) - a.name.split("\"", 2)[1].charCodeAt(0)
      })
    }

    setRefresh(refresh + 1)
  }

  const ProductCards = allProducts.map((product: ProductProps, index: number) => {
    const {name, price, images, sku} = product

    return (
      <Card name={name} price={price} image={images} sku={sku} key={index}/>
    )
  })

  return (
    <Container>
      <Header>All Products</Header>
      <ButtonContainer>
        <StyledButton>Filter By:</StyledButton>
        <StyledButton onClick={() => setSortOpen(prev => !prev)} data-cy="sort-btn">Sort By:
          <DropDownContainer style={{ display: `${sortOpen ? "block" : "none"}`}}>
            <DropdownItem onClick={() => sortData("low")} data-cy="sort-low">Lowest Price</DropdownItem>
            <DropdownItem onClick={() => sortData("high")} data-cy="sort-high">Highest Price</DropdownItem>
            <DropdownItem onClick={() => sortData("alpha")} data-cy="sort-alpha">A-Z</DropdownItem>
            <DropdownItem onClick={() => sortData("reverse-alpha")} data-cy="sort-reverse">Z-A</DropdownItem>
          </DropDownContainer>
        </StyledButton>
        
      </ButtonContainer>
      <CardsContainer>
        {ProductCards}
      </CardsContainer>
    </Container>
  )
}