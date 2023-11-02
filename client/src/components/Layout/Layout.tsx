import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { useEffect, useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"
import { useAuth0 } from "@auth0/auth0-react"

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;  
`

type UserType = {
  created_on: string,
  updated_on: string,
  email: string,
  first_name: string,
  last_name: string,
  id: number,
  user_id: string
  phone: string,
  shipping_info: {},
}

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { isAuthenticated, user } = useAuth0()

  const [currentUser, setCurrentUser] = useState<UserType>()
  const [, setCurrentCart] = useState()

  useEffect(() => {
    async function createUser() {
      // Send post request to http://localhost:5000/api/users and add new user
      const newUser = {
        email: user?.email,
        phone: 1234567890,
        first_name: "",
        last_name: "",
        shipping_info: {}
      }

      try {
        await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
        })

        fetchUser()

      } catch (error) {
        console.error(error)
      }
    }

    async function fetchUser() {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${user?.email}`)

        const data = await res.json()

        if (data.rows.length === 0) {
          createUser()
          
        } else {
          setCurrentUser(data.rows[0])
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (isAuthenticated) {
      fetchUser()
    }
  }, [isAuthenticated])

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch(`http://localhost:5000/api/carts/${currentUser?.id}`)

        const cart = await res.json()

        if (cart.rows.length === 0) {
          createCart()
        } else {
          setCurrentCart(cart.rows[0])
        }

      } catch (error) {
        console.error(error)
      }
    } 

    async function createCart() {

      const newCart = {
        products: [],
        user_id: currentUser?.id
    }

      try {
        await fetch("http://localhost:5000/api/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCart)
        })

        fetchCart()

      } catch (error) {
        console.error(error)
      }
    }

    if (currentUser) {
      fetchCart()
    }
  }, [currentUser])


  return (
    <SiteContainer>
      {menuIsOpen && <Sidebar setMenuIsOpen={() => setMenuIsOpen(false)} />}
      <Header setMenuIsOpen={() => setMenuIsOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteContainer>
  )
}