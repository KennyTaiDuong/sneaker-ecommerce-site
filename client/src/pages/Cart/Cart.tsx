import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { UserDataContext } from "../../components/Layout/Layout";

const Container = styled.div`
  padding: 1rem;
`

const Username = styled.p`
  font-size: 1.5rem;
  font-weight: 700;

`

const ReceiptContainer = styled.div`
  background-color: rgb(220,209,159);
  padding: 1rem;
  border-radius: 0.5rem;
`

const ReceiptTitle = styled.p`
  color: rgb(195,71,82);
  font-weight: 700;
  font-size: 2rem;
`

const ReceiptSubtitle = styled.p`
  color: rgb(81,68,54);
  font-weight: 700;
  font-size: 1.25rem;
`

const CartInfoContainer = styled.div`
  border: 1px solid rgb(138,134,85);
  border-radius: 0.25rem;
`

const ReceiptRow = styled.div`
  color: rgb(138,134,85);
  font-size: 0.625rem;
  display: grid;
  grid-template-columns: 1.5rem 1fr 2rem 3.25rem 3rem;
  border-top: 1px solid rgb(138,134,85);
`

const CategoryRow = styled(ReceiptRow)`
  border: 0;
`

const TotalRow = styled(CategoryRow)`
  border-top: 2px solid rgb(138,134,85);
`

const CategoryLabel = styled.p`
  padding: 0.25rem;
  border-right: 1px solid rgb(138,134,85);
  grid-column: 2;
`

const SizeLabel = styled(CategoryLabel)`
  grid-column: 3;
`

const QuantityLabel = styled(CategoryLabel)`
  grid-column: 4;
`

const PriceLabel = styled(CategoryLabel)`
  grid-column: 5;
  border-right: 0;
`

const ItemLabel = styled.p`
  padding: 0.25rem;
  border-right: 1px solid rgb(138,134,85);
`

const ItemNumber = styled.p`
  padding: 0.25rem;
  border-right: 1px solid rgb(138,134,85);
  text-align: center;
`

export const Cart = () => {
  const { isLoading, isAuthenticated, user } = useAuth0() 
  const {currentCart, currentUser} = useContext(UserDataContext)
  const navigate = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    
  function getTotalPrice() {
    
    const totalArray = currentCart?.products?.map((shoe) => {
      return shoe.price
    })

    const total = totalArray?.reduce((acc, current) => {
      return acc + current
    })

    setTotalPrice(total ? total : 0)
  }

  function getTotalQuantity() {
    
    const quantityArray = currentCart?.products?.map((shoe) => {
      return parseInt(shoe.quantity)
    })

    const quantity = quantityArray?.reduce((acc, current) => {
      return acc + current
    })

    setTotalQuantity(quantity ? quantity : 0)
  }

  getTotalPrice()
  getTotalQuantity()

  }, [currentCart])

  const itemsElements = currentCart?.products?.map((item, index) => {
    const { name, price, quantity, size } = item

    return (
      <ReceiptRow key={index}>
        <ItemNumber>{index + 1}</ItemNumber>
        <ItemLabel>{name}</ItemLabel>
        <SizeLabel>{size}</SizeLabel>
        <QuantityLabel>{quantity}</QuantityLabel>
        <PriceLabel>${price}</PriceLabel>
      </ReceiptRow>
    )
  })

  const EmptyItems = () => {
    return (
      <ReceiptRow>
        <ItemNumber>1</ItemNumber>
        <ItemLabel></ItemLabel>
        <SizeLabel></SizeLabel>
        <QuantityLabel></QuantityLabel>
        <PriceLabel></PriceLabel>
      </ReceiptRow>
    )
  }

  if (isLoading) {
    return (
      <Container>Loading...</Container>
    )
  }

  // If user not logged in and data not loading, redirect to login page
  if (!isAuthenticated && !isLoading) {
    setTimeout(() => {
      navigate("/profile")
    }, 3500)

    return (
      <Container>
        <Username>User not found</Username>
        <ReceiptSubtitle>Redirecting to user login page.</ReceiptSubtitle>
      </Container>
    )
  }

  return (
    <Container>
      <Username>{currentUser ? currentUser?.first_name.trimEnd() : user?.nickname}'s Cart</Username>
      <ReceiptContainer>
        <ReceiptTitle>aksupplied</ReceiptTitle>
        <ReceiptSubtitle>Sports Depot</ReceiptSubtitle>
        <CartInfoContainer>
          <CategoryRow>
            <ItemNumber></ItemNumber>
            <CategoryLabel>Items</CategoryLabel>
            <SizeLabel>Size</SizeLabel>
            <QuantityLabel>Quantity</QuantityLabel>
            <PriceLabel>Price</PriceLabel>
          </CategoryRow>
          {itemsElements?.length === 0 ? <EmptyItems /> : itemsElements }
          <TotalRow>
            <ItemLabel></ItemLabel>
            <CategoryLabel>Total</CategoryLabel>
            <SizeLabel></SizeLabel>
            <QuantityLabel>{totalQuantity}</QuantityLabel>
            <PriceLabel>${totalPrice}</PriceLabel>
          </TotalRow>
        </CartInfoContainer>
      </ReceiptContainer>
    </Container>
  )
}
