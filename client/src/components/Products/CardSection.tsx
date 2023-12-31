import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Card } from "./Card";

import NikeBg from "../../assets/backgrounds/panda-dunks.jpg"
import JordanBg from "../../assets/backgrounds/cool-grey-11s.jpg"
import YeezyBg from "../../assets/backgrounds/yeezy.jpg"

const BrandSection = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;

  ::-webkit-scrollbar {
    display: block;
  }

  ::-webkit-scrollbar-track {
    background: #888;
    border-radius: 1rem;
    border: 6px solid white;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 1rem;
    border: 2px solid #888;
  }

  @media screen and (min-width: 650px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 1rem;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 15rem 1fr;
    gap: 1rem;
  }
`

const CardContainer = styled.div`
  padding: 1rem 0;
  display: grid;
  overflow: auto;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 10rem);
  grid-auto-flow: column;
  grid-auto-columns: 10rem;

  @media screen and (min-width: 650px) and (max-width: 1023px) {
    grid-column: 2;
    grid-template-columns: repeat(auto-fill, 12.5rem);
    grid-auto-columns: 12.5rem;
  }

  @media screen and (min-width: 1024px) {
    grid-column: 2;
    grid-template-columns: repeat(auto-fill, 15rem);
    grid-auto-columns: 15rem;
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 650px) {
    grid-column: 1;
  }
`

const DarkContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
`

const Logo = styled.img`
  width: 5rem;

  @media screen and (min-width: 1024px) {
    width: 8rem;
  }
`

type CardSectionProps = {
  productsArray: {
    sku: string,
    name: string,
    images: string,
    price: number,
    category: string,
    sizes: {
      size: string,
      quantity: string
    }[]
  }[],
  logo: string,
  brand: string,
}

type ProductProps = {
  name: string,
  price: number,
  images: string
  sku: string,
}

export const CardSection = ({ productsArray, logo, brand }: CardSectionProps) => {
  function CreateCards(brand: string) {
    const cardElements = productsArray.filter((product: ProductProps) => {
      // Return array of objects that name start with brand passed in as prop
      return product.name.split(" ", 1)[0] === brand
    }).map((product: ProductProps, index: number) => {
      const {name, price, images, sku} = product
      return (
        <Card name={name} price={price} image={images} sku={sku} key={index}/>
      )
    })

    return cardElements
  }

  return (
    <BrandSection>
      {/* Brand Banner */}
      <StyledNavLink 
        to={`/products?brand=${brand.toLowerCase()}&page=1`} 
        style={{ 
          backgroundImage: 
            `${brand === "Nike" 
            ? `url(${NikeBg})` 
            : brand === "Jordan" 
            ? `url(${JordanBg})` 
            : `url(${YeezyBg})`}` 
        }}
        id={`${
          brand === "Nike" 
          ? "nike" 
          : brand === "Jordan"
          ? "jordan"
          : "yeezy"
        }`}
      >
        <DarkContainer>
          <Logo src={logo} />
        </DarkContainer>
      </StyledNavLink>

      {/* Products cards slider */}
      <CardContainer> 
        {CreateCards(`${brand}`)}
      </CardContainer>
    </BrandSection>
  )
}
