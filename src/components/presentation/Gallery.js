import './Gallery.css'

import React from 'react'

const Gallery = ({images}) => (
  <div className="gallery">
    {images.map(image => <div className="item" style={{backgroundImage: 'url(' + image + ')'}} />)}
  </div>
)

export default Gallery
