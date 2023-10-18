import styled from "styled-components"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <SiteContainer>
      {menuIsOpen && <Sidebar setMenuIsOpen={() => setMenuIsOpen(false)} />}
      <Header setMenuIsOpen={() => setMenuIsOpen(true)} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteContainer>
  )
}