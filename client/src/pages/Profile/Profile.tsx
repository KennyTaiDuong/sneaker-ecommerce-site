import styled from "styled-components";
import { User, useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { LoginPage } from "./LoginPage";
import { useEffect } from "react";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

const Heading = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
`

const ProfilePic = styled.img`
  width: 6rem;
  border-radius: 50%;
`

const Label = styled.p`
  color: rgb(160, 160, 160);
  font-size: 0.875rem;
`

const InfoContainer = styled.div`

`

const Username = styled.p`
  font-weight: 700;
`

const Email = styled.p`

`

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

export const Profile = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  

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
        const res = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser)
        })

        console.log("Creating new user")
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
        createNewUser()
      }
      
    }

    fetchAllUsers()
  }, [isAuthenticated])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated ? (
      <ProfileContainer>
        <Heading>Account Information</Heading>
        <ProfilePic src={user?.picture} alt={user?.name} />
        <InfoContainer>
          <Label>Profile Name:</Label>
          <Username>{user?.name}</Username>
        </InfoContainer>
        <InfoContainer>
          <Label>Profile Email:</Label>
          <Email>{user?.email}</Email>
        </InfoContainer>
        <LogoutButton />
      </ProfileContainer>
    ) :
    <LoginPage />
  )
}