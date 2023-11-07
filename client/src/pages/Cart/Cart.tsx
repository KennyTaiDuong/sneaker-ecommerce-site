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
  color: rgb(138,134,85);
`

const BrandName = styled.p`
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

const UserInfoContainer = styled(CartInfoContainer)`
  margin-bottom: 1rem;
`

const UserCategoryRow = styled.div`
  font-size: 0.625rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
`

const UserInfoRow = styled(UserCategoryRow)`
  grid-template-columns: 1fr;
`

const ReceiptRow = styled.div`
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
  display: flex;
  align-items: center;
  justify-content: center;
`

const ColumnOne = styled(CategoryLabel)`
  grid-column: 1;
`

const ColumnTwo = styled(CategoryLabel)`
  grid-column: 2;
  justify-content: space-between;
`

const ColumnThree = styled(CategoryLabel)`
  grid-column: 3;
`

const ColumnFour = styled(CategoryLabel)`
  grid-column: 4;
`

const ColumnFive = styled(CategoryLabel)`
  grid-column: 5;
  border-right: 0;
`

const UserColumnOne = styled(CategoryLabel)`
  grid-column: 1;
  justify-content: start;
`

const UserColumnTwo = styled(CategoryLabel)`
  grid-column: 2;
  justify-content: space-between;
  border-right: 0;
`

const UserFullRow = styled.div`
  padding: 0.25rem;
  border-top: 1px solid rgb(138,134,85);
`

const UserInfoText = styled.p`
  
`

const RemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 0.5rem;
  padding: 0;
`

export const Cart = () => {
  const { isLoading, isAuthenticated, user } = useAuth0() 
  const {currentCart, currentUser, setCurrentCart} = useContext(UserDataContext)
  const navigate = useNavigate()

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

  const date = new Date().toLocaleDateString()

  useEffect(() => {
    
  function getTotalPrice() {

    let total = 0
    
    currentCart?.products?.forEach((item) => {
      total += item.price
    })

    setTotalPrice(total)
  }

  function getTotalQuantity() {
    
    let total = 0

    currentCart?.products?.forEach((item) => {
      total += parseInt(item.quantity)
    })

    setTotalQuantity(total)
  }

  getTotalPrice()
  getTotalQuantity()

  }, [currentCart])

  async function RemoveItem(itemIndex: number) {
    const updatedCart = currentCart?.products?.filter((_item, index) => {
      return index !== itemIndex
    })

    try {
      await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: updatedCart
        })
      })

      fetchCart()
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchCart() {
    try {
      const res = await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`)

      const data = await res.json()

      setCurrentCart(data.rows[0])
    } catch (error) {
      console.error(error)
    }
  }

  const itemsElements = currentCart?.products?.map((item, index) => {
    const { name, price, quantity, size } = item

    return (
      <ReceiptRow key={index}>
        <ColumnOne>{index + 1}</ColumnOne>
        <ColumnTwo>
          {name}
          <RemoveButton onClick={() => RemoveItem(index)}>remove</RemoveButton>
        </ColumnTwo>
        <ColumnThree>{size}</ColumnThree>
        <ColumnFour>{quantity}</ColumnFour>
        <ColumnFive>${price}</ColumnFive>
      </ReceiptRow>
    )
  })

  const EmptyItems = () => {
    return (
      <ReceiptRow>
        <ColumnOne>1</ColumnOne>
        <ColumnTwo></ColumnTwo>
        <ColumnThree></ColumnThree>
        <ColumnFour></ColumnFour>
        <ColumnFive></ColumnFive>
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
      <Username>{currentUser?.first_name ? currentUser?.first_name.trimEnd() : user?.nickname}'s Cart</Username>
      <ReceiptContainer>
        <BrandName>aksupplied</BrandName>
        <ReceiptSubtitle>Sports Depot</ReceiptSubtitle>
        {/* USER INFO CONTAINER LIKE THE OLD RECEIPT */}
        <UserInfoContainer>
          <UserCategoryRow>
            <UserColumnOne>Customer Order No.</UserColumnOne>
            <UserColumnTwo>
              Date
              <span>{`${date}`}</span>
            </UserColumnTwo>
          </UserCategoryRow>
          <UserInfoRow>
            <UserFullRow>
              Name
              <UserInfoText>
                {`${currentUser?.first_name} ${currentUser?.last_name}`}
              </UserInfoText>
            </UserFullRow>
          </UserInfoRow>
          <UserInfoRow>
            <UserFullRow>
              Address
              <UserInfoText>
                {
                  currentUser?.shipping_info?.street_number 
                  ? `${currentUser?.shipping_info?.street_number} ${currentUser?.shipping_info?.street_name}` 
                  : ""
                }
              </UserInfoText>
            </UserFullRow>
          </UserInfoRow>
          <UserInfoRow>
            <UserFullRow>
              City, STATE, ZIP
              <UserInfoText>
                {
                  currentUser?.shipping_info?.city
                  ? `${currentUser?.shipping_info?.city}, ${currentUser?.shipping_info?.state.trimEnd()}, ${currentUser?.shipping_info?.zip}`
                  : ""
                }
              </UserInfoText>
            </UserFullRow>
          </UserInfoRow>
        </UserInfoContainer>
        <CartInfoContainer>
          {/* Category labels for receipt */}
          <CategoryRow>
            <ColumnOne></ColumnOne>
            <ColumnTwo>Items</ColumnTwo>
            <ColumnThree>Size</ColumnThree>
            <ColumnFour>Quantity</ColumnFour>
            <ColumnFive>Price</ColumnFive>
          </CategoryRow>
          {itemsElements?.length === 0 ? <EmptyItems /> : itemsElements }
          <TotalRow>
            <ColumnOne></ColumnOne>
            <ColumnTwo>Total</ColumnTwo>
            <ColumnThree></ColumnThree>
            <ColumnFour>{totalQuantity}</ColumnFour>
            <ColumnFive>${totalPrice}</ColumnFive>
          </TotalRow>
        </CartInfoContainer>
      </ReceiptContainer>
    </Container>
  )
}
