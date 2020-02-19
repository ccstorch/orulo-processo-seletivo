import {connect} from 'react-redux'
import React from 'react'

import {SET_ADDRESSES_STATES} from '../_common/addresses.reducer'
import {sd} from '../../../helpers/redux'
import {statesResource} from '../../../api/addresses/addressesApi'

class StatesLoader extends React.Component {
  componentWillMount() {
    const {fetchData, states} = this.props
    if (!states.length) {
      fetchData()
    }
  }

  render() {
    const {states, children} = this.props
    if (!states.length) return false
    return children
  }
}

const mapState = state => ({
  states: state.addresses.states,
})

const mapActions = dispatch => ({
  fetchData: () => {
    statesResource.getList().then(data => {
      sd(dispatch, SET_ADDRESSES_STATES, data.states)
    })
  },
})

export default connect(mapState, mapActions)(StatesLoader)
