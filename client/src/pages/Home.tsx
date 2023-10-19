import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../components/Products/Card";

const HomeContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`

export const Home = () => {
  const [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/api/products")

        const data = await res.json()

        setProductsArray(data.rows)
      } catch (error: any) {
        console.error(error.message)
      }

    }
    fetchProducts()
  }, [])

  const CardElements = productsArray.map((product, index) => {
    const {name, price, images, sku} = product

    return (
      <Card name={name} price={price} image={images} sku={sku} key={index}/>
    )
  })

  return (
    <HomeContainer>
      <CardContainer> 
        {CardElements}
      </CardContainer>
    </HomeContainer>
  )
}