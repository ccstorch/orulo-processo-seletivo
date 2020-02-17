import {connect} from 'react-redux'
import React from 'react'

import {formatShortNumber} from '../../../helpers/number'
import BuildingFavoriteToggler from '../_common/BuildingFavoriteToggler'
import Grid from '../../../components/grid/Grid'
import LabelValue from '../../../components/presentation/LabelValue'
import Panel from '../../../components/sctructure/Panel'

const BuildingSideBar = ({building}) => {
  if (!building.id) return false

  return (
    <Panel
      width="20rem"
      overflowToTop
      header={
        <Grid plain>
          <BuildingFavoriteToggler building={building} />
        </Grid>
      }>
      <LabelValue label="Preço" value={'R$' + formatShortNumber(building.min_price)} />
      <LabelValue label="Área" value={building.min_area + 'm2'} />
      <LabelValue label="Finalidade" value={building.finality} />
      <LabelValue label="Quartos" value={building.min_bedrooms} />
      <LabelValue label="Suites" value={building.min_suites} />
      <LabelValue label="Banheiros" value={building.min_bathrooms} />
      <LabelValue label="Vagas na garagem" value={building.min_parking} />
    </Panel>
  )
}

const mapState = state => ({
  building: state.building.single,
})

export default connect(mapState)(BuildingSideBar)
