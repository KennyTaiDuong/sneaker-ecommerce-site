import styled from "styled-components";
import { NavLink } from "react-router-dom";

import IGLogo from "../../assets/logo/logo-instagram.svg"
import TwitterLogo from "../../assets/logo/logo-twitter.svg"
import TikTokLogo from "../../assets/logo/logo-tiktok.svg"
import PhoneLogo from "../../assets/logo/logo-phone.svg"
import EmailLogo from "../../assets/logo/logo-email.svg"

const Container = styled.div`
  background: #303030;
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`

const SectionTitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`

const ContentText = styled.p`
  
`

const ContactInfo = styled.p`
  font-weight: 500;
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
`

const FooterLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`

const Logo = styled.img`
  width: 2rem;
`

export const Footer = () => {
  return (
      <Container>
        <StyledSection>
          <SectionTitle>About Us</SectionTitle>
          <ContentText>
            We aim to provide our customers and clients with 100% 
            satisfaction by supplying them with authentic sneakers 
            and clothing verified by our staff. 
          </ContentText>
          <ContactInfo>
            <Logo src={PhoneLogo} style={{ width: "1rem" }}/>
            +1 (267) 368-1421 or +1 (610) 772-5542
          </ContactInfo>
          <ContactInfo>
            <Logo src={EmailLogo} style={{ width: "1rem" }} />
            aksupplied@gmail.com
          </ContactInfo>
        </StyledSection>
        <StyledSection>
          <SectionTitle>Site Links</SectionTitle>
          <FooterLinks to="">Home</FooterLinks>
          <FooterLinks to="">Products</FooterLinks>
          <FooterLinks to="">Contact</FooterLinks>
        </StyledSection>
        <StyledSection>
          <SectionTitle>Social Media</SectionTitle>
          
          <FooterLinks to="https://www.instagram.com/aksupplied">
            <Logo src={IGLogo} />
            Instagram
          </FooterLinks>
          <FooterLinks to="">
            <Logo src={TikTokLogo} />
            TikTok
          </FooterLinks>
          <FooterLinks to="">
            <Logo src={TwitterLogo} />
            Twitter
          </FooterLinks>
        </StyledSection>
      </Container>
  )
}