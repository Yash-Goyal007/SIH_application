import { Link } from 'react-router-dom'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import HeroImage from '../../components/HeroImage/HeroImage'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../components/Buttons/Buttons'
import landingLady from '../../assets/signup-hero.png'
import rickshawGuy from '../../assets/about1.png'

const LandingPageHeroContent = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 15,
        pb: 8,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={3.5}
            md={3.5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeroImage src={rickshawGuy} heading="" />
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Typography
              variant="subtitle1"
              component="h3"
              align="center"
              color="primary"
              gutterBottom
              sx={{ p: 1.5, marginTop: '15vh' }}
            >
              Antar Darshnam
            </Typography>
            <Typography
              component="h1"
              variant="h1"
              align="center"
              gutterBottom
              sx={{ minHeight: '35vh' }}
            >
              <Box component="span" sx={{ color: 'primary.main' }}>
                Connect
              </Box>{' '}
              with{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Yourself
              </Box>{' '}
              <br /> and a community of verfied <br />{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Psychologists
              </Box>{' '}
            </Typography>
            <Stack
              sx={{ pt: 2, pb: 2 }}
              direction="row"
              spacing={4}
              justifyContent="center"
            >
              <Link to="/resources">
                <PrimaryButton variant="contained">Resources</PrimaryButton>
              </Link>
              <Link to="/qna">
                <SecondaryButton variant="contained">Q&A</SecondaryButton>
              </Link>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3.5}
            md={3.5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <HeroImage src={landingLady} heading="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LandingPageHeroContent
