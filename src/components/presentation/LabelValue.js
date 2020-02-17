import './LabelValue.css'

import React from 'react'

import Text from './Text'

const LabelValue = ({label, value}) => (
  <div className="label-value">
    <Text size="xsmall">{label}</Text>
    <Text size="p">{value}</Text>
  </div>
)

export default LabelValue
