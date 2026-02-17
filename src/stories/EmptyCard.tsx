import { Paper, styled } from '@mui/material';
import React from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  minHeight: '5.375rem',
  maxWidth: '9.063rem'
}));

export const EmptyCard = (props) => {
  return (
    <Item>

    </Item>
  )
}

export default EmptyCard