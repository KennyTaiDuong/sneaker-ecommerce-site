import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { CartCard } from "./CartCard";

const Container = styled.div`
  padding: 1rem;
`

const Username = styled.p`

`

const ContentText = styled.p`

`

export const Cart = () => {
  const { id } = useParams()

  useEffect(() => {
    async function fetchCart() {
      const res = await fetch("http://localhost:5000/api/carts")

      const data = await res.json()

      console.log(data)
    }

    fetchCart()
  }, [])

  return (
    <Container>
      <Username>Kenny's Cart</Username>
      <ContentText>Cart (3)</ContentText>
      <CartCard />
    </Container>
  )
}

// Count products in cart function
// 