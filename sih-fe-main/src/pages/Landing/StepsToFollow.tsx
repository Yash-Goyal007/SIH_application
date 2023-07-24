import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import SvgIcon from '@mui/material/SvgIcon'
import {
  EventAvailable,
  HowToReg,
  LocalActivity,
  People,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

function StepsToFollow() {
  const dataArray = [
    {
      title: 'Register',
      description:
        'Setup your profile by clicking on Log In button in the top right corner.',
      img: <HowToReg />,
      link: '/login',
    },
    {
      title: 'Resources',
      description:
        'A collection of games, books and activities prescribed by verfied psychologists',
      img: <LocalActivity />,
      link: '/resources',
    },
    {
      title: 'Community',
      description:
        'Ask any question and get them answered by verified psychologists',
      img: <People />,
      link: '/qna',
    },
    {
      title: 'Counselling',
      description: 'Get councelling from world-class counsellors.',
      img: <EventAvailable />,
      link: '/counselling',
    },
  ]

  const navigate = useNavigate()

  return (
    <Grid container spacing={8} mb={12}>
      {dataArray.map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <Card
            sx={{
              padding: '20px',
              borderRadius: '10px',
              position: 'relative',
              maxWidth: 300,
              minHeight: 250,
              margin: 'auto',
              background: '#EEEEEE',
              boxShadow:
                '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.01)',
                boxShadow: '0 10px 30px -6px rgba(0,0,0,0.2)',
              },
            }}
            onClick={() => navigate(item.link)}
          >
            <SvgIcon
              viewBox="0 0 40 40"
              color="primary"
              fontSize="large"
              sx={{
                display: 'block',
                margin: '1rem auto',
                p: 1,
                height: '60px',
                width: '60px',
              }}
            >
              {item.img}
            </SvgIcon>
            <Typography
              fontWeight={'700'}
              variant="button"
              component="h5"
              align="center"
              gutterBottom
            >
              {item.title}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={'500'}
              align="center"
              color="#7C7C7C"
              paragraph
            >
              {item.description}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default StepsToFollow
