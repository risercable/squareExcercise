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
import Grid from './GridComponent';
import { DIRECTIONS, DIRECTIONS_INITIALS } from '../constants';

export interface TableProps {
  coords: {
    "direction-key": string,
    "coords-x": number,
    "coords-y": number
  }
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
  rotation: number,
  style?: {
    backgroundColor: string,
  },
) {
  return { isShow, rotation, style };
}

function reverseNumberInRange(n) {
  const min = 0;
  const max = 4;
  return max + min - n;
}

const calculateRender = (fromData) => {
  console.log(fromData) ;
  let [direction, xcoord, yCoord] = fromData ? Object.values(fromData) : [];
  let newRows = [];

  let anglesArr = [0, 90, -90, 180];
  let angle = 0;

  const index = Object.values(DIRECTIONS_INITIALS).indexOf(direction);

  if (index !== -1) {
    angle = anglesArr[index];
    console.log(angle);
  }
  
  for (let x = 0; x < 5; x++) {
    let cells = [];
    for (let y = 0; y < 5; y++) {
      const isShowIcon = reverseNumberInRange(xcoord) === x && yCoord === y;
      cells.push(createCell(isShowIcon, isShowIcon ? angle : 0));
    }

    newRows.push(createData(1, cells));
  }

  console.log(newRows);

  return newRows;
}

/** Primary UI component for user interaction */
export const BasicTable = ({
  coords,
  ...props
}: TableProps) => {
  const [data, setData] = useState({});
  const emptyRows: RowData[] = [];
  const [rows, setRows] = useState(emptyRows);

  if (!rows.length) {
    let initRows;
    initRows = calculateRender({});
    
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
      <ContainerForm key={JSON.stringify(coords)} updatedProps={refreshCoords} coords={coords} />
      <TableContainer component={Paper} style={{width: '60%'}}>
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
