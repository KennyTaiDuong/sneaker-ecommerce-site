import { NavLink } from "react-router-dom";
import styled from "styled-components";

import DangerIcon from "../../assets/icons/danger-icon.png"

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.1);
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  border-radius: 0.25rem;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  color: var(--red-400);
  cursor: pointer;
`

const Message = styled.p`
  max-width: 30ch;
`

const Icon = styled.img`
  width: 6rem;
`

export const EmptyFeed = () => {
  return (
    <Container>
      <Icon src={DangerIcon} />
      <Message>
        No products found! Please change your search or click 
        <StyledNavLink to="/products"> here </StyledNavLink>
        to view all products.
      </Message>
    </Container>
  )
}