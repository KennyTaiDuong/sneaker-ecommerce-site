import { MouseEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import { CartItemType, UserDataContext } from "../../components/Layout/Layout";
import fetchCart from "../../hooks/fetchCart";

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
`

const ReceiptContainer = styled.div`
  background-color: rgb(220,209,159);
  padding: 1rem;
  border-radius: 0.5rem;
  color: rgb(138,134,85);

  @media screen and (min-width: 650px) {
    padding: 2rem;
  }
`

const CompanyName = styled.p`
  color: rgb(195,71,82);
  font-weight: 700;
  font-size: 2rem;

  @media screen and (min-width: 650px) {
    font-size: 2.75rem;
  }
`

const ReceiptSubtitle = styled.p`
  color: rgb(81,68,54);
  font-weight: 700;
  font-size: 1.25rem;

  @media screen and (min-width: 650px) {
    font-size: 1.75rem;
  }
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

  @media screen and (min-width: 650px) {
    font-size: 0.875rem;
  }
`

const UserInfoRow = styled(UserCategoryRow)`
  grid-template-columns: 1fr;
`

const ReceiptRow = styled.div`
  font-size: 0.625rem;
  display: grid;
  grid-template-columns: 1.5rem 1fr 2rem 3.25rem 3rem;
  border-top: 1px solid rgb(138,134,85);

  @media screen and (min-width: 650px) {
    grid-template-columns: 2rem 1fr 2.75rem 5rem 3.5rem;
  }
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

  @media screen and (min-width: 650px) {
    font-size: 0.875rem;
    padding: 0.5rem;
  }
`

const ColumnOne = styled(CategoryLabel)`
  grid-column: 1;
`

const ColumnTwo = styled(CategoryLabel)`
  grid-column: 2;
  justify-content: space-between;
  gap: 0.25rem;
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
  
  @media screen and (max-width: 310px) {
    flex-direction: column;
  }
`

const UserFullRow = styled.div`
  padding: 0.25rem;
  border-top: 1px solid rgb(138,134,85);

  @media screen and (min-width: 650px) {
    padding: 0.5rem;
  }
`

const UserInfoText = styled.p`
  
`

const RemoveButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 0.5rem;
  padding: 0;
  color: rgb(138,134,85);

  @media screen and (min-width: 650px) {
    font-size: 0.75rem;
  }
`

const CheckoutButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgb(195,71,82);
  border: 0;
  border-radius: 0.5rem;
  color: white;
`

const QuantityButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 0.5rem;
  text-align: center;
  color: rgb(138,134,85);
`

export const Cart = () => {
  const { isLoading, user } = useAuth0()
  const navigate = useNavigate()
  
  const {currentCart, currentUser, setCurrentCart} = useContext(UserDataContext)
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [totalQuantity, setTotalQuantity] = useState<number>(0)

  const date = new Date().toLocaleDateString()

  useEffect(() => {
    
    function getTotalPrice() {

      let total = 0
      
      currentCart?.products?.forEach((item) => {
        total += item.price * parseInt(item.quantity)
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

      getCart()
    } catch (error) {
      console.error(error)
    }
  }

  function increaseQuantity(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    const { target } = e

    const cartItemSize = (target as HTMLButtonElement).id.split("#")[0]
    const cartItemSku = (target as HTMLButtonElement).id.split("#")[1]

    const newCart = currentCart?.products?.map((shoe) => {

      if (shoe.sku === cartItemSku && shoe.size === cartItemSize) {
        
        return {
          ...shoe,
          quantity: `${parseInt(shoe.quantity) + 1}`
        }
      } else {
        return shoe
      }
    })

    updateCart(newCart)
  }

  function decreaseQuantity(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
    const { target } = e

    const cartItemSize = (target as HTMLButtonElement).id.split("#")[0]
    const cartItemSku = (target as HTMLButtonElement).id.split("#")[1]

    const newCart = currentCart?.products?.map((shoe) => {

      if (shoe.sku === cartItemSku && shoe.size === cartItemSize) {

        // prevents number going below 1
        const quantity = Math.max(parseInt(shoe.quantity) - 1, 1)
      
        return {
          ...shoe,
          quantity: `${quantity}`
        }
      } else {
        return shoe
      }
    })

    updateCart(newCart)
  }

  async function updateCart(cart: CartItemType[] | undefined) {
    try {
      await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: cart,
        })
      })

      getCart()
    } catch (error) {
      console.error(error)
    }
  }

  async function getCart() {
    try {
      const res = await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`)

      const data = await res.json()

      setCurrentCart(data.rows[0])

    } catch (error) {
      console.error(error)
    }
  }

  function handleCheckoutButton() {
    navigate("/checkout")
  }

  const itemsElements = currentCart?.products?.map((item, index) => {
    const { name, price, quantity, size, sku } = item

    return (
      <ReceiptRow key={index}>
        <ColumnOne>{index + 1}</ColumnOne>
        <ColumnTwo>
          {name}
          <RemoveButton onClick={() => RemoveItem(index)} data-testid={`remove-${sku}-${size}`} >x</RemoveButton>
        </ColumnTwo>
        <ColumnThree>{size}</ColumnThree>
        <ColumnFour>
          <QuantityButton id={`${size}#${sku}`} onClick={(e) => decreaseQuantity(e)} data-testid={`${size}-${sku}`}>-</QuantityButton>
          {quantity}
          <QuantityButton id={`${size}#${sku}`} onClick={(e) => increaseQuantity(e)} data-testid={`${size}+${sku}`}>+</QuantityButton>
        </ColumnFour>
        <ColumnFive>${parseInt(quantity) * price}</ColumnFive>
      </ReceiptRow>
    )
  })

  const EmptyItems = () => {
    return (
      <ReceiptRow>
        <ColumnOne>1</ColumnOne>
        <ColumnTwo>nothing to be found</ColumnTwo>
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

  return (
    <Container>
      <ReceiptContainer>
        <CompanyName data-testid="title" >aksupplied</CompanyName>
        <ReceiptSubtitle>Sports Depot</ReceiptSubtitle>
        {/* USER INFO CONTAINER LIKE THE OLD RECEIPT */}
        <UserInfoContainer>
          <UserCategoryRow>
            <UserColumnOne>Customer Email: {user?.email}</UserColumnOne>
            <UserColumnTwo>
              Date
              <span>{`${date}`}</span>
            </UserColumnTwo>
          </UserCategoryRow>
          <UserInfoRow>
            <UserFullRow>
              Name
              <UserInfoText>
                {
                  currentUser?.first_name
                  ? `${currentUser?.first_name} ${currentUser?.last_name}`
                  : " "
                }
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
                  ? `${currentUser?.shipping_info?.city}, ${currentUser?.shipping_info?.state.trimEnd().toUpperCase()}, ${currentUser?.shipping_info?.zip}`
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
            <ColumnFour data-testid="quantity">{totalQuantity}</ColumnFour>
            <ColumnFive data-testid="total-price">${totalPrice}</ColumnFive>
          </TotalRow>
        </CartInfoContainer>
      </ReceiptContainer>
      <CheckoutButton 
        onClick={handleCheckoutButton} 
        disabled={currentCart?.products?.length === 0} 
        data-testid="checkout-btn"
      >
        Continue to checkout
      </CheckoutButton>
    </Container>
  )
}
