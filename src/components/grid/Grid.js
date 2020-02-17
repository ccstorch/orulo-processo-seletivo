import './Grid.css'
import React from 'react'

const Grid = ({children, noMarginTopBottom, largeGutter, plain}) => {
  let className = 'grid'
  if (!!noMarginTopBottom) className += ' no-margin-top-bottom'
  if (!!largeGutter) className += ' large-gutter'
  if (!!plain) className += ' plain'

  return <div className={className}>{children}</div>
}

export default Grid
