import React from 'react'
import SVG from '../assets/accelerate-svgrepo-com.svg';

export const ObjectSample = ({rotation}) => {
  console.log(rotation, '---------------');
  return (
    <img height="65" width="65" alt="Sampler Arrow ${position}" src={SVG} style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease' }} />
  )
}

export default ObjectSample