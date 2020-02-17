import './FormItem.css'

import React from 'react'

import Text from '../presentation/Text'

const FormItem = ({label, children}) => {
  return (
    <label className="form-item">
      <Text size="label">{label}</Text>
      {children}
    </label>
  )
}

export default FormItem
