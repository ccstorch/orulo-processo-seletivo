import {connect} from 'react-redux'
import React from 'react'

import {MERGE_BUILDINGS_LIST, SET_BUILDINGS_LIST, SET_BUILDINGS_LOADING} from './buildings.reducer'
import {buildingsResource} from '../../../api/buildings/buildingsApi'
import {prepareFilterParams} from '../../../helpers/filter'
import {sd} from '../../../helpers/redux'
import Text from '../../../components/presentation/Text'

class ListBuildingsLoader extends React.Component {
  componentWillMount() {
    const {fetchData, filter, page} = this.props
    fetchData(filter, 1)
  }

  componentWillReceiveProps(nextProps) {
    const {refresh, filter, page, fetchMoreData, fetchData} = nextProps
    // If the page or refresh is different then before, fetch new data
    if (refresh !== this.props.refresh) {
      fetchData(nextProps.filter, 1)
    } else if (page > 1 && page !== this.props.page) {
      fetchMoreData(nextProps.filter, nextProps.page)
    }
  }

  render() {
    const {isLoading, children} = this.props
    if (!!isLoading) return <Text>Carregando...</Text>
    return children
  }
}

const mapState = state => ({
  filter: state.buildings.filter,
  page: state.buildings.page,
  isLoading: state.buildings.isLoading,
  refresh: state.buildings.refresh,
})

const mapActions = dispatch => ({
  fetchData: (filter, page) => {
    sd(dispatch, SET_BUILDINGS_LOADING, true)
    buildingsResource
      .getList({queryParams: prepareFilterParams(filter)})
      .then(data => {
        sd(dispatch, SET_BUILDINGS_LIST, data)
      })
      .catch(err => {
        sd(dispatch, SET_BUILDINGS_LOADING, false)
      })
  },

  fetchMoreData: (filter, page) => {
    buildingsResource.getList({queryParams: {page, ...prepareFilterParams(filter)}}).then(data => {
      console.log(data)
      sd(dispatch, MERGE_BUILDINGS_LIST, data)
    })
  },
})

export default connect(mapState, mapActions)(ListBuildingsLoader)
