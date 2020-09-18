import React from 'react'
import styled from 'styled-components'

import Profile from '../Profile'
import GlobalStyles from '../../styles/global'

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyles />
      <aside>
        <Profile />
      </aside>
      <LayoutMain> {children}</LayoutMain>
    </LayoutWrapper>
  )
}

export default Layout
