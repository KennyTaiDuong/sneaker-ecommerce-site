import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { LoginPage } from "./LoginPage";
import { UserDataContext } from "../../components/Layout/Layout";
import { FormEvent, useContext, useState } from "react";

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

const FormContainer = styled.form`
  
`

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const SectionName = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
`

const StyledInput = styled.input`
  padding: 0.25rem;
`

const StyledLabel = styled.label`

`

const FormButton = styled.button`
  width: 100%;
  padding: 0.5rem;
`

type UserType = {
  email: string | undefined,
  first_name: string | undefined,
  last_name: string | undefined,
  phone: string | undefined,
  shipping_info: {},
}

export const Profile = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const { currentUser } = useContext(UserDataContext)

  const [firstName, setFirstName] = useState(currentUser?.first_name)
  const [lastName, setLastName] = useState(currentUser?.last_name)
  const [phoneNumber, setPhoneNumber] = useState(currentUser?.phone)
  const [streetAddress, setStreetAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

  const [newUserData, setNewUserData] = useState<UserType | undefined>(currentUser)

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const streetNumber = streetAddress.split(" ", 1)
    const streetName = streetAddress.split(" ").slice(1).join(" ")
    const shippingInfo = {
      street_number: streetNumber[0],
      street_name: streetName,
      state: state,
      city: city,
      zip: zip,
      country: "US"
    }
    
    setNewUserData({
      email: currentUser?.email,
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      shipping_info: shippingInfo 
    })

    postNewUserData()
  }

  async function postNewUserData() {
    try {
      console.log(newUserData)
      const res = await fetch(`http://localhost:5000/api/users/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserData)
      })

      const data = await res.json()

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  
  if (isLoading) {
    return <ProfileContainer>Loading...</ProfileContainer>
  }

  return (
    isAuthenticated ? (
      <ProfileContainer>
        <Heading>Account Information</Heading>
        <ProfilePic src={user?.picture} alt={user?.name} />
        <InfoContainer>
          <Label>Profile Name:</Label>
          <Username>{currentUser?.first_name ? currentUser.first_name + currentUser.last_name : user?.nickname}</Username>
        </InfoContainer>
        <InfoContainer>
          <Label>Profile Email:</Label>
          <Email>{user?.email}</Email>
        </InfoContainer>
        <FormContainer onSubmit={(e) => handleFormSubmit(e)}>
          <SectionName>Profile Information</SectionName>
          <UserInfoSection>
            <StyledLabel 
              htmlFor="first"
            >
              First Name
            </StyledLabel>
            <StyledInput 
              required 
              type="text" 
              id="first" 
              placeholder="Enter first name" 
              onChange={(e) => {setFirstName(e.target.value)}} 
              value={firstName}
            />
            <StyledLabel 
              htmlFor="last"
            >
              Last Name
            </StyledLabel>
            <StyledInput 
              required 
              type="text" 
              id="last" 
              placeholder="Enter last name" 
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <StyledLabel 
              htmlFor="phone"
            >
              Phone Number
            </StyledLabel>
            <StyledInput 
              required 
              autoComplete="phone" 
              type="number" 
              id="phone" 
              placeholder="Enter phone number" 
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </UserInfoSection>

          <SectionName>Shipping Details</SectionName>
          <UserInfoSection>
            <StyledLabel 
              htmlFor="street"
            >
              Street Address
            </StyledLabel>
            <StyledInput 
              required 
              type="text" 
              id="street" 
              placeholder="Enter street address" 
              onChange={(e) => setStreetAddress(e.target.value)}
              value={streetAddress}
            />
            <StyledLabel 
              htmlFor="city"
            >
              City
            </StyledLabel>
            <StyledInput 
              required 
              type="text" 
              id="city" 
              placeholder="Enter city" 
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <StyledLabel 
              htmlFor="state"
            >
              State
            </StyledLabel>
            <StyledInput 
              required 
              type="text" 
              id="state" 
              placeholder="Enter state" 
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <StyledLabel 
              htmlFor="zip"
            >
              ZIP or Postal code
            </StyledLabel>
            <StyledInput 
              required 
              type="number" 
              id="zip" 
              placeholder="Enter ZIP"
              onChange={(e) => setZip(e.target.value)} 
              value={zip}
            />
            <StyledLabel 
              htmlFor="country"
            >
              Country
            </StyledLabel>
            <StyledInput 
              type="text" 
              id="country" 
              value={"US"}  
              disabled 
            />
          </UserInfoSection>

          <FormButton type="submit">Update Profile</FormButton>
        </FormContainer>
        <LogoutButton />
      </ProfileContainer>
    ) :
    <LoginPage />
  )
}