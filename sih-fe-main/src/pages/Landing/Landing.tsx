import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import LandingPageHeroContent from './LandingPageHeroContent'
import StepsToFollow from './StepsToFollow'
import Heading from '../../components/Heading/Heading'
import BrandLinks from '../../components/BrandLink/BrandLink'

import psychologists from './psychologist.json'
import institute from './institute.json'
import brands from './brands.json'
import press from './press.json'
import Counselling from '../Counselling/Counselling'

const Landing = () => {
  return (
    <>
      <LandingPageHeroContent />

      <Container sx={{ py: 8 }}>
        <Heading heading="Steps to follow" />
        <StepsToFollow />

        <Heading heading="Connect with Yourself" align="center" />
        <Box
          sx={{
            maxHeight: '45vw',
            width: '80vw',
            height: '50vh',
            maxWidth: '88.8vh',
            margin: 'auto',
            my: 4,
            background: '#EEEEEE',
            boxShadow:
              '-12px -12px 24px rgba(255, 255, 255, 0.6), 12px 12px 24px rgba(142, 209, 252, 0.25)',
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/vo4pMVb0R6M"
            title="Why NFT awareness is required for Artists? | Jumbish | APM | NFT"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Heading heading="Choose Your Counselling" align="center" />
        <Counselling />

        <Heading heading="Pschologists" align="center" />
        <Grid container spacing={8} mb={12}>
          {psychologists.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  padding: 0,
                  borderRadius: '10px',
                  maxWidth: 250,
                  minHeight: 300,
                  margin: 'auto',
                  background: '#EEEEEE',
                  boxShadow:
                    '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                  '&:hover': {
                    boxShadow:
                      '-12px -12px 24px #FFFFFF, 24px 24px 48px rgba(142, 209, 252, 0.6)',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: '100%',
                    height: 250,
                    backgroundPosition: 'center',
                    mb: 2,
                  }}
                  image={item.img}
                  component="img"
                />
                <CardContent>
                  <Typography
                    fontWeight="700"
                    variant="button"
                    component="h5"
                    align="center"
                    gutterBottom
                    px={2}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight="500"
                    align="center"
                    color="#7C7C7C"
                    paragraph
                    px={2}
                  >
                    {item.qualification}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Heading heading="Partner Institutes" align="center" />
        <Grid container spacing={8} mb={12}>
          {institute.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  padding: 0,
                  borderRadius: '10px',
                  maxWidth: 250,
                  minHeight: 300,
                  margin: 'auto',
                  background: '#EEEEEE',
                  boxShadow:
                    '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                  '&:hover': {
                    boxShadow:
                      '-12px -12px 24px #FFFFFF, 24px 24px 48px rgba(142, 209, 252, 0.6)',
                  },
                }}
              >
                <CardMedia
                  sx={{
                    width: '100%',
                    height: 250,
                    backgroundPosition: 'center',
                    mb: 2,
                  }}
                  image={item.img}
                  component="img"
                />
                <CardContent>
                  <Typography
                    fontWeight="700"
                    variant="button"
                    component="h5"
                    align="center"
                    gutterBottom
                    px={2}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Heading heading="In Association with" align="center" />
        <BrandLinks data={brands} xs={6} sm={5} md={3} lg={2.4} />

        <Heading heading="Powered By" align="center" />
        <BrandLinks data={press} xs={6} sm={6} md={4} />
      </Container>
    </>
  )
}

export default Landing
