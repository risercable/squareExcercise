import { TextField } from '@mui/material'
import React from 'react'

export const FieldHandler = ({id, label, variant}) => {
  return (
    <TextField id={id} label={label} variant={variant} />
  )
}

export default FieldHandler