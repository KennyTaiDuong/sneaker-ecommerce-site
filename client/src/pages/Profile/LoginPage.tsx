import styled from "styled-components";
import { LoginButton } from "../../components/LoginButton/LoginButton";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`

const Header = styled.p`

`

export const LoginPage = () => {
  return (
    <Container>
      <Header>You are currently not logged in!</Header>
      <Header>Click on the button below to log in.</Header>
      <LoginButton />
    </Container>
  )
}