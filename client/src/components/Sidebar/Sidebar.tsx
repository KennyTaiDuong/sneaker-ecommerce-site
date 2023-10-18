import styled from "styled-components";

import RightArrow from "../../assets/icons/right-arrow-icon.svg"
import CloseIcon from "../../assets/icons/x-icon.svg"
import CompanyLogo from "../../assets/logo/aksupplied.png"

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  border: 1px solid red;
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

const Icon = styled.img`


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

const MenuItem = styled.p`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding: 0.5rem;
  font-weight: 500;

  &:hover {
    border-left: 3px solid var(--red-400);
    color: var(--red-400);
    cursor: pointer;
    font-weight: 700;
  }
`

type SidebarProps = {
  setMenuIsOpen: () => void
}

export const Sidebar = ({ setMenuIsOpen }: SidebarProps) => {

  return (
    <Container>
      <StyledHeader>
        <Logo src={CompanyLogo} id="aksupplied"/>
        <Icon src={CloseIcon} onClick={setMenuIsOpen} data-cy="close-button" />
      </StyledHeader>
      <MenuCategory>Shop by Brand:</MenuCategory>
      <MenuContainer>
        <MenuItem>
          Nike
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem>
          Jordan
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem>
          Yeezy
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem>
          Adidas
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem>
          New Balance
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
        <MenuItem>
          Asics
          <Icon src={RightArrow} alt="right arrow"/>
        </MenuItem>
      </MenuContainer>
    </Container>
  )
}