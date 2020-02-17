import './Header.css'

import React from 'react'

import Container from './Container'
import Text from '../presentation/Text'

const HeaderTitle = ({title, subtitle}) => {
  if (!title) return false

  return (
    <div className="header-title-wrapper">
      <Text size="h1">{title}</Text>
      <Text size="small">{subtitle}</Text>
    </div>
  )
}

const Header = ({children, title, subtitle, bgImage, overlay, fullScreen}) => {
  const bgFullPath = bgImage || process.env.PUBLIC_URL + 'home-header-bg.png'

  let className = 'header'

  if (fullScreen) className += ' full-screen'

  return (
    <div className={className} style={{backgroundImage: 'url(' + bgFullPath + ')'}}>
      <div className="content">
        <HeaderTitle title={title} subtitle={subtitle} />
        <Container>{children}</Container>
      </div>
      {overlay && <div className="overlay" />}
    </div>
  )
}

export default Header
