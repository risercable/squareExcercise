import React from 'react'
import TableCell from '@mui/material/TableCell';
import type { GridData } from '../types';
import ObjectSample from './ObjectSample';
import { Grid, Paper, styled } from '@mui/material';
import EmptyCard from './EmptyCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  minHeight: '5.375rem',
  maxWidth: '9.063rem'
}));

export const GridComponent = ({ isShow, rotation }: GridData) => {
  return (
    <TableCell component="th" scope="row" style={{"width": "20%"}}>
        <Grid size={4}>
          <Item style={{'display': 'block'}}>{ isShow ? <ObjectSample rotation={rotation}  /> : ''  }</Item>
        </Grid>
    </TableCell>
  )
}

export default GridComponent