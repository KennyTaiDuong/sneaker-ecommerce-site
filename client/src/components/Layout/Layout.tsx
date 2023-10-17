import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {
  return (
    <SiteContainer>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteContainer>
  )
}