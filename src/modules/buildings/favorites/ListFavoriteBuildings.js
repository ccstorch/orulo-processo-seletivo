import {connect} from 'react-redux'
import React from 'react'

import BuildingCard from '../_common/BuildingCard'
import Col from '../../../components/grid/Col'
import Grid from '../../../components/grid/Grid'

const ListBuildings = ({favorites}) => (
  <Grid largeGutter>
    {favorites.map(building => (
      <Col width="33%" largeGutter>
        <BuildingCard building={building} />
      </Col>
    ))}
  </Grid>
)

const mapState = state => ({
  favorites: state.favoriteBuildings.list,
})

export default connect(mapState)(ListBuildings)
