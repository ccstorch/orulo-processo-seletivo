import './Menu.css'

import React from 'react'

import Text from '../presentation/Text'

export const MenuLink = ({children, onClick}) => (
  <a onClick={onClick} className="menu-link">
    <Text size="xsmall">{children}</Text>
  </a>
)

const Menu = ({rightContent, leftContent}) => (
  <div className="menu">
    <div className="col">{leftContent}</div>

    <nav className="col nav">{rightContent}</nav>
  </div>
)

export default Menu
