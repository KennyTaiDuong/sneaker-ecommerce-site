import styled from "styled-components";

import RightArrow from "../../assets/icons/right-arrow-icon.svg"
import CloseIcon from "../../assets/icons/x-icon.svg"
import CompanyLogo from "../../assets/logo/aksupplied.png"
import { NavLink } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 2;
  background-color: white;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

const Icon = styled.img`
  cursor: pointer;

  &:hover {
    filter: brightness(10%);
  }
`

const Logo = styled.img`
  width: 3rem;
  border-radius: 50%;
  box-shadow: 0px 0px 10px black;
`

const MenuCategory = styled.p`
  padding: 1rem 0;
  font-weight: 700;
`

const MenuContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`

const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding: 0.5rem;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  color: black;

  &::after {
    content: "";
    color: rgb(255, 0, 0);
    position: absolute;
    width: 3px;
    transform: scaleY(0);
    height: 100%;
    left: 0;
    top: 0;
    background-color: #ff0000;
    transform-origin: bottom;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleY(1);
    transform-origin: top;
  }

  &:hover {
    color: rgb(255, 0, 0);
  }
`

type SidebarProps = {
  setMenuIsOpen: () => void
}

export const Sidebar = ({ setMenuIsOpen }: SidebarProps) => {

  return (
    <Container>
      <StyledHeader>
        <NavLink to={"/"} onClick={setMenuIsOpen}>
          <Logo src={CompanyLogo} id="aksupplied"/>
        </NavLink>
        <Icon src={CloseIcon} onClick={setMenuIsOpen} data-cy="close-button" />
      </StyledHeader>
      <MenuCategory>Shop by Brand:</MenuCategory>
      <MenuContainer>
        <MenuItem onClick={setMenuIsOpen} to={"/products?page=1"}>
          All Products
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=nike&page=1"}>
          Nike
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=jordan&page=1"}>
          Jordan
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=yeezy&page=1"}>
          Yeezy
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=adidas&page=1"}>
          Adidas
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=new+balance&page=1"}>
          New Balance
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem onClick={setMenuIsOpen} to={"/products?brand=asics&page=1"}>
          Asics
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
      </MenuContainer>
    </Container>
  )
}