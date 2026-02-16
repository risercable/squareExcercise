import NumberField from './components/NumberField'
import { TextField } from '@mui/material'
import React from 'react'

export const FieldHandler = ({id, label, variant, onChange, max}) => {
  return (
    <div>
        <NumberField
            label={label}
            min={0}
            max={max}
            onValueChange={onChange}
        />
    </div>
    // <TextField slotProps={{
    //     htmlInput: { // Replaces inputProps
    //       min: 0,
    //       max: 4,
    //       step: 0.5,
    //     }
    // }} id={id} label={label} variant={variant} onChange={onChange} />
  )
}

export default FieldHandler