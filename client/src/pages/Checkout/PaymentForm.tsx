import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 1rem;
`

const Form = styled.form`
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: white;
`

const StyledButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 0;
  background: #2db105;
  color: white;
`

type Props = {
  setCartStep: Dispatch<SetStateAction<number>>
}

export const PaymentForm = ({ setCartStep }: Props) => {
  const [message, setMessage] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true)

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      }
    })
  }

  return (
    <Container>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <PaymentElement />
        <StyledButton onClick={() => setCartStep(2)}>Go Back</StyledButton>
        <StyledButton disabled={isProcessing}>{isProcessing ? "Processing..." : "Pay Now"}</StyledButton>
      </Form>
    </Container>
  )
}