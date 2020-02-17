import {connect} from 'react-redux'
import React from 'react'

import {SET_BUILDING_TYPES_LIST} from './buildingTypes.reducer'
import {buildingTypesResource} from '../../../api/buildingTypes/buildingTypesApi'
import {sd} from '../../../helpers/redux'

class ListBuildingTypesLoader extends React.Component {
  componentWillMount() {
    const {fetchData, types} = this.props
    if (!types || !types.commercial) {
      fetchData()
    }
  }

  render() {
    const {types, children} = this.props
    if (!types || !types.commercial) return false
    return children
  }
}

const mapState = state => ({
  types: state.buildingTypes.list,
})

const mapActions = dispatch => ({
  fetchData: () => {
    buildingTypesResource.getList().then(data => {
      sd(dispatch, SET_BUILDING_TYPES_LIST, data)
    })
  },
})

export default connect(mapState, mapActions)(ListBuildingTypesLoader)
