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
`

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SearchBar = styled.form`
  background-color: white;
  display: flex;
  border-radius: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #fff;
`

const Logo = styled.img`
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 0 20px black;
`

const Icon = styled.img`
  width: 2rem;
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
          <MenuLabel data-cy="search-button" onClick={() => setSearchIsOpen(prev => !prev)} >Search</MenuLabel>
          <NavLink to="/"><Logo src={logo} alt="aksupplied logo" /></NavLink>
          <MenuLabel onClick={() => navigate("/cart")}>Cart</MenuLabel>
          <MenuLabel onClick={() => navigate("/profile")}>Account</MenuLabel>
        </IconContainer>
        <SearchBar 
          data-cy="search-bar" 
          style={{ display: `${searchIsOpen ? "block" : "none"}`}} 
          onSubmit={(e) => handleOnSubmit(e)}
        >
          <StyledInput 
            type="text" 
            name="search-bar"
            placeholder={`Search for an item (include punctuation)`} 
            onChange={(event) => {handleInputChange(event)}}
          />
        </SearchBar>
      </DarkContainer>
    </Container>
  )
}