import React from 'react'
import { BasicTable } from './BasicTable'
import { DIRECTIONS_INITIALS } from '../constants';

const coords = {
    "direction-key": DIRECTIONS_INITIALS.south,
    "coords-x": 0,
    "coords-y": 0
};

export const BoundarySouth = () => {
  return (
      <BasicTable coords={coords} />
    )
}

export default BoundarySouth