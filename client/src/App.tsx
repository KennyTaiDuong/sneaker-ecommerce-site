import { BrowserRouter, Route, Routes } from "react-router-dom";
import Global from "./GlobalStyles";
import { Layout } from "./components/Layout/Layout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ProductsPage } from "./pages/Product/Products";
import { ProductDetail } from "./pages/Product/ProductDetail";
import { ProductsPageLayout } from "./components/Layout/ProductsLayout";
import { Profile } from "./pages/Profile/Profile";
import { Cart } from "./pages/Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

type UsersArray = {
  created_on: string,
  updated_on: string,
  email: string,
  first_name: string,
  last_name: string,
  id: number,
  user_id: string
  phone: string,
  shipping_info: {},
}[]


function App() {
  const { isAuthenticated, isLoading, user } = useAuth0()

  useEffect(() => {
    async function fetchAllUsers() {
      const res = await fetch("http://localhost:5000/api/users")

      const users = await res.json()

      checkUserExists(users.rows)
    }

    async function createNewUser() {
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
        
      } catch (error) {
        console.error(error)
      }
    }

    function checkUserExists(users: UsersArray | []) {
      // if users array is empty, it means there are no users in database
      if (users.length > 0) {
        // search through array to find object with same email
        const foundEmails = users.filter((profile: any) => {
          return profile.email.toLowerCase() === user?.email?.toLowerCase()
        })

        // if email does not exist in db, create new user
        if (foundEmails.length === 0) {
          createNewUser()
        } else {
          console.log("User already made")
        }

      } else {
        // Creates user if database is empty
        createNewUser()
      }
      
    }

    fetchAllUsers()
  }, [isAuthenticated])

  return (
    <BrowserRouter>
      <Global />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<ProductsPageLayout />}>
            <Route index element={<ProductsPage />} />
          </Route>
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
