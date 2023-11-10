import styled from "styled-components";

import DollarIcon from "../../assets/icons/dollar-icon.png"
import QuestionIcon from "../../assets/icons/question-icon.png"
import CheckIcon from "../../assets/icons/check-icon.png"
import { NavLink } from "react-router-dom";

const BannerContainer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  @media screen and (min-width: 650px) {
    grid-column: 1 / -1;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    gap: 1rem;
    padding: 1.5rem;
  }
`
const StyledSection = styled.section`
  width: 100%;
  max-width: 30ch;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const Icon = styled.img`
  width: 5rem;
  background-color: white;
  border-radius: 50%;
  padding: 1.5rem;
`

const BannerText = styled.p`
  font-size: 1rem;

  @media screen and (min-width: 650px) and (max-width: 1023px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.375rem;
  }
`

const Bold = styled.p`
  font-weight: 700;
  font-size: 1rem;

  @media screen and (min-width: 650px) and (max-width: 1023px) {
    font-size: 1.25rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: var(--red-400);
  font-weight: 700;
`

export const ServiceBanner = () => {

  return (
    <BannerContainer>
      <StyledSection>
        <Icon src={QuestionIcon} />
        <Bold>Size out of stock?</Bold>
        <BannerText>
          Click
          <StyledNavLink to="/contact"> here </StyledNavLink> 
          to visit our contact page where 
          you can request for us to find your size.
        </BannerText>
      </StyledSection>
      <StyledSection>
        <Icon src={CheckIcon} />
        <Bold>100% Authentic</Bold>
        <BannerText>
          Our staff has years of experience buying and selling shoes and will 
          gaurantee every product sold is authentic.
        </BannerText>
      </StyledSection>
      <StyledSection>
        <Icon src={DollarIcon} />
        <Bold>Looking for quick cash?</Bold>
        <BannerText>
          We are always looking to buy new inventory 
          so be sure to send us a DM on Instagram 
          or email us pictures and prices of your shoes.
        </BannerText>
      </StyledSection>
    </BannerContainer>
  )
}