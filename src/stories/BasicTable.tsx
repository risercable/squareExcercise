import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

import './button.css';
import Row from './Row';
import ContainerForm from './ContainerForm';
import type { RowData } from '../types';
import Grid from './Grid';

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
  position: number,
  cells: any,
  showIcon?: boolean,
) {
  return { position, showIcon, cells };
}

function createCell(
  isShow: boolean,
  style?: {
    backgroundColor: string,
  },
) {
  return { isShow, style };
}

function reverseNumberInRange(n) {
  const min = 0;
  const max = 4;
  return max + min - n;
}

const calculateRender = (fromData = null) => {  
  let [firstKey, secondKey] = fromData ? Object.values(fromData) : [];
  let newRows = [];
  
  for (let x = 0; x < 5; x++) {
    let cells = [];
    for (let y = 0; y < 5; y++) {
      const isShowIcon = reverseNumberInRange(firstKey) === x && secondKey === y;
      cells.push(createCell(isShowIcon));
    }

    newRows.push(createData(1, cells));
  }

  console.log(newRows);

  return newRows;
}

/** Primary UI component for user interaction */
export const BasicTable = ({
  ...props
}: TableProps) => {
  const [data, setData] = useState({});
  const emptyRows: RowData[] = [];
  const [rows, setRows] = useState(emptyRows);

  if (!rows.length) {
    let initRows = calculateRender();
    setRows(initRows);
  }

  const refreshCoords = (val) => {
    setData(val);
    console.log(val)
    let updatedRows = calculateRender(val);
    setRows(updatedRows);
  }

  return (
    <div>
      <ContainerForm updatedProps={refreshCoords} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            {rows.map((row, index) => (
              <Row key={`${index}'-index`} cells={row.cells}/>
            ))}
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
