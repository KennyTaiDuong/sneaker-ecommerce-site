import { useEffect, useState } from "react";
import styled from "styled-components";

import NikeLogo from "../assets/logo/nike-logo.png"
import YeezyLogo from "../assets/logo/yeezy-logo.png"
import JordanLogo from "../assets/logo/jordan-logo.png"
import { CardSection } from "../components/Products/CardSection";

const HomeContainer = styled.div`
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;

  @media screen and (min-width: 650px) {
    display: grid;
    margin: 0 auto;
    padding: 1.5rem;
  }
`

export const Home = () => {
  const [productsArray, setProductsArray] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/api/products")

        const data = await res.json()

        setProductsArray(data.rows)
      } catch (error) {
        console.error(error)
      }

    }
    fetchProducts()
  }, [])

  return (
    <HomeContainer>
        <CardSection productsArray={productsArray} logo={NikeLogo} brand={"Nike"} />
        <CardSection productsArray={productsArray} logo={JordanLogo} brand={"Jordan"} />
        <CardSection productsArray={productsArray} logo={YeezyLogo} brand={"Yeezy"} />
    </HomeContainer>
  )
}