import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "../../components/LogoutButton/LogoutButton";
import { LoginPage } from "./LoginPage";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`

const Heading = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
`

const ProfilePic = styled.img`
  width: 6rem;
  border-radius: 50%;
`

const Label = styled.p`
  color: rgb(160, 160, 160);
  font-size: 0.875rem;
`

const InfoContainer = styled.div`

`

const Username = styled.p`
  font-weight: 700;
`

const Email = styled.p`

`

export const Profile = () => {
  const userAuth = useAuth0();
  console.log(userAuth)
  const { isLoading, isAuthenticated, user } = userAuth
  console.log(user)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated ? (
      <ProfileContainer>
        <Heading>Account Information</Heading>
        <ProfilePic src={user?.picture} alt={user?.name} />
        <InfoContainer>
          <Label>Profile Name:</Label>
          <Username>{user?.name}</Username>
        </InfoContainer>
        <InfoContainer>
          <Label>Profile Email:</Label>
          <Email>{user?.email}</Email>
        </InfoContainer>
        <LogoutButton />
      </ProfileContainer>
    ) :
    <LoginPage />
  )
}