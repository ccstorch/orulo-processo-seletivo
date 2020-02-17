import './InputText.css'

import React from 'react'

import FormItem from './FormItem'

const InputText = ({value, label, onChange}) => (
  <FormItem label={label}>
    <input className="input text" type="text" onChange={onChange} value={value} />
  </FormItem>
)

export default InputText
