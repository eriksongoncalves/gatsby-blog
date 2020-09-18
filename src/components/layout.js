import React from 'react'

import Profile from './Profile'

const Layout = ({ children }) => {
  return (
    <main>
      <aside>
        <Profile />
      </aside>
      {children}
    </main>
  )
}

export default Layout
