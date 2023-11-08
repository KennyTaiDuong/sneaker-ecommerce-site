import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  grid-column: 1 / -1;
  background-color: rgb(200, 200, 200);
  min-height: 20rem;

  @media screen and (min-width: 650px) {
    grid-column: 1 / -1;    
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  color: var(--red-400);
  cursor: pointer;
`

export const EmptyFeed = () => {
  return (
    <Container>
      No products found! Please change your search or click 
      <StyledNavLink to="/products"> here </StyledNavLink>
      to view all products.
    </Container>
  )
}