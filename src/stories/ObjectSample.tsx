import React from 'react'
import SVG from '../assets/accelerate-svgrepo-com.svg';
import { Paper, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  minHeight: '5.375rem',
  maxWidth: '9.063rem'
  }),
}));

export const ObjectSample = ({rotation}) => {
  console.log(rotation, '---------------');
  return (
    <img height="65" alt="Sampler Arrow ${position}" src={SVG} style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease', textAlign: 'center' }} />
  )
}

export default ObjectSample