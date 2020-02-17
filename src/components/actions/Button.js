import './Button.css'

import React from 'react'

import Text from '../presentation/Text'

const Button = ({children, onClick}) => (
  <button className="button" onClick={onClick}>
    <Text size="small">{children}</Text>
  </button>
)

export default Button
