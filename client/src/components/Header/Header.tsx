import styled from "styled-components"
import { useState } from "react"

// Icons/Logos/Images
import logo from "../../assets/logo/aksupplied.png" 
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg"

const Container = styled.div`
  background-image: url("src/assets/backgrounds/lostnfound.jpg");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`

const DarkContainer = styled.div`
  background-color: rgb(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1px solid #999999;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const SearchBar = styled.div`
  background-color: white;
  display: flex;
  border-radius: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #fff;
`

const MenuButton = styled.button`

`

const Logo = styled.img`
  height: 4rem;
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 20px black;
`

const Icon = styled.img`
  width: 2rem;
<<<<<<< HEAD
  cursor: pointer;
`

const MenuLabel = styled.p`
  font-weight: 700;
  color: #fff;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    color: rgb(255, 0, 0);
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    bottom: -6px;
    left: 0;
    background-color: #ff0000;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    color: rgb(255, 0, 0);
=======
  height: 2rem;
  border: 1px solid black;
  border-radius: 50%;
  box-shadow: 0px 5px 1px black;

  &:hover {
    translate: 0px -4px;
    box-shadow: 0px 9px 1px black;
>>>>>>> 08c9219584e5b5a81a64ec83c40fdd66ddacfd62
  }
`

const StyledInput = styled.input`
  border: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`

type SidebarProps = {
  setMenuIsOpen: () => void
}

export const Header = ({ setMenuIsOpen }: SidebarProps) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)

  return (
    <Container>
<<<<<<< HEAD
      <DarkContainer>
        <Logo src={logo} alt="aksupplied logo" />
        <IconContainer>
          <Icon src={hamburgerIcon} alt="hamburger icon" data-cy="hamburger-icon" onClick={setMenuIsOpen}/>
          <MenuLabel data-cy="search-button" onClick={() => setSearchIsOpen(prev => !prev)} >Search</MenuLabel>
          <MenuLabel>Cart</MenuLabel>
          <MenuLabel>Account</MenuLabel>
        </IconContainer>
        <SearchBar data-cy="search-bar" style={{ display: `${searchIsOpen ? "block" : "none"}`}}>
          <StyledInput type="text" placeholder="Search for an item"/>
        </SearchBar>
      </DarkContainer>
=======
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
>>>>>>> 08c9219584e5b5a81a64ec83c40fdd66ddacfd62
    </Container>
  )
}