import styled from "styled-components"
import { useState } from "react"

// Icons/Logos
import logo from "../../assets/logo/aksupplied.png" 
import cartIcon from "../../assets/icons/cart-icon.svg"
import searchIcon from "../../assets/icons/search-icon.svg"
import userIcon from "../../assets/icons/user-icon.svg"
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg"

const Container = styled.div`
  background-color: rgba(188,50,48,255);
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
`

const SearchBar = styled.div`
  background-color: white;
  display: flex;
  border-radius: 1.5rem;
  padding: 0.5rem;
`

const MenuButton = styled.button`

`

const Logo = styled.img`
  height: 4rem;
  border-radius: 50%;
  margin: 0 auto;
`

const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 0px 5px 1px black;

  &:hover {
    translate: 0px -4px;
    box-shadow: 0px 9px 1px black;
  }
`

const StyledInput = styled.input`
  border: 0;
`

type SidebarProps = {
  setMenuIsOpen: () => void
}

export const Header = ({ setMenuIsOpen }: SidebarProps) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  return (
    <Container>
      <Logo src={logo} alt="aksupplied logo" />
      <IconContainer>
        <MenuButton onClick={setMenuIsOpen}>
          <Icon src={hamburgerIcon} alt="hamburger icon" data-cy="hamburger-icon" />
        </MenuButton>
        <MenuButton onClick={() => setSearchIsOpen(prev => !prev)}>
          <Icon src={searchIcon} alt="search icon 1" data-cy="search-icon" />
        </MenuButton>
        <MenuButton>
          <Icon src={cartIcon} alt="cart icon" />
        </MenuButton>
        <MenuButton>
          <Icon src={userIcon} alt="user icon" />
        </MenuButton>
      </IconContainer>
      <SearchBar data-cy="search-bar" style={{ display: `${searchIsOpen ? "block" : "none"}`}}>
        <StyledInput type="text" placeholder="Search here"/>
      </SearchBar>
    </Container>
  )
}