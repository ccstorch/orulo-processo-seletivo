import {connect} from 'react-redux'
import React from 'react'

import {SET_ADDRESSES_CITIES} from '../_common/addresses.reducer'
import {citiesResource} from '../../../api/addresses/addressesApi'
import {sd} from '../../../helpers/redux'

class CitiesLoader extends React.Component {
  componentWillReceiveProps(nextProps) {
    const {fetchData, state, cities} = this.props
    if (state !== nextProps.state) {
      fetchData(nextProps.state)
    }
  }

  render() {
    const {state, cities, children} = this.props
    if (!cities.length) return false
    return children
  }
}

const mapState = state => ({
  cities: state.addresses.cities,
})

const mapActions = dispatch => ({
  fetchData: state => {
    sd(dispatch, SET_ADDRESSES_CITIES, [])
    citiesResource.getList({queryParams: {state}}).then(data => {
      sd(dispatch, SET_ADDRESSES_CITIES, data.cities)
    })
  },
})

export default connect(mapState, mapActions)(CitiesLoader)
