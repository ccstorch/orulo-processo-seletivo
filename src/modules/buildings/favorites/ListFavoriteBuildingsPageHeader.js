import {connect} from 'react-redux'
import React from 'react'

import Header from '../../../components/sctructure/Header'

const ListFavoriteBuildingsPageHeader = ({favoritesCount}) => {
  const subtitle = `${favoritesCount} favoritos cadastrados`

  return (
    <Header
      title="Meus imóveis favoritos"
      subtitle={subtitle}
      overlay
      bgImage={process.env.PUBLIC_URL + 'list-buildings-header-bg.png'}
    />
  )
}

const mapState = state => ({
  favoritesCount: state.favoriteBuildings.list.length,
})

export default connect(mapState)(ListFavoriteBuildingsPageHeader)
