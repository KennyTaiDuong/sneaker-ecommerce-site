import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../../components/Products/Card";
import { ProductsContext, Product } from "../../components/Layout/ProductsLayout";
import { ProductsNavbar } from "../../components/ProductsNavbar/ProductsNavbar";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
  overflow: hidden;
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 0.5rem;
`

export const ProductsPage = () => {
  const {allProducts, setRefresh} = useContext(ProductsContext)

  const [searchParams] = useSearchParams()

  const brand: any = searchParams.get("brand")

  const query: any = searchParams.get("query")

  const page: any = searchParams.get("page")

  const ProductCards = allProducts?.map((product: Product, index: number) => {
    const {name, price, images, sku} = product

    const upperBoundary = parseInt(page) * 12
    const lowerBoundary = (parseInt(page) - 1) * 12

    // removes quotation marks and extra spaces
    const plainQuery = query?.toLowerCase().split('"').join("").trimEnd()

    const plainName = name?.toLowerCase().split('"').join("")

    // only renders 12 items per page
    if (index < upperBoundary && index >= lowerBoundary) {

      if (brand || query) {
        if (brand && plainName.includes(brand)) {
          
          // returns products that have brand included in name
          return (
            <Card name={name} price={price} image={images} sku={sku} key={index}/>
          )
        } else if (query && plainName.includes(plainQuery)) {

          // returns products where query is included in name
          return (
            <Card name={name} price={price} image={images} sku={sku} key={index}/>
          )
        }
  
      } else if (!brand && !query) {

        // Return all products when no brand or query specified
        return (
          <Card name={name} price={price} image={images} sku={sku} key={index}/>
        )
      }
    }
    setRefresh(prev => prev++)
  })

  return (
    <Container>
      <CardsContainer>
        {ProductCards}
      </CardsContainer>
      <ProductsNavbar pageCount={5}/>
    </Container>
  )
}