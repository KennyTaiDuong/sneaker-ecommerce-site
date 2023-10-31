import styled from "styled-components";
import { useEffect, useState,createContext, Dispatch, SetStateAction } from "react";
import { Outlet } from "react-router";
import { useSearchParams } from "react-router-dom";

const ProductsLayoutContainer = styled.div`
  padding: 1rem;
`

const Header = styled.p`
  font-size: 2rem;
  color: rgb(160, 160, 160);
`

const StyledButton = styled.button`
  width: 100%;
  border: 2px solid rgb(238, 238, 238);
  background-color: white;
  padding: 0.5rem;
  font-weight: 700;
  color: rgb(160, 160, 160);
  position: relative;
  margin-top: 1rem;
  
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
  cursor: pointer;
`

type Size = {
  size: string,
  quantity: string
}

export type Product = {
  sku: string;
  name: string;
  price: number;
  sizes: Size[];
  category: "m" | "w" | "gs" | "ps" | "td";
  images: string;
}

type ProductsContextType = {
  allProducts?: Product[],
  setRefresh: Dispatch<SetStateAction<number>>
}

const defaultState = {
  allProducts: [],
  setRefresh: () => {}
} as ProductsContextType

export const ProductsContext = createContext<ProductsContextType>(defaultState)

export const ProductsPageLayout = () => {
  const [sortOpen, setSortOpen] = useState(false)
  const [selectedSort, setSort] = useState("")
  const [, setRefresh] = useState(0)
  const [allProducts, setAllProducts] = useState<Product[]>()

  const [searchParams, setSearchParams] = useSearchParams()

  if (searchParams.size === 0) {
    // automatically routes to first page when user loads /products
    setSearchParams({ page: "1" })
  }

  // Gets value of "brand" search query
  const brand = searchParams.get("brand")
  const query = searchParams.get("query")

  // Capitalizes the first letter of each word:
  // brand.split(" ") returns an array of string(s) split by a space
  // .map((name) => {}) loops through array and capitalizes the first char
  const brandHeading = brand?.split(" ")?.map((name) => {
    return `${name.charAt(0).toUpperCase() + name.slice(1)} `
  })

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

  function sortData(option: string) {
    
    // Conditions check which option was clicked
    if (option === "low") {
      setSort("low")
      allProducts?.sort((a: Product, b: Product) => {
        // sorts by lowest price
        return a.price - b.price
      })
    } else if (option === "high") {
      setSort("high")
      allProducts?.sort((a: Product, b: Product) => {
        // sorts by highest price
        return b.price - a.price
      })
    } else if (option === "alpha") {
      setSort("alpha")
      allProducts?.sort((a: Product, b: Product) => {
        // takes the first letter of the colorway name and sorts in alphabetical order
        return a.name.split("\"", 2)[1].charCodeAt(0) - b.name.split("\"", 2)[1].charCodeAt(0)
      })
    } else if (option === "reverse-alpha") {
      setSort("reverse")
      allProducts?.sort((a: Product, b: Product) => {
        // takes the first letter of the colorway name and sorts in reverse alphabetical order
        return b.name.split("\"", 2)[1].charCodeAt(0) - a.name.split("\"", 2)[1].charCodeAt(0)
      })
    }

    setRefresh(prev => prev++)
  }

  return (
    <ProductsLayoutContainer>
      <Header data-cy="header">{query ? `"${query}"` : brand ? `${brandHeading?.join("")} Products`: "All Products"}</Header>
      <StyledButton onClick={() => setSortOpen(prev => !prev)} data-cy="sort-btn">Sort By:
        <DropDownContainer style={{ display: `${sortOpen ? "block" : "none"}`}}>
          <DropdownItem 
            onClick={() => sortData("low")} 
            id={selectedSort === "low" ? "selected" : "not-low"}
            data-cy="sort-low"
          >
            Lowest Price
          </DropdownItem>
          <DropdownItem 
            onClick={() => sortData("high")} 
            id={selectedSort === "high" ? "selected" : "not-high"}
            data-cy="sort-high"
          >
            Highest Price
          </DropdownItem>
          <DropdownItem 
            onClick={() => sortData("alpha")} 
            id={selectedSort === "alpha" ? "selected" : "not-alpha"}
            data-cy="sort-alpha"
          >
            A-Z
          </DropdownItem>
          <DropdownItem 
            onClick={() => sortData("reverse-alpha")} 
            id={selectedSort === "reverse" ? "selected" : "not-reverse"}
            data-cy="sort-reverse"
          >
            Z-A
          </DropdownItem>
        </DropDownContainer>
      </StyledButton>
      <ProductsContext.Provider value={{allProducts, setRefresh}}>
        <Outlet />
      </ProductsContext.Provider>
    </ProductsLayoutContainer>
  )
}