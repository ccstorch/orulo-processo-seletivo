import {connect} from 'react-redux'
import React from 'react'

import {ADD_BUILDINGS_PAGE} from './buildings.reducer'
import {sd} from '../../../helpers/redux'
import BuildingCard from '../_common/BuildingCard'
import Button from '../../../components/actions/Button'
import Col from '../../../components/grid/Col'
import Grid from '../../../components/grid/Grid'

const ListBuildings = ({buildings, loadMore, isLoadingMore, canLoadMore}) => (
  <Grid largeGutter>
    {buildings.map(building => (
      <Col key={building.id} width="50%" largeGutter>
        <BuildingCard building={building} />
      </Col>
    ))}
    {canLoadMore && (
      <Button onClick={!isLoadingMore && loadMore}>{!isLoadingMore ? 'Ver Mais' : 'Carregando...'}</Button>
    )}
  </Grid>
)

const mapState = state => ({
  buildings: state.buildings.list,
  isLoadingMore: state.buildings.isLoadingMore,
  canLoadMore: state.buildings.canLoadMore,
})

const mapActions = d => ({
  loadMore() {
    sd(d, ADD_BUILDINGS_PAGE)
  },
})

export default connect(mapState, mapActions)(ListBuildings)
