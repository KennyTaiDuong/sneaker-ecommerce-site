import styled from "styled-components"
import { useState } from "react"

// Icons/Logos/Images
import logo from "../../assets/logo/aksupplied.png" 
import hamburgerIcon from "../../assets/icons/hamburger-icon.svg"
import { NavLink, useNavigate } from "react-router-dom"
import Background from "../../assets/backgrounds/lostnfound.jpg"

const Container = styled.div`
  background-image: url(${Background});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`

const DarkContainer = styled.div`
  background-color: rgb(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  @media screen and (min-width: 650px) {
    padding: 1.5rem;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 650px) {
    display: grid;
    grid-template-columns: 50% repeat(3, auto);
  }
`

const SearchBar = styled.form`
  background-color: white;
  display: flex;
  border-radius: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #fff;
  width: 100%;
  margin: 0 auto;
  max-width: 40rem;
`

const Logo = styled.img`
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 0 20px black;

  @media screen and (min-width: 650px) {
    height: 5rem;
  }
`

const Icon = styled.img`
  width: 2rem;
  cursor: pointer;

  @media screen and (min-width: 650px) {
    display: none;
  }
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
  }

  @media screen and (min-width: 650px) {
    font-size: 1.25rem;
  }
`

const StyledNavLink = styled(NavLink)`
  grid-column: 1;
  grid-row: 1;
`

const SearchLabel = styled(MenuLabel)`
  grid-column: 2;
`

const CartLabel = styled(MenuLabel)`
  grid-column: 3;
`

const AccountLabel = styled(MenuLabel)`
  grid-column: 4;
`

const StyledInput = styled.input`
  border: 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`

const StyledSpan = styled.span`


  @media screen and (min-width: 650px) {
    grid-column: 1;
    grid-row: 1;
  }
`

type SidebarProps = {
  setMenuIsOpen: () => void
}

export const Header = ({ setMenuIsOpen }: SidebarProps) => {
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const navigate = useNavigate()

  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    navigate(`/products?query=${searchQuery}&brand=&page=1`)
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value)
  }

  return (
    <Container>
      <DarkContainer>
        <IconContainer>
          <Icon src={hamburgerIcon} alt="hamburger icon" data-cy="hamburger-icon" onClick={setMenuIsOpen}/>
          <SearchLabel data-cy="search-button" onClick={() => setSearchIsOpen(prev => !prev)} >Search</SearchLabel>
          <StyledSpan>
            <StyledNavLink to="/"><Logo src={logo} alt="aksupplied logo" /></StyledNavLink>
          </StyledSpan>
          <CartLabel onClick={() => navigate("/cart")}>Cart</CartLabel>
          <AccountLabel onClick={() => navigate("/profile")}>Account</AccountLabel>
        </IconContainer>
        <SearchBar 
          data-cy="search-bar" 
          style={{ display: `${searchIsOpen ? "block" : "none"}`}} 
          onSubmit={(e) => handleOnSubmit(e)}
        >
          <StyledInput 
            type="text" 
            name="search-bar"
            placeholder={`Search for an item`} 
            onChange={(event) => {handleInputChange(event)}}
          />
        </SearchBar>
      </DarkContainer>
    </Container>
  )
}