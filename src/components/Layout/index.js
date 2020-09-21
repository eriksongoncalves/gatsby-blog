import React from 'react'

import * as S from './styled'
import Sidebar from '../Sidebar'
import MenuBar from '../MenuBar'
import GlobalStyles from '../../styles/global'

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
      <MenuBar />
    </S.LayoutWrapper>
  )
}

export default Layout
