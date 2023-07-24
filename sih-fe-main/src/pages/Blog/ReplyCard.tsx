import { Card, CardHeader, Typography } from '@mui/material'
import UserAvatar from '../../components/Avatar/Avatar'
import { IReply } from '../../interfaces/blog.interface'

const ReplyCard = (props: { reply: IReply }) => {
  return (
    <Card
      sx={{
        width: '90%',
        background: '#EEEEEE',
        boxShadow: 'none',
        border: 'none',
        margin: 'auto',
        my: 1,
        py: 1,
      }}
    >
      <CardHeader
        avatar={
          props.reply.repliedBy ? (
            <UserAvatar
              name={props.reply.repliedBy.firstName}
              src={props.reply.repliedBy.image}
            />
          ) : (
            <UserAvatar name="Anonymous" />
          )
        }
        title={
          <>
            <Typography
              variant="subtitle1"
              component="span"
              color="text.primary"
            >
              {props.reply.repliedBy.firstName +
                ' ' +
                props.reply.repliedBy.lastName}
            </Typography>{' '}
            <Typography
              variant="subtitle2"
              component="span"
              fontWeight="400"
              color="text.secondary"
            >
              {props.reply.description}
            </Typography>
          </>
        }
        subheader={
          <Typography
            variant="caption"
            color="text.secondary"
            fontStyle="italic"
            fontWeight="400"
          >
            {new Date(props.reply.repliedTimeStamp).toLocaleDateString(
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
        }
        sx={{ p: 1 }}
      />
    </Card>
  )
}

export default ReplyCard
