import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"
import { useAuth0 } from "@auth0/auth0-react"
import { ServiceBanner } from "../ServiceBanner/ServiceBanner"

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
`

const FooterContainer = styled.div`
  margin-top: auto;
`

export type UserType = {
  email: string,
  first_name: string,
  last_name: string,
  id: number,
  phone: string,
  shipping_info: ShippingInfoType,
}

type ShippingInfoType = {
  street_number: string,
  street_name: string,
  city: string,
  state: string,
  zip: string,
  country: string
}

export type CartItemType = {
  sku: string,
  size: string,
  quantity: string,
  name: string,
  price: number
}

export type CartType = {
  products?: CartItemType[],
  user_id: number,
  id: number,
}

type UserDataContextType = {
  currentUser?: UserType,
  setCurrentUser: Dispatch<SetStateAction<UserType | undefined>>,
  currentCart?: CartType,
  setCurrentCart: Dispatch<SetStateAction<CartType | undefined>>
}

const defaultState = {
  currentUser: {},
  setCurrentUser: () => {},
  currentCart: {},
  setCurrentCart: () => {}
} as unknown as UserDataContextType

export const UserDataContext = createContext<UserDataContextType>(defaultState)

export const Layout = () => {
  const { isAuthenticated, user } = useAuth0()
  
  // State variables to store cart and user
  const [currentUser, setCurrentUser] = useState<UserType>()
  const [currentCart, setCurrentCart] = useState<CartType>()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  
  useEffect(() => {
    async function getUser() {
      console.log("running function")
      try {
        const res = await fetch(`http://localhost:5000/api/users/${user?.email}`);
  
        const result = await res.json();
        console.log("getting results")
  
        // user object found in results, set user object in state, else create user
        if (result.rows.length > 0) {
          setCurrentUser(result.rows[0]);
        } else {
          postUser()
        }
      } catch (error) {
        console.log("encoutered error")
        console.error(error);
      }
    }

    async function postUser() {
      // new user object model
      const newUser = {
        email: user?.email,
        phone: "",
        first_name: "",
        last_name: "",
        shipping_info: {}
      }
  
      // create new user
      try {
  
        await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
        })
  
      } catch (error) {
        console.error(error)
      }
    }

    if (isAuthenticated) {
      console.log("user authenticated")
      getUser()
    }

  }, [isAuthenticated])

  useEffect(() => {
    async function getCart() {
      // search for user's cart in db
      try {
        const res = await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`)
  
        const cart = await res.json()
  
        if (cart.rows.length === 0) {
          // if no cart found, create new cart
          postCart()
        } else {
          // if cart found, set state with cart data
          setCurrentCart(cart.rows[0])
        }
  
      } catch (error) {
        console.error(error)
      }
    }

    async function postCart() {

      // new cart object model
      const newCart = {
        products: [],
        user_id: currentUser?.id
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
  
      } catch (error) {
        console.error(error)
      }
    }

    if (currentUser) {
      getCart()
    }
  }, [currentUser])

  return (
    <SiteContainer>
      {menuIsOpen && <Sidebar setMenuIsOpen={() => setMenuIsOpen(false)} />}
      <Header setMenuIsOpen={() => setMenuIsOpen(true)} />

      <UserDataContext.Provider value={{ currentUser, setCurrentUser, currentCart, setCurrentCart }}>
        <Outlet />
      </UserDataContext.Provider>
      
      <FooterContainer>
        <ServiceBanner />
        <Footer />
      </FooterContainer>
    </SiteContainer>
  )
}