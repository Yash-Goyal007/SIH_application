import { useState } from 'react'
import { Box, Container, Grid, Stack } from '@mui/material'
import LogInEmail from './LogInEmail'
import SignUpEmail from './SignUpEmail'
import { ImageAndContent, TextWelcome } from './ImageAndContent'

function LogIn({ formState }: { formState: string }) {
  const [form, setForm] = useState(formState)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 15,
        pb: 10,
      }}
    >
      <Container>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Stack direction="column" spacing={2} maxWidth={500}>
              <TextWelcome />
              {form === 'login' && <LogInEmail setForm={setForm} />}
              {form === 'signup' && <SignUpEmail setForm={setForm} />}
            </Stack>
          </Grid>
          <ImageAndContent />
        </Grid>
      </Container>
    </Box>
  )
}

export default LogIn
