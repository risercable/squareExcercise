import NumberField from './components/NumberField'
import { TextField } from '@mui/material'
import React from 'react'

export const FieldHandler = ({fieldKey, fieldState, label, value, onValueChange, max, defaultValue}) => {
  return (
    <div>
        <NumberField
            label={label}
            min={0}
            max={max}
            defaultValue={defaultValue}
            onValueChange={onValueChange}
            key={fieldKey}
        />
    </div>
  )
}

export default FieldHandler