import { Typography } from '@mui/material';
import React from 'react';

interface IHeading {
  heading: string;
  align?: 'right' | 'left' | 'inherit' | 'center' | 'justify' | undefined;
}
export default function Heading({ heading, align }: IHeading) {
  return (
    <Typography sx={{ py: 5 }} variant="h2" component="h2" align={align ? align : 'left'}>
      {heading}
    </Typography>
  );
}
