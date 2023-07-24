import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const PageConstruction = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(64.7deg, #8ED1FC 5.24%, #EEEEEE 42.01%)',
        minHeight: '100vh',
      }}
    >
      <Container sx={{ mt: 15 }}>
        <Typography align="center" variant="h1" component={'h1'}>
          Page under construction
        </Typography>
      </Container>
    </Box>
  )
}

export default PageConstruction
