import styled from "styled-components";
import { NavLink } from "react-router-dom";

import VerifiedIcon from "../../assets/icons/verified-icon.png"

const ProductCard = styled(NavLink)`
  border: 2px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 20rem;
`

const ProductName = styled.p`
  color: #3c3423;
  font-weight: 700;
`

const ProductPrice = styled.p`
  font-weight: 700;
  color: #000;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`
const CardText = styled.p`
  font-weight: 500;
  color: #3b3b3b;
  display: flex;
  align-items: center;
  font-size: 1rem;
`

const ProductImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
`

const Icon = styled.img`
  width: 1rem;
`

type CardProps = {
  name: string,
  price: number,
  image: string,
  sku: string
}

export const Card = ({ name, price, image, sku }: CardProps) => {

  return (
    <ProductCard to={`/products/${sku}`}>
      <ProductImage src={image} />
      <CardText>
        <Icon src={VerifiedIcon} />
        100% Authentic
      </CardText>
      <ProductName>{name}</ProductName>
      <ProductPrice>
        <CardText>Price: </CardText>
        ${price}
      </ProductPrice>
    </ProductCard>
  )
}