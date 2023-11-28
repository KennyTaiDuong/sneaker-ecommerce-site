import { useState } from "react"
import createUser from "./createUser"
import { UserType } from "../components/Layout/Layout"

const fetchUser = async (email: string | undefined): Promise<UserType | undefined> => {
  const [data, setData] = useState()


  async function getUser() {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${email}`);

      const result = await res.json();

      // user object found in results, set user object in state, else create user
      if (result.rows && result.rows.length > 0) {
        setData(result.rows[0]);
      } else {
        createUser(email)
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (email) {
    getUser();
  }


  return data
}

export default fetchUser