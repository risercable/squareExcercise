import React from 'react'
import TableCell from '@mui/material/TableCell';
import type { GridData } from '../types';
import ObjectSample from './ObjectSample';

export const Grid = ({ isShow}: GridData) => {
  return (
    <TableCell component="th" scope="row">
        TEST
        { isShow ? <ObjectSample /> : ''  }
    </TableCell>
  )
}

export default Grid