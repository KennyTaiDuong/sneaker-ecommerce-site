import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 2px solid rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  padding: 0.5rem 0;
  font-weight: 700;
`

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton 
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </StyledButton>
  )
}