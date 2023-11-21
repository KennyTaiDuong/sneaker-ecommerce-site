import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
  width: 100%;

  @media screen and (min-width: 650px) {
    padding: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 2rem;
  }
`

const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`

const ContentText = styled.p`

`

export const Completion = () => {
  return (
    <Container>
      <Heading>Thank you for your order!</Heading>
      <ContentText>
        Expect to receive an email soon with more details about your order.
        Tag us on Instagram when you receive your items to be shouted out on our story.
      </ContentText>
    </Container>
  )
}