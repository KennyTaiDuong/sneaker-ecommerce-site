import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"
import { useAuth0 } from "@auth0/auth0-react"
import { ServiceBanner } from "../ServiceBanner/ServiceBanner"
import fetchUser from "../../hooks/fetchUser"
import fetchCart from "../../hooks/fetchCart"

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
  setCurrentUser: () => void {},
  currentCart: {},
  setCurrentCart: () => void {}
} as unknown as UserDataContextType

export const UserDataContext = createContext<UserDataContextType>(defaultState)

export const Layout = () => {
  const { isAuthenticated, user } = useAuth0()
  
  // State variables to store cart and user
  const [currentUser, setCurrentUser] = useState<UserType>()
  const [currentCart, setCurrentCart] = useState<CartType>()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const userData = fetchUser(user?.email);
  const cart = fetchCart(currentUser?.id);

  
  useEffect(() => {
    const getUser = async () => {
      setCurrentUser(await userData);
    };
  
    const getCart = async () => {
      setCurrentCart(await cart);
    };

    if (isAuthenticated) {
      getUser()
    }

    if (currentUser) {
      getCart()
    }
  }, [isAuthenticated, userData])

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