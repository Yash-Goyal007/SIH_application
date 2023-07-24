import { Link } from 'react-router-dom'
import { Box, Grid, Stack, Typography } from '@mui/material'
import singUpHero from '../../assets/signup-hero.png'

export const ImageAndContent = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Box
          component={'img'}
          sx={{
            objectFit: 'contain',
            height: '25rem',
            width: '100%',
            filter:
              'drop-shadow(-10px -10px 20px #FFFFFF) drop-shadow(10px 10px 20px rgba(142, 209, 252, 0.25))',
          }}
          src={singUpHero}
          alt="Image"
        />
        <Typography
          variant="body2"
          component="h3"
          align="center"
          paragraph
          color="text.secondary"
          fontWeight="500"
        >
          Connect with world-class psychologists and councellors.
        </Typography>
      </Stack>
    </Grid>
  )
}

export const TextWelcome = () => {
  return (
    <>
      <Typography component="h1" variant="h1" align="left" gutterBottom>
        Welcome :)
      </Typography>
      <Typography
        component="h3"
        variant="h3"
        fontWeight="400"
        align="left"
        paragraph
        color="text.secondary"
      >
        By creating your account you agree to our{' '}
        <Link to="/termsandconditions">
          <Typography
            component="h3"
            color="primary"
            variant="h3"
            fontWeight="600"
            display="inline"
          >
            Terms and Conditions{' '}
          </Typography>
        </Link>
        and{' '}
        <Link to="/dataprotection">
          <Typography
            component="h3"
            color="primary"
            variant="h3"
            fontWeight="600"
            display="inline"
          >
            Data Protection Guidelines.
          </Typography>
        </Link>
      </Typography>
    </>
  )
}
