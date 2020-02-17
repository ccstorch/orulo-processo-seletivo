import './IconCounter.css'

import React from 'react'

import Grid from '../grid/Grid'
import Text from './Text'

const IconCounter = ({Icon, value}) => (
  <div className="icon-counter">
    <Grid plain>
      <Icon />
      <Text>{value}</Text>
    </Grid>
  </div>
)

export default IconCounter
