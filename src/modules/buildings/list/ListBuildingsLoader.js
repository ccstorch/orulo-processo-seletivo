import {connect} from 'react-redux'
import React from 'react'

import {MERGE_BUILDINGS_LIST, SET_BUILDINGS_LIST, SET_BUILDINGS_LOADING} from './buildings.reducer'
import {buildingsResource} from '../../../api/buildings/buildingsApi'
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
      fetchData(filter, 1)
    } else if (page > 1 && page !== this.props.page) {
      fetchMoreData(filter, page)
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
      // TODO Uncomment this line when the filter is working
      // .getList({queryParams: filter})
      .getList()
      .then(data => {
        sd(dispatch, SET_BUILDINGS_LIST, data)
      })
      .catch(err => {
        sd(dispatch, SET_BUILDINGS_LOADING, false)
      })
  },

  fetchMoreData: (filter, page) => {
    // TODO Uncomment this line when the filter is working
    // buildingsResource.getList({queryParams: {page, ...filter}}).then(data => {
    buildingsResource.getList({queryParams: {page}}).then(data => {
      console.log(data)
      sd(dispatch, MERGE_BUILDINGS_LIST, data)
    })
  },
})

export default connect(mapState, mapActions)(ListBuildingsLoader)
