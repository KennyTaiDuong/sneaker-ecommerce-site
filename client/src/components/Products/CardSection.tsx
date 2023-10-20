import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Card } from "./Card";

const CardContainer = styled.div`
  display: flex;
  overflow: scroll;
`

const BrandSection = styled.div`

`

const BrandBanner = styled.div`
  background-color: rgba(255,101,0,255);
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`

const StyledNavLink = styled(NavLink)`

`

const Logo = styled.img`
  width: 5rem;
  filter: brightness(10);
`

type CardSectionProps = {
  productsArray: Array<any>,
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
    }).map((product, index: number) => {
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
      <StyledNavLink to={"/"}>
        <BrandBanner>
          <Logo src={logo} />
        </BrandBanner>
      </StyledNavLink>

      {/* Products cards slider */}
      <CardContainer> 
        {CreateCards(`${brand}`)}
      </CardContainer>
    </BrandSection>
  )
}