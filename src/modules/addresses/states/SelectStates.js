import {connect} from 'react-redux'
import React from 'react'

import {formatOptionsFromArray} from '../../../helpers/select'
import Select from '../../../components/form/Select'

const SelectStates = ({label, states, onChange, value}) => (
  <Select label={label} onChange={onChange} options={states} value={value} />
)

const mapState = state => ({
  states: formatOptionsFromArray(['', ...state.addresses.states]),
})

export default connect(mapState)(SelectStates)
