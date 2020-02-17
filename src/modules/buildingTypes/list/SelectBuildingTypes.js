import {connect} from 'react-redux'
import React from 'react'

import {formatOptionsFromObject} from '../../../helpers/select'
import Select from '../../../components/form/Select'

const SelectBuildingTypes = ({label, types, onChange, value}) => (
  <Select label={label} onChange={onChange} options={types} value={value} />
)

const mapState = state => {
  const types = state.buildingTypes.list

  return {
    types: [
      {label: '', value: ''},
      {groupName: 'Residencial', suboptions: formatOptionsFromObject(types.residential)},
      {groupName: 'Comercial', suboptions: formatOptionsFromObject(types.commercial)},
    ],
  }
}

export default connect(mapState)(SelectBuildingTypes)
