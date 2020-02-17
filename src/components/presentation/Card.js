import './Card.css'

import React from 'react'

import Text from './Text'

const CardImageSubContent = ({content}) => {
  if (!content) return false

  return (
    <div className="image-sub-content">
      <div className="content">{content}</div>
      <div className="overlay" />
    </div>
  )
}

const CardTitle = ({title, subtitle}) => {
  if (!title) return false

  return (
    <div className="title-wrapper">
      <Text size="h4" className="title">
        {title}
      </Text>
      <Text size="small" className="subtitle">
        {subtitle}
      </Text>
    </div>
  )
}

const Card = ({imageSubContent, action, actionLabel, title, subtitle, children, content, image}) => (
  <div className="card">
    <a className="image" style={{backgroundImage: 'url(' + image + ')'}} onClick={action}>
      <CardImageSubContent content={imageSubContent} />
    </a>
    <CardTitle title={title} subtitle={subtitle} />

    <div className="content">{content || children}</div>
    <a onClick={action} className="action">
      <Text size="p">{actionLabel}</Text>
    </a>
  </div>
)

export default Card
