import {connect} from 'react-redux'
import React from 'react'

import {formatShortRegion} from '../../../helpers/address'
import Header from '../../../components/sctructure/Header'

const ShowBuildingPageHeader = ({building}) => {
  const isReady = !!building.id
  const title = isReady ? building.name : '.......'
  const subtitle = isReady ? formatShortRegion(building.address) : '...'
  const image = isReady && building.default_image ? building.default_image['520x280'] : '...'

  return <Header title={title} subtitle={subtitle} overlay bgImage={image} />
}

const mapState = state => ({
  building: state.building.single,
})

export default connect(mapState)(ShowBuildingPageHeader)
