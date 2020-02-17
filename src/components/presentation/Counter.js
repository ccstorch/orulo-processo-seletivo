import './Counter.css'

import React from 'react'

import Text from './Text'

const Counter = ({value, children}) => {
  if (!value) return children

  return (
    <div className="counter">
      <Text size="xsmall" className="value">
        {value}
      </Text>
      {children}
    </div>
  )
}

export default Counter
