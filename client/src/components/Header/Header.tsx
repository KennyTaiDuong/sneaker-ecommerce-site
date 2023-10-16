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

const Logo = styled.img`
  height: 4rem;
  border-radius: 50%;
  margin: 0 auto;
`

const Icon = styled.img`
  width: 2rem;
`

const StyledInput = styled.input`
  border: 0;
`

export const Header = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  return (
    <Container>
      <Logo src={logo} alt="aksupplied logo" />
      <IconContainer>
        <Icon src={hamburgerIcon} alt="hamburger icon" />
        <Icon src={searchIcon} alt="search icon 1" style={{ filter: "brightness(1000%)", width: "1.5rem"}} data-cy="search-icon" onClick={() => setSearchIsOpen(prev => !prev)} />
        <Icon src={cartIcon} alt="cart icon" />
        <Icon src={userIcon} alt="user icon" />
      </IconContainer>
      <SearchBar data-cy="search-bar" style={{ display: `${searchIsOpen ? "block" : "none"}`}}>
        <Icon src={searchIcon} alt="search icon 2" style={{ width: "1.5rem"}} />
        <StyledInput type="text" placeholder="Search here"/>
      </SearchBar>
    </Container>
  )
}