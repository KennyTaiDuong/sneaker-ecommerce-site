import { useEffect, useState } from "react"
import createCart from "./createCart"
import { CartType } from "../components/Layout/Layout"

type PropsType = {
  user_id: number | undefined,
}

const fetchCart = async ({ user_id }: PropsType): Promise<CartType | undefined> => {
  const [cart, setCart] = useState()

  useEffect(() => {
    async function getCart() {
      // search for user's cart in db
      try {
        const res = await fetch(`http://localhost:5000/api/carts/${user_id}`)
  
        const cart = await res.json()
  
        if (cart.rows.length === 0) {
          // if no cart found, create new cart
          createCart(user_id)
        } else {
          // if cart found, set state with cart data
          setCart(cart.rows[0])
        }
  
      } catch (error) {
        console.error(error)
      }
    }
  
    if (user_id) {
      getCart()
    }
  }, [])

  return cart
}

export default fetchCart