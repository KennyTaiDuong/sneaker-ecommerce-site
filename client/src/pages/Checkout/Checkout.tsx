import { Elements } from "@stripe/react-stripe-js";
import { PaymentForm } from "../../components/Checkout/PaymentForm";
import { useContext, useEffect, useState } from "react";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { UserDataContext } from "../../components/Layout/Layout";
import { useNavigate } from "react-router";

export const Checkout = () => {
  const navigate = useNavigate()
  const { currentCart } = useContext(UserDataContext)
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [clientSecret, setClientSecret] = useState("");
  const [totalPrice, setTotalPrice] = useState(0)

  // fetches stripe promise
  useEffect(() => {
    async function fetchStripePromise() {
      try {
        const res = await fetch(`http://localhost:5000/stripe/config`)
  
        const { publishableKey } = await res.json()
  
        setStripePromise(loadStripe(publishableKey))
      } catch (error) {
        console.error(error)
      }
    }

    fetchStripePromise()
  }, [])

  // fetches client secret
  useEffect(() => {
    async function fetchClientSecret() {
      try {
        const res = await fetch(`http://localhost:5000/stripe/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ items: currentCart?.products }),
        })

        const data = await res.json()

        setClientSecret(data.clientSecret)
      } catch (error) {
        console.error(error)
      }
    }

    if (stripePromise && currentCart?.products?.length != 0) {
      fetchClientSecret()
    }
  }, [stripePromise, currentCart])

  // calculates total price of cart
  useEffect(() => {
    
    function getTotalPrice() {

      let total = 0

      currentCart?.products?.forEach((item) => {
        total += item.price * parseInt(item.quantity)
      })

      setTotalPrice(total)
    }

    getTotalPrice()

  }, [currentCart])

  if (currentCart?.products?.length === 0) {
    setTimeout(() => {
      navigate("/cart")
    }, 3000)
  }

  return (
    stripePromise && clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret, loader: "always" }}>
        <PaymentForm totalPrice={totalPrice} />
      </Elements>
    )
  )
}