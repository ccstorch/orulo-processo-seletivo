import {connect} from 'react-redux'
import React from 'react'

import Header from '../../../components/sctructure/Header'

const ListBuildingsPageHeader = ({buildingsCount}) => {
  const subtitle = `${buildingsCount} imóveis encontrados`

  return (
    <Header
      title="Imóveis"
      subtitle={subtitle}
      overlay
      bgImage={process.env.PUBLIC_URL + 'list-buildings-header-bg.png'}
    />
  )
}

const mapState = state => ({
  buildingsCount: state.buildings.total,
})

export default connect(mapState)(ListBuildingsPageHeader)
