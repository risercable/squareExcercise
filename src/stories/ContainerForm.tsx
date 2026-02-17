
import React, { useEffect } from 'react'
import { useState } from 'react';
import FieldHandler from './FieldHandler'
import { Button, TextField } from '@mui/material';
import SelectHandler from './SelectHandler';

const style ={
    margin: '100',
    display: 'flex',
    justifyConten: 'align-center',
    gap: '24px'
};

const grabId = (str: string) => `outlined-${str.at(str.length - 1)}`;

function createField(
    label: string,
    valueId: string,
    notATextField?: boolean
) { return { label, valueId, flag: notATextField }}

const numFields = [
    createField('Coords X', 'coords-x'),
    createField('Coords Y', 'coords-y'),
]

export const ContainerForm = ({coords, ...props}) => {
    const [data, setData] = useState(coords);

    let [direction, coordsX, coordsY] = Object.values(coords);
    let [directionKey, xKey, yKey] = Object.keys(coords);

    const handleChange = (key, value) => {
        
        data[key] = value;

        setData(data)
        console.log(value);
    };

    const chainChange = (val) => {
        handleChange('direction-key', val)
        props.updatedProps(data)
    }

  return (
    <div style={style}>
        {numFields.map((field, index) => (
            <FieldHandler key={JSON.stringify(field)} defaultValue={data[field.valueId]} fieldKey={field.valueId} max='4' label={field.label} onValueChange={(e) => handleChange(field.valueId, e)} variant="outlined" />
        ))}

        <SelectHandler directionState={coords[directionKey]} chainChange={chainChange} />
            
        <div style={{ display:'grid', placeItems: 'center' }}> 
            <Button variant="contained" style={{ alignItems: 'center'}} onClick={() => props.updatedProps(data)}>Confirm</Button>
        </div>
    </div>
  )
}

export default ContainerForm