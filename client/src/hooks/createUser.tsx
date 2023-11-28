import { useEffect } from "react"
import fetchUser from "./fetchUser"

const createUser = (email: string | undefined) => {
  useEffect(() => {
    async function postUser() {
      // new user object model
      const newUser = {
        email: email,
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
        
        fetchUser(email)
      } catch (error) {
        console.error(error)
      }
    }

    postUser()
  }, [email])

  return
}

export default createUser