import React from 'react'
import { BasicTable } from './BasicTable'
import { DIRECTIONS_INITIALS } from '../constants';

const coords = {
    "direction-key": DIRECTIONS_INITIALS.west,
    "coords-x": 4,
    "coords-y": 4
};

export const WestTable = (props) => {
  return (
    <BasicTable coords={coords} />
  )
}

export default WestTable