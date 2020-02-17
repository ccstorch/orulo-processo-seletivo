import './IconLink.css'

import React from 'react'

import Grid from '../grid/Grid'
import Text from '../presentation/Text'

const IconLink = ({Icon, iconColor, color, children, onClick}) => (
  <a onClick={onClick} className={'icon-link ' + color}>
    <Grid plain>
      <Text size="small" style={{color}}>
        {children}
      </Text>
      <Icon color={iconColor || color} size="1.5rem" />
    </Grid>
  </a>
)

export default IconLink
