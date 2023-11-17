import { FormEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserDataContext } from "../Layout/Layout";

const Container = styled.div`
  padding: 1rem;
  background: rgb(255, 255, 255);
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
  border: 1px solid #e6e6e6;
  border-radius: 0.25rem;
  padding: 0.75rem;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02);

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
  background: rgb(195,71,82);
  color: white;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
`

type ShippingInfoType = {
  street_number: string,
  street_name: string,
  city: string,
  state: string,
  zip: string
}

type Props = {
  setCartStep: React.Dispatch<React.SetStateAction<number>>,
  setShippingInfo: React.Dispatch<React.SetStateAction<ShippingInfoType>>,
  shippingInfo: ShippingInfoType
}

export const ShippingForm = ({ setCartStep, setShippingInfo, shippingInfo }: Props) => {
  const { currentUser } = useContext(UserDataContext)

  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [streetAddress, setStreetAddress] = useState<string>("")
  const [city, setCity] = useState<string>("")
  const [state, setState] = useState<string>("")
  const [zip, setZip] = useState<string>("")
  
  useEffect(() => {

    if (currentUser?.first_name) {      
      setFirstName(currentUser?.first_name)
      setLastName(currentUser?.last_name)
      setPhoneNumber(currentUser?.phone)
    }

    if (shippingInfo.street_number) {
      setStreetAddress(shippingInfo.street_number + " " + shippingInfo.street_name)
      setCity(shippingInfo.city)
      setState(shippingInfo.state)
      setZip(shippingInfo.zip)
    }

  }, [])

  function clearForm() {
    setFirstName("")
    setLastName("")
    setPhoneNumber("")
    setStreetAddress("")
    setCity("")
    setState("")
    setZip("")
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const addressArray = streetAddress.split(" ")

    const streetNumber = addressArray[0]
    const streetName = addressArray.slice(1).join(" ")

    setShippingInfo({
      street_number: streetNumber,
      street_name: streetName,
      city: city,
      state: state,
      zip: zip
    })

    setCartStep(3)
  }

  return (
    <Container>
      <Form id="shipping-form" onSubmit={(e) => handleSubmit(e)}>
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
            placeholder="10-digit number"
            maxLength={10}
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
            required
          />
        </InputLabel>
        <InputLabel htmlFor="city">
          City
          <TextInput 
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </InputLabel>
        <InputLabel htmlFor="state">
          State
          <TextInput 
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            maxLength={2}
            placeholder="2 Characters"
            required
          />
        </InputLabel>
        <InputLabel htmlFor="zip">
          ZIP
          <TextInput 
            type="text"
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
            placeholder="5-digits"
            maxLength={5}
            required
          />
        </InputLabel>
      </Form>
      <ButtonContainer>
        <StyledButton onClick={() => setCartStep(1)}>Go Back</StyledButton>
        <StyledButton onClick={() => clearForm()}>Clear Form</StyledButton>
        <StyledButton type="submit" form="shipping-form">Continue to Payment</StyledButton>
      </ButtonContainer>
    </Container>
  )
}