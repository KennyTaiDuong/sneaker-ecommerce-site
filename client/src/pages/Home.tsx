import { useEffect, useState } from "react";
import styled from "styled-components";

import NikeLogo from "../assets/logo/nike-logo.png"
import YeezyLogo from "../assets/logo/yeezy-logo.png"
import JordanLogo from "../assets/logo/jordan-logo.png"
import { CardSection } from "../components/Products/CardSection";
import { Sidebar } from "../components/Sidebar/Sidebar";

const HomeContainer = styled.div`
  overflow: hidden;
  padding: 1rem;
  display: flex;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 25% 75%;
    max-width: 50rem;
    margin: 0 auto;
  }
`

const StyledMain = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const SidebarContainer = styled.div`
  display: none;

  @media screen and (min-width: 650px) {
    display: flex;
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
      <SidebarContainer>
        <Sidebar setMenuIsOpen={() => {}} />
      </SidebarContainer>
      <StyledMain>
        <CardSection productsArray={productsArray} logo={NikeLogo} brand={"Nike"} />
        <CardSection productsArray={productsArray} logo={JordanLogo} brand={"Jordan"} />
        <CardSection productsArray={productsArray} logo={YeezyLogo} brand={"Yeezy"} />
      </StyledMain>
    </HomeContainer>
  )
}