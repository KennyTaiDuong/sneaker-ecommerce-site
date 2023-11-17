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
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 2rem 6rem 2.5rem 1fr;
    column-gap: 2rem;
    padding: 1.5rem;
  }
`

const Heading = styled.p`
  font-size: 1.75rem;
  font-weight: 700;

  @media screen and (min-width: 650px) {
    grid-column: 1;
  }
`

const ProfileSection = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  grid-template-rows: 3rem;
  gap: 0.5rem;

  @media screen and (min-width: 650px) {
    grid-column: 1;
  }
`

const ProfilePic = styled.img`
  width: 6rem;
  border-radius: 50%;
`

const Label = styled.p`
  color: rgb(160, 160, 160);
  font-size: 0.875rem;
`

const UserContainer = styled.div`
  grid-column: 2;
  grid-row: 1;
`

const EmailContainer = styled(UserContainer)`
  grid-row: 2;
`

const Username = styled.p`
  font-weight: 700;
`

const Email = styled.p`

`

const FormContainer = styled.form`
  

  @media screen and (min-width: 650px) {
    grid-column: 2;
    grid-row: 1 / -1;
  }
`

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

const SectionName = styled.p`
  font-weight: 700;
  font-size: 1.25rem;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  padding: 0.25rem;

  &:focus {
    outline: 0;
  }
`

const StyledLabel = styled.label`

`

const FormButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  background-color: rgb(42, 201, 21);
  border: 3px solid rgb(0, 141, 7);
`

export const Profile = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  const { currentUser, setCurrentUser } = useContext(UserDataContext)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [streetAddress, setStreetAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    updateNewUserData()
  }

  async function updateNewUserData() {
    const streetNumber = streetAddress?.split(" ", 1)
    const streetName = streetAddress?.split(" ").slice(1).join(" ")

    try {
      await fetch(`http://localhost:5000/api/users/${currentUser?.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: currentUser?.email,
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          phone: phoneNumber.trim(),
          shipping_info: {
            street_number: streetNumber[0],
            street_name: streetName.trim(),
            state: state.trim(),
            city: city.trim(),
            zip: zip.trim(),
            country: "US"
          }
        })
      })

      fetchUser() 
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) {
    return <ProfileContainer>Loading...</ProfileContainer>
  }

  async function fetchUser() {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${currentUser?.email}`)

      const data = await res.json()

      setCurrentUser(data.rows[0])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    isAuthenticated ? (
      <ProfileContainer>
        <Heading>Account Information</Heading>
        <ProfileSection>
          <ProfilePic src={user?.picture} alt={user?.name} />
          <UserContainer>
            <Label>Profile Name:</Label>
            <Username>{currentUser?.first_name ? `${currentUser.first_name + ' ' + currentUser.last_name}` : user?.nickname}</Username>
          </UserContainer>
          <EmailContainer>
            <Label>Profile Email:</Label>
            <Email>{user?.email}</Email>
          </EmailContainer>
        </ProfileSection>
        <FormContainer onSubmit={(e) => handleFormSubmit(e)} >
          <UserInfoSection>
            <SectionName>Update Profile Information</SectionName>
            <InputContainer>
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
                value={firstName ? firstName : ""}
              />
            </InputContainer>
            <InputContainer>
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
                onChange={(e) => {setLastName(e.target.value)}}
                value={lastName ? lastName : ""}
              />
            </InputContainer>
            <InputContainer>
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
                placeholder="ex. 1234567890" 
                onChange={(e) => {setPhoneNumber(e.target.value)}}
                value={phoneNumber ? phoneNumber : ""}
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              />
            </InputContainer>
          </UserInfoSection>

          <UserInfoSection>
            <SectionName>Shipping Details</SectionName>
            <InputContainer>
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
                onChange={(e) => {setStreetAddress(e.target.value)}}
                value={streetAddress ? streetAddress : ""}
              />
            </InputContainer>
            <InputContainer>
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
                onChange={(e) => {setCity(e.target.value)}}
                value={city ? city : ""}
              />
            </InputContainer>
            <InputContainer>
              <StyledLabel 
                htmlFor="state"
              >
                State
              </StyledLabel>
              <StyledInput 
                required 
                type="text" 
                id="state" 
                placeholder="2-letter State" 
                onChange={(e) => {setState(e.target.value)}}
                value={state ? state : ""}
                maxLength={2}
              />
            </InputContainer>
            <InputContainer>
              <StyledLabel 
                htmlFor="zip"
              >
                ZIP or Postal code
              </StyledLabel>
              <StyledInput 
                required 
                type="number" 
                id="zip" 
                placeholder="5-digit ZIP"
                onChange={(e) => {setZip(e.target.value)}} 
                value={zip ? zip : ""}
                pattern="[0-9]{5}"
              />
            </InputContainer>
            <InputContainer>
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
            </InputContainer>
          </UserInfoSection>

          <FormButton type="submit">Update Profile</FormButton>
        </FormContainer>
        <LogoutButton />
      </ProfileContainer>
    ) :
    <LoginPage />
  )
}