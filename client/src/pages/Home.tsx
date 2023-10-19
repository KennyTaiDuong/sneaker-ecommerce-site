import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`

`

export const Home = () => {
  const [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/api/products")

        const data = await res.json()

        setProductsArray(data.rows)
        console.log(productsArray)
      } catch (error: any) {
        console.error(error.message)
      }

    }
    fetchProducts()
  }, [])

  return (
    <HomeContainer></HomeContainer>
  )
}