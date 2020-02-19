import {connect} from 'react-redux'
import React from 'react'

import {formatOptionsFromArray} from '../../../helpers/select'
import Select from '../../../components/form/Select'

const SelectCities = ({label, state, cities, onChange, value}) => (
  <Select label={label} onChange={onChange} options={cities} value={value} />
)

const mapState = state => ({
  cities: formatOptionsFromArray(['', ...state.addresses.cities]),
})

export default connect(mapState)(SelectCities)
