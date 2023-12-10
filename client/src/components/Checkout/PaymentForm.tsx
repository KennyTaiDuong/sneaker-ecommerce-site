import { AddressElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { UserDataContext } from "../Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { StripeAddressElementChangeEvent } from "@stripe/stripe-js";

const Container = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`

const Form = styled.form`
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
`

const ButtonContainer = styled.div`
  padding: 0 1rem 1rem;
`

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  background: rgb(195,71,82);
  color: white;
  
`

const StyledNavLink = styled(NavLink)`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  background: rgb(195,71,82);
  color: white;
  text-decoration: 0;
`

const StatusMessage = styled.p`
  color: black;
`

type Props = {
  totalPrice: number
}

export const PaymentForm = ({ totalPrice }: Props) => {
  const { currentCart, currentUser, setCurrentCart } = useContext(UserDataContext)
  const navigate = useNavigate()

  const [message, setMessage] = useState<string | undefined>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [shippingInfo, setShippingInfo] = useState({})
  const [name, setName] = useState("")

  const stripe = useStripe()
  const elements = useElements()

  async function handlePaymentForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // return if stripe/elements not loaded
    if (!stripe || !elements) {
      console.log("stripe or elements not loaded")
      return;
    }

    // set state to true to disable pay now button
    setIsProcessing(true)

    if (await checkInventory()) {
      // send payment request to stripe
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/completion`
        },
        redirect: "if_required"
      })

      // if payment request responds with error, display error message
      if (error) {
        setMessage(error?.message)
        setIsProcessing(false)
      } else if (paymentIntent && paymentIntent.status === 'succeeded') {
        // if successful transaction, update inventory, set status message, 
        // post order to database, clear user's cart, re-fetch cart
        setMessage(`Payment status: ${paymentIntent.status}`)
        setIsProcessing(false)
        updateProductInventory()
        postOrder()
        clearCart()
        navigate("/completion")
      } else {
        setMessage("Unexpected error")
      }

    } else {
      setMessage("One or more of the products in your cart are not available.")
      setIsProcessing(false)
    }
  }

  async function postOrder() {
    try {
      await fetch(`http://localhost:5000/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          total_price: totalPrice,
          shipping_info: shippingInfo,
          order_status: "paid",
          cart_id: currentCart?.id,
          user_id: currentUser?.id,
          products: currentCart?.products,
          name: name
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function clearCart() {
    try {
      await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: []
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

  async function checkInventory() {
    // create individual fetches for each product in cart and search for if size has enough quantity
    const products = currentCart?.products

    if (!products || products.length === 0) {
      setMessage("No items in cart")
      return false
    }

    const promises = products.map(async (shoe) => {
      const { quantity, sku, size } = shoe;
  
      try {
        const res = await fetch(`http://localhost:5000/api/products/${sku}`);
        const { sizes } = await res.json();
    
        const foundSize = sizes.find((item: { size: string; }) => {

          return item.size.toUpperCase() === size
        })

        return foundSize ? foundSize.quantity >= quantity : false;
      } catch (error) {
        console.error(error)
      }
    });
  
    const results = await Promise.all(promises);

    return results.every((result) => result)
  }

  async function updateProductInventory() {
    const products = currentCart?.products;
  
    if (!products || products.length === 0) {
      setMessage("Cart is empty");
      return false;
    }
  
    for (const shoe of products) {
      const { sku, size, quantity } = shoe;
  
      let newSizesArray = [];
  
      try {
        const res = await fetch(`http://localhost:5000/api/products/${sku}`);
  
        const product = await res.json();

        newSizesArray = product.sizes.map((item: { size: string; quantity: string; }) => {
          if (item.size.toUpperCase() === size) {
            return {
              ...item,
              quantity: `${parseInt(item.quantity) - parseInt(quantity)}`,
            };
          } else {
            return item;
          }
        });
  
        await fetch(`http://localhost:5000/api/products/${sku}`, {
          method: "PUT", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...product,
            sizes: newSizesArray,
          }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  function handleAddressChange(event: StripeAddressElementChangeEvent) {
    const name = event.value.name
    const address = event.value.address

    setName(name)
    setShippingInfo(address)
  }

  return (
    <Container>
      <ButtonContainer>
        <StyledNavLink to={"/cart"}>Go Back</StyledNavLink>
      </ButtonContainer>
      <Form onSubmit={(event) => handlePaymentForm(event)}>
        <AddressElement options={{ mode: "shipping" }} onChange={(event) => {handleAddressChange(event)}}/>
        <PaymentElement id="payment-element" />
        <StyledButton disabled={isProcessing || !stripe || !elements}>{isProcessing ? "Processing..." : `Pay $${totalPrice}`}</StyledButton>
      </Form>
      {message && <StatusMessage>{message}</StatusMessage>}
    </Container>
  )
}