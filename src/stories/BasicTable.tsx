import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './button.css';
import Row from './Row';
import ContainerForm from './ContainerForm';

export interface TableProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

function createData(
  position: number
) {
  return { position };
}

const rows = [
  createData(1),
  createData(2),
  createData(1),
  createData(1),
  createData(1)
];

/** Primary UI component for user interaction */
export const BasicTable = ({
  ...props
}: TableProps) => {
  return (
    <div>
      <ContainerForm />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {rows.map((row, index) => (
              <Row key={index} isRendered={row.position > 1}/>
            ))}
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
