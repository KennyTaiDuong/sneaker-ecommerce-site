import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserDataContext } from "../../components/Layout/Layout";

const Container = styled.div`
  padding: 1rem;
  background: rgb(195,71,82);
  color: white;
  border-radius: 0.5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column; 
  gap: 1rem;

  @media screen and (min-width: 650px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const Heading = styled.p`
  font-weight: 700;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TextInput = styled.input`
  border: 0;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;

  &:focus {
    outline: 0;
  }
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledButton = styled.button`
  background: white;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
`

export const ShippingForm = () => {
  const { currentUser } = useContext(UserDataContext)

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [streetAddress, setStreetAddress] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [zip, setZip] = useState<string>("")
  
  useEffect(() => {

    if (currentUser?.first_name && currentUser?.last_name) {
      // string together street number and name
      const address = `${
          currentUser?.shipping_info?.street_number 
          ? currentUser?.shipping_info?.street_number 
          : ""
        } ${
          currentUser?.shipping_info?.street_name 
          ? currentUser?.shipping_info?.street_name 
          : ""
        }
      `
      setFirstName(currentUser?.first_name)
      setLastName(currentUser?.last_name)
      setPhoneNumber(currentUser?.phone)
      setStreetAddress(address)
      setCity(currentUser?.shipping_info?.city)
      setState(currentUser?.shipping_info?.state)
      setZip(currentUser?.shipping_info?.zip)
    }

  }, [currentUser])

  function clearForm() {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setStreetAddress("")
    setCity("")
    setState("")
    setZip("")
  }

  return (
    <Container>
      <Form>
        <InputLabel htmlFor="first_name">
          First Name
          <TextInput 
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="last_name">
          Last Name
          <TextInput 
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="phone">
          Phone Number
          <TextInput 
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputLabel>
        <Heading>Shipping Information</Heading>
        <InputLabel htmlFor="street_address">
          Street Address
          <TextInput 
            type="text"
            id="street_address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="city">
          City
          <TextInput 
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="state">
          State
          <TextInput 
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </InputLabel>
        <InputLabel htmlFor="zip">
          ZIP
          <TextInput 
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </InputLabel>
      </Form>
      <ButtonContainer>
        <StyledButton onClick={() => clearForm()}>Clear Form</StyledButton>
        <StyledButton onClick={() => {}}>Continue to Payment</StyledButton>
      </ButtonContainer>
    </Container>
  )
}