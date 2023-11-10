import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`

const Heading = styled.p`

`

const Form = styled.form`
  padding: 1rem;
  background: #888;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  
`

const TextInput = styled.input`
  padding: 0.25rem;
  border-radius: 1rem;
  border: 0;

  &:focus {
    outline: 0;
  }
`

const CheckBox = styled.input`

`
const CheckboxLabel = styled.label`
  display: flex;
  gap: 0.5rem;
`

type Props = {
  useShippingInfo: boolean,
  setUseShippingInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export const PaymentForm = ({ useShippingInfo, setUseShippingInfo }: Props) => {

  if (useShippingInfo) {
    
  }

  return (
    <Container>
      <Form>
        <InputLabel htmlFor="first_name">
          First Name
          <TextInput 
            type="text"
            id="first_name"
          />
        </InputLabel>
        <InputLabel htmlFor="last_name">
          Last Name
          <TextInput 
            type="text"
            id="last_name"
          />
        </InputLabel>
        <InputLabel htmlFor="phone">
          Phone Number
          <TextInput 
            type="text"
            id="phone"
          />
        </InputLabel>
        <Heading>Billing Address</Heading>
        <InputLabel htmlFor="street_address">
          Street Address
          <TextInput 
            type="text"
            id="street_address"
          />
        </InputLabel>
        <InputLabel htmlFor="city">
          City
          <TextInput 
            type="text"
            id="city"
          />
        </InputLabel>
        <InputLabel htmlFor="state">
          State
          <TextInput 
            type="text"
            id="state"
          />
        </InputLabel>
        <InputLabel htmlFor="zip">
          ZIP
          <TextInput 
            type="text"
            id="zip"
          />
        </InputLabel>
        <CheckboxLabel htmlFor="check">
          Billing same as shipping?
          <CheckBox 
            type="checkbox"
            id="check"
            onChange={() => setUseShippingInfo(prev => !prev)}
          />
        </CheckboxLabel>
      </Form>
    </Container>
  )
}