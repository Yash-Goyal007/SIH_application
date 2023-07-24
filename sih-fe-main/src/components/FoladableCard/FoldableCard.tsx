import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Link } from '@mui/material'
import { MeetIcon } from '../../assets/svg'
import { IEvent } from '../../interfaces/event.interface'
import UserContext from '../../context/UserContext'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function FoldableCard(props: { event: IEvent }) {
  const [expanded, setExpanded] = React.useState(false)

  const { user } = React.useContext(UserContext)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        mb: 2,
        boxShadow:
          'rgb(255 255 255) -12px -12px 24px, rgb(142 209 252 / 25%) 12px 12px 24px',
        backgroundColor: 'rgb(238, 238, 238)',
      }}
    >
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          m={0.5}
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex' }}
        >
          <Box
            m={0.5}
            alignItems="center"
            justifyContent="center"
            sx={{ display: 'flex' }}
          >
            <CalendarMonthIcon />
          </Box>
          <Box ml={1}>
            <Typography variant="h4">
              {user.profileType === 'Doctor'
                ? props.event.organiser.firstName
                : props.event.guest.firstName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {new Date(props.event.startTimestamp).toLocaleDateString(
                'en-US',
                {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                }
              )}
            </Typography>
          </Box>
        </Box>
        <Box
          m={0.5}
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex' }}
        >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{
            display: 'flex',
            ml: 2,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <MeetIcon fontSize="medium" sx={{ mr: 2 }} />
          <Link
            href="http://meet.google.com/new"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1a73e8',
                '&:hover': {
                  backgroundColor: '#4285f4',
                },
              }}
            >
              Join Virtual Meet
            </Button>
          </Link>
        </CardContent>
      </Collapse>
    </Card>
  )
}
