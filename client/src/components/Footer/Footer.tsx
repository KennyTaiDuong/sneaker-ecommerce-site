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
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin-top: auto;

  @media screen and (min-width: 650px) {
    flex-direction: row;
    padding: 1.5rem;
  }
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
`

const ContactSection = styled(StyledSection)`
  grid-column: 1;
  grid-row: 1 / 3;
`

const LinkSection = styled(StyledSection)`
  grid-column: 2;
`

const SocialSection = styled(StyledSection)`
  grid-column: 2;
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
        <ContactSection>
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
        </ContactSection>
        <LinkSection>
          <SectionTitle>Site Links</SectionTitle>
          <FooterLinks to="/">Home</FooterLinks>
          <FooterLinks to="/products">Products</FooterLinks>
          <FooterLinks to="/contact">Contact</FooterLinks>
        </LinkSection>
        <SocialSection>
          <SectionTitle>Social Media</SectionTitle>
          
          <FooterLinks to="https://www.instagram.com/aksupplied">
            <Logo src={IGLogo} />
            Instagram
          </FooterLinks>
          <FooterLinks to="https://www.tiktok.com/@aksuppliedsneakers">
            <Logo src={TikTokLogo} />
            TikTok
          </FooterLinks>
          <FooterLinks to="">
            <Logo src={TwitterLogo} />
            Twitter
          </FooterLinks>
        </SocialSection>
      </Container>
  )
}