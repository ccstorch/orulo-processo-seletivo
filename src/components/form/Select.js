import './Select.css'

import React from 'react'

import FormItem from './FormItem'
import Triangle from '../shapes/Triangle'

const formatOptions = options => {
  return options.map(
    ({label, value, groupName, suboptions}) =>
      !!groupName ? (
        <optgroup key={groupName} label={groupName}>
          {formatOptions(suboptions)}
        </optgroup>
      ) : (
        <option key={value} value={value}>
          {label}
        </option>
      ),
  )
}

const InputText = ({initValue, label, onChange, options, value}) => (
  <FormItem label={label}>
    <div className="select-wrapper">
      <select className="input select" type="text" onChange={onChange} value={value}>
        {formatOptions(options)}
      </select>
      <Triangle />
    </div>
  </FormItem>
)

export default InputText
