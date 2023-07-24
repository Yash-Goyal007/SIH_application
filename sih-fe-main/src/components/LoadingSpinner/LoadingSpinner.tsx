import { Box, CircularProgress, Container } from '@mui/material'

export default function LoadingSpinner() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 8,
        }}
      >
        <CircularProgress color="primary" size={54} />
      </Box>
    </Container>
  )
}
