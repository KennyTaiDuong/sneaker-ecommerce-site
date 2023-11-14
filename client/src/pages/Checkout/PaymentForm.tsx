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
  background: rgb(195,71,82);
  color: white;
`

const StatusMessage = styled.p`

`

type Props = {
  setCartStep: Dispatch<SetStateAction<number>>
}

export const PaymentForm = ({ setCartStep }: Props) => {
  const [message, setMessage] = useState<string | undefined>("")
  const [isProcessing, setIsProcessing] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
        receipt_email: "kennyduong537@gmail.com"
      },
      redirect: "if_required"
    })

    console.log(paymentIntent)

    if (error) {
      setMessage(error?.message)
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage(`Payment status: ${paymentIntent.status}`)
      setIsProcessing(false)
    } else {
      setMessage("Unexpected error")
    }
  }

  return (
    <Container>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <PaymentElement />
        <StyledButton onClick={() => setCartStep(2)}>Go Back</StyledButton>
        <StyledButton disabled={isProcessing}>{isProcessing ? "Processing..." : "Pay Now"}</StyledButton>
        {message && <StatusMessage>{message}</StatusMessage>}
      </Form>
    </Container>
  )
}