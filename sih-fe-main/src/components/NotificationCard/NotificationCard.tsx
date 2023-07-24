import { Box, Typography } from '@mui/material'
import FoldableCard from '../FoladableCard/FoldableCard'
import UserAvatar from '../Avatar/Avatar'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import eventService from '../../api/eventService'
import { IEvent } from '../../interfaces/event.interface'

const NotificationCard = (props: any) => {
  const { user } = useContext(UserContext)
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {
    if (user._id)
      eventService
        .getUserEvents(user._id, user.profileType)
        .then((response) => setEvents(response))
  }, [user])

  return (
    <Box
      mb={5}
      padding={2}
      sx={{
        width: '100%',
        height: '75vh',
        boxShadow:
          '-12px -12px 24px rgba(142, 209, 252, 0.25), 12px 12px 24px #FFFFFF',
        borderRadius: '12px',
        backgroundColor: '#fff',
        pt: 0,
      }}
    >
      <Box
        width={{ xs: '120px', md: '100px' }}
        height={{ xs: '120px', md: '100px' }}
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          transform: 'translateY(-50%)',
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 4,
          backgroundColor: '#ffffff',
          boxShadow:
            '0px 5px 50px 0px #00a5ff, 0px 0px 0px 7px rgb(79 188 248)',
        }}
      >
        {user?.image ? (
          <UserAvatar
            name={user.firstName}
            src={user?.image}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <UserAvatar
            name={user?.firstName ? user.firstName : 'A'}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              fontSize: '50px',
            }}
          />
        )}
      </Box>

      <Typography
        mt={1}
        my="auto"
        variant="h3"
        textAlign="center"
        color="text.primary"
      >
        Hi {user.firstName}...
      </Typography>
      <Box>
        <Typography m={2} component="p" variant="button" color="text.secondary">
          Upcoming Events
        </Typography>
        {events.length === 0 ? (
          <Typography
            m={2}
            component="p"
            variant="body1"
            color="text.secondary"
            textAlign="center"
          >
            Your Schedule is clear
          </Typography>
        ) : (
          events.map((event) => <FoldableCard event={event} key={event._id} />)
        )}
      </Box>
    </Box>
  )
}

export default NotificationCard
