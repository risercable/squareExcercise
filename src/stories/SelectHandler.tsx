import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState, useEffect } from 'react'

function createOptions(
    label: string,
    value: string
) {
    return { label, value}
}

const options = [
    createOptions('North', 'n'),
    createOptions('East', 'e'),
    createOptions('West', 'w'),
    createOptions('South', 's'),
]

export const SelectHandler = (props) => {
    const [direction, setDirection] = useState('n');

    const handleChange = (event) => {
        if (typeof event !== 'string') { event = event.target.value };
        setDirection(event);

        console.log(event);
    };

    useEffect(() => {
        if (direction) {
            props.chainChange(direction);
        }
    }, [direction]);
  return (
    <div>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={direction}
                label="Age"
                onChange={(e) => { handleChange(e); props.chainChange(direction)} }>
                {options.map((option, index) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
                
            </Select>
        </FormControl>
    </div>
  )
}



export default SelectHandler