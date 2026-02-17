import React from 'react'
import { BasicTable } from './BasicTable'

const coords = {
    "direction-key": 'w',
    "coords-x": 4,
    "coords-y": 4
};

export const WestTable = (props) => {
  return (
    <BasicTable coords={coords} />
  )
}

export default WestTable