import { useContext } from "react";
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
  grid-template-columns: 1.5rem 1fr 2rem 3.25rem 2rem;
  border-top: 1px solid rgb(138,134,85);
`

const CategoryRow = styled(ReceiptRow)`
  border: 0;
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

  const {currentCart} = useContext(UserDataContext)

  const navigate = useNavigate()

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
        <QuantityLabel>0</QuantityLabel>
        <PriceLabel>$0</PriceLabel>
      </ReceiptRow>
    )
  }

  if (isLoading) {
    return (
      <Container>Loading...</Container>
    )
  }

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
      <Username>{user?.nickname}'s Cart</Username>
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
        </CartInfoContainer>

      </ReceiptContainer>
    </Container>
  )
}
