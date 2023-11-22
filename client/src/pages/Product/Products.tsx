import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../components/Products/Card";
import { ProductsContext, Product } from "../../components/Layout/ProductsLayout";
import { Pagination } from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { EmptyFeed } from "../../components/EmptyFeed/EmptyFeed";

const Container = styled.div`
  overflow: hidden;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 22% repeat(3, 1fr);
  }
`

const CardsContainer = styled.div`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  
  @media screen and (min-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column: 2 / -1;
  }
`

const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 650px) {
    display: flex;
    grid-column: 1;
  }
`

export const Products = () => {
  const { allProducts } = useContext(ProductsContext)

  const [searchParams] = useSearchParams()

  const brand: any = searchParams.get("brand")
  const query: any = searchParams.get("query")
  const page: any = searchParams.get("page")

  const foundProducts: any = allProducts?.map((product: Product) => {
    // Returns an array of product objects that match search queries

    // removes quotation marks and extra spaces
    const plainQuery = query?.toLowerCase().split('"').join("").trimEnd()
    const plainName = product.name?.toLowerCase().split('"').join("")
    
    if (brand || query) {
      if (brand && plainName.includes(brand)) {
        
        // returns products that have brand included in name
        return product
      } else if (query && plainName.includes(plainQuery)) {

        // returns products where query is included in name
        return product
      }
    } else if (!brand && !query) {

      // Return all products when no brand or query specified
      return product 
    }
    
  }).filter((product) => product)
    
  const ProductCards = foundProducts?.map((value: Product, index: number) => {
    // Renders the products that match the search queries
    const {name, price, images, sku} = value
    
    const itemsPerPage = 12
    const upperIndexLimit = parseInt(page) * itemsPerPage
    const lowerIndexLimit = (parseInt(page) - 1) * itemsPerPage
    
    // only renders 12 items per page
    if (index < upperIndexLimit && index >= lowerIndexLimit) {
      return <Card name={name} price={price} image={images} sku={sku} key={index}/>
    }
  })

  return (
    <Container>
      <SidebarContainer>
        <Sidebar setMenuIsOpen={() => void {}} />
      </SidebarContainer>
      <CardsContainer>
        {ProductCards?.length != 0 ? ProductCards : <EmptyFeed />}
      </CardsContainer>
      <Pagination pageCount={Math.ceil(foundProducts?.length / 12)} />
    </Container>
  )
}