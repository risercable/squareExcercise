
import React from 'react'
import { useState } from 'react';
import FieldHandler from './FieldHandler'
import { Button } from '@mui/material';

const style ={
    margin: '100',
    display: 'flex',
    justifyConten: 'align-center',
    gap: '24px'
};

const grabId = (str: string) => `outlined-${str.at(str.length - 1)}`;

function createData(
    label: string,
    notATextField?: boolean
) { return { label, flag: notATextField }}

const fields = [
    createData('Coords X'),
    createData('Coords Y'),
]

// TODO 
const parseCoords = () => {
    return <p>{''}</p>;
}

export const ContainerForm = (props) => {
  return (
    <div style={style}>
        {fields.map((field) => (
            <FieldHandler id={grabId(field.label)} label={field.label} variant="outlined" />
        ))}
            
        <div style={{ display:'grid', placeItems: 'center' }}> 
            <Button variant="contained" style={{ alignItems: 'center'}} onClick={parseCoords}>Confirm</Button>
        </div>
    </div>
  )
}

export default ContainerForm