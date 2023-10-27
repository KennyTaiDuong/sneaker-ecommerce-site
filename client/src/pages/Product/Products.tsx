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

  const ProductCards = allProducts?.map((product: Product, index: number) => {
    const {name, price, images, sku} = product

    if (brand != null) {
      if (name.toLowerCase().includes(brand)) {
        return (
          <Card name={name} price={price} image={images} sku={sku} key={index}/>
        )
      } else return
    } else if (brand === null) {
      return (
        <Card name={name} price={price} image={images} sku={sku} key={index}/>
      )
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