import './TitleContent.css'

import React from 'react'

import Text from './Text'

const TitleContent = ({title, children}) => (
  <div className="title-content">
    <Text size="h3">{title}</Text>
    {children}
  </div>
)

export default TitleContent
