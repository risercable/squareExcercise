import React from 'react'
import Grid from './Grid'
import { TableRow } from '@mui/material';

function createData(
  key: string,
  pos: boolean,
  style?: {
    backgroundColor: string,
  },
) {
  return { key, pos, style };
}

const cells = [
    createData('Grid 1', true, { backgroundColor: '#68c0c8'}),
    createData('Grid 2', false, { backgroundColor: '#8972ac'}),
    createData('Grid 3', false, { backgroundColor: '#ee8430'}),
    createData('Grid 4', false, { backgroundColor: '#0f4c75'}),
    createData('Grid 5', false, { backgroundColor: '#006666'})
];

export const Row = ({isRendered, key}) => {
  return (
    <div>
    <TableRow
        key={key}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
    {cells.map((cell) => (
        <Grid key={cell.key} style={cell.style} icon={isRendered && cell.pos}/>
    ))}
    </TableRow>
    </div>
  )
}

export default Row