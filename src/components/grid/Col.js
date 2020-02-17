import './Col.css'
import React from 'react'

const Col = ({children, flex, width, largeGutter}) => {
  let className = 'col'
  if (!!largeGutter) className += ' large-gutter'
  flex = flex >= 0 ? flex : 1

  return (
    <div className={className} style={{flex, minWidth: width, maxWidth: width}}>
      {children}
    </div>
  )
}

export default Col
