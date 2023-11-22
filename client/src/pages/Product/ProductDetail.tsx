import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

import { CartItemType, UserDataContext } from "../../components/Layout/Layout";
import { SizeList } from "../../components/SizeList/SizeList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const PathContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.75rem;
  padding: 1rem;
  width: 100%;

  @media screen and (min-width: 650px) {
    font-size: 1rem;
    gap: 1rem;
    padding: 1.5rem;
    max-width: 70rem;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25.375rem;

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    min-height: 28rem;
  }
`

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 650px) {
    padding: 1.5rem;
    max-width: 40rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ProductImage = styled.img`
  width: 100%;
  max-width: 25rem;
  padding: 1rem;

  @media screen and (min-width: 650px) {
    align-self: center;
    padding: 1.5rem;
    width: 50%;
    max-width: 40rem;
  }
`

const ProductPrice = styled.p`
  font-weight: 700;
`

const ProductName = styled.p`
  font-weight: bold;

  @media screen and (min-width: 650px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`

const ProductSku = styled.p`
  font-size: 0.875rem;

  @media screen and (min-width: 650px) {
    font-size: 1rem;
  }
`

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SizeDisplay = styled.p`
  border: 1px solid #888;
  padding: 0.5rem;
`

const CartButton = styled.button`
  max-width: 10rem;
  background: rgba(0,186,0,255);
  border: none;
  font-weight: 700;
  color: rgb(255, 255, 255);
  padding: 0.5rem;
  align-self: end;

  @media screen and (min-width: 650px) {
    font-size: 1rem;
  }
`

const WarningText = styled.p`
  color: red;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #888;
`

type ProductProps = {
  name: string,
  price: number,
  sizes: {
    size: string,
    quantity: string
  }[],
  images: string,
  sku: string,
  category: "m" | "w" | "gs" | "ps" | "td" | "",
  created_on: string,
  updated_on: string,
  id: number
}

export const ProductDetail = () => {
  const { isAuthenticated } = useAuth0()
  const { id } = useParams()
  const { currentCart, currentUser, setCurrentCart } = useContext(UserDataContext)

  const [sizeListOpen, setSizeListOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState("Select Size")
  const [showMessage, setShowMessage] = useState(false)
  const [product, setProduct] = useState<ProductProps>({
    name: "",
    price: 0,
    sizes: [],
    images: "",
    sku: "",
    category: "",
    created_on: "",
    updated_on: "",
    id: 0
  })

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`)

        const data = await res.json()

        setProduct(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchProduct()
  }, [])

  function addToCart() {
    if (isAuthenticated) {
      let itemsUpdated = 0

      const newCart = currentCart?.products?.map((shoe) => {

        if (shoe.sku === sku && shoe.size === selectedSize) {
          itemsUpdated++

          return {
            ...shoe,
            quantity: `${parseInt(shoe.quantity) + 1}`
          }
        } else {
          return shoe
        }
      })

      if (itemsUpdated === 0) {
        newCart?.push({
          sku: sku,
          name: name,
          size: selectedSize,
          price: price,
          quantity: "1"
        })
      }

      updateNewCart(newCart)
      
    } else {
      setShowMessage(true)
    }
  }

  async function updateNewCart(newCart: CartItemType[] | undefined) {

    try {
      await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: newCart
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

      const cart = await res.json()

      setCurrentCart(cart.rows[0])

    } catch (error) {
      console.error(error)
    }
  }

  function changeSize(event: any) {
    setSelectedSize(event.target.id)
    setSizeListOpen(false)
  }

  const { name, price, images, sku, sizes, category } = product

  const UserLoginMessage = () => {
    return (
      <WarningText>
        User not logged in! 
        <StyledNavLink to="/profile">Click Here to log in</StyledNavLink>
      </WarningText>
    )
  }
  
  return (
    <Container>
      <PathContainer>
        <StyledNavLink to="/">HOME</StyledNavLink>
        /
        <StyledNavLink to="/products">PRODUCTS</StyledNavLink>
        /
        <StyledNavLink to={`${window.location.pathname}`}>{sku}</StyledNavLink>
      </PathContainer>
      <ContentContainer>
        <ProductImage src={images} />
        <InfoContainer>
          <TextContainer>
            <ProductName>{name}</ProductName>
            <ProductSku>{sku}</ProductSku>
            <ProductPrice>${price}.00</ProductPrice>
          </TextContainer>
          <DropdownContainer>
            <SizeDisplay onClick={() => setSizeListOpen(prev => !prev)} data-cy="size-display" >{selectedSize}</SizeDisplay>
            {sizeListOpen && <SizeList changeSize={async (e) => changeSize(e)} sizes={sizes} type={category} />}
          </DropdownContainer>
          <CartButton onClick={addToCart} data-cy="cart-btn">ADD TO CART</CartButton>
          {showMessage && <UserLoginMessage />}
        </InfoContainer>
      </ContentContainer>
    </Container>
  )
}