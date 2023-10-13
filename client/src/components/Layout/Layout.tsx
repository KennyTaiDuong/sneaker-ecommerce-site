import styled from "styled-components"
import { Outlet } from "react-router-dom"

const SiteContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Layout = () => {
  return (
    <SiteContainer>
      <h1>Header</h1>
      <main>
        <Outlet />
      </main>
      <h2>Footer</h2>
    </SiteContainer>
  )
}