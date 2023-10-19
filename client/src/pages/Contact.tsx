import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContactContainer = styled.div`
  padding: 1rem;
`

const Heading = styled.h2`

`

const Subheading = styled.p`
  padding: 1rem 0;
`

const ContactSection = styled.section`
  background-color: #DCDCDC;
  padding: 1rem;
  display: flex; 
  flex-direction: column;
  gap: 1rem;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`

const ContactHeading = styled.p`
  
`

const ContactSubheading = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
`

const ContactContent = styled.p`

`

const SocialLinks = styled(NavLink)`
  color: blue;
`

const EmailLink = styled.a`
  color: blue;
`

const ServiceSection = styled.div`
  padding: 1rem 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

const ServiceInfo = styled.div`

`

export const Contact = () => {
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Subheading>We love hearing from our customers. Please contact us and we will make sure to get back to you as soon as possible</Subheading>
      <ContactSection>
        <ContactInfo>
          <ContactHeading>Call or text this phone number:</ContactHeading>
          <ContactSubheading>(Monday to Friday, 8am to 8pm EST)</ContactSubheading>
          <ContactContent>1 (800) 123-4567</ContactContent>
        </ContactInfo>
        <ContactInfo>
          <ContactHeading>Follow us on our social media:</ContactHeading>
          <SocialLinks to={"https://www.instagram.com/aksupplied"}>Instagram</SocialLinks>
        </ContactInfo>
        <ContactInfo>
          <ContactHeading>Shoot us an email: </ContactHeading>
          <EmailLink href="mailto: aksupplied@gmail.com">Send Email</EmailLink>
        </ContactInfo>
      </ContactSection>
      <ServiceSection>
        <ServiceInfo>
          <ContactHeading>Business Inquiries</ContactHeading>
          <ContactContent>
            Looking to do business with AKsupplied? We are always looking to 
            buy shoes and clothes. Email us with a list of your inventory and 
            please be sure to include prices and sizes.
          </ContactContent>
        </ServiceInfo>
        <ServiceInfo>
          <ContactHeading>Questions</ContactHeading>
          <ContactContent>
            Just send us any questions or concerns you may have and we will 
            do our best to help you with your needs.
          </ContactContent>
        </ServiceInfo>
      </ServiceSection>
    </ContactContainer>
  )
}