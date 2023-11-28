import { useEffect } from "react"
import fetchCart from "./fetchCart"


const createCart = (user_id: number | undefined) => {
  useEffect(() => {
    async function postCart() {

      // new cart object model
      const newCart = {
        products: [],
        user_id: user_id
      }

      // create new cart
      try {
        await fetch("http://localhost:5000/api/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart)
        })

        // re-fetch cart and set state
        fetchCart(user_id)

      } catch (error) {
        console.error(error)
      }
    }

    postCart()
  }, [user_id])
}

export default createCart