import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

const PageButton = styled(NavLink)`
  color: black;
  text-decoration: none;
`

type NavbarProps = {
  pageCount: number
}

export const ProductsNavbar = ({ pageCount }: NavbarProps) => {
  

  return (
    <Container>
      <PageButton to="">{pageCount}</PageButton>
      <PageButton to="">2</PageButton>
      <PageButton to="">3</PageButton>
      <PageButton to="">4</PageButton>
    </Container>
  )
}