import React from 'react'
import TableCell from '@mui/material/TableCell';
import type { GridData } from '../types';
import ObjectSample from './ObjectSample';

export const Grid = ({key, icon, style}: GridData) => {
  return (
    <TableCell component="th" scope="row">
        TEST {key} 
        { icon ? <ObjectSample /> : ''  }
    </TableCell>
  )
}

export default Grid