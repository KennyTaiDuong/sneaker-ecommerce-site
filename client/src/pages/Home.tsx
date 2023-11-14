import { useEffect, useState } from "react";
import styled from "styled-components";

import { CardSection } from "../components/Products/CardSection";

import HeroBg from "../assets/backgrounds/philly.jpeg"
import NikeLogo from "../assets/logo/nike-logo.png"
import YeezyLogo from "../assets/logo/yeezy-logo.png"
import JordanLogo from "../assets/logo/jordan-logo.png"

const HomeContainer = styled.div`
  overflow: hidden;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50rem;
  min-width: 100%;

  @media screen and (min-width: 650px) {
    justify-content: center;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem; 

  @media screen and (min-width: 650px) {
    padding: 3rem;
    gap: 2rem;
  }
`

const HeroSection = styled.section`
  background-image: url(${HeroBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 20%;
  height: 20rem;

  @media screen and (min-width: 650px) {
    height: 25rem;
  }
`

const DarkContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeroHeading = styled.p`
  font-size: clamp(2rem, 10vw, 5.5rem);
`

const HeroSubheading = styled.p`
  font-size: 1rem;

  @media screen and (min-width: 650px) {
    font-size: 1.25rem;
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
      <HeroSection>
        <DarkContainer>
          <HeroSubheading>
            Welcome to
          </HeroSubheading>
          <HeroHeading>
            AKSUPPLIED
          </HeroHeading>
        </DarkContainer>
      </HeroSection>
      <Main>
        <CardSection productsArray={productsArray} logo={NikeLogo} brand={"Nike"} />
        <CardSection productsArray={productsArray} logo={JordanLogo} brand={"Jordan"} />
        <CardSection productsArray={productsArray} logo={YeezyLogo} brand={"Yeezy"} />
      </Main>
    </HomeContainer>
  )
}