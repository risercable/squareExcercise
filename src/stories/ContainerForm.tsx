
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
    notATextField?: boolean
) { return { label, flag: notATextField }}

const numFields = [
    createField('Coords X'),
    createField('Coords Y'),
]

export const ContainerForm = (props) => {
    const [data, setData] = useState({});

    const handleChange = (key, value) => {
        data[key] = value
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
            <FieldHandler key={`index-$${index}`} max='4' id={grabId(field.label)} label={field.label} onChange={(e) => handleChange(grabId(field.label), e)} variant="outlined" />
        ))}

        <SelectHandler chainChange={chainChange} />
            
        <div style={{ display:'grid', placeItems: 'center' }}> 
            <Button variant="contained" style={{ alignItems: 'center'}} onClick={() => props.updatedProps(data)}>Confirm</Button>
        </div>
    </div>
  )
}

export default ContainerForm