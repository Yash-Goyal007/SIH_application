import { FavoriteBorder, ModeComment, Share } from '@mui/icons-material'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  CardMedia,
} from '@mui/material'
import { useContext, useState } from 'react'
import UserAvatar from '../../components/Avatar/Avatar'
import { FavoriteIconButton } from '../../components/Buttons/Buttons'
import UserContext from '../../context/UserContext'
import { IBlog } from '../../interfaces/blog.interface'
import NewReply from './NewReply'
import ReplyCard from './ReplyCard'

const BlogCard = (props: {
  blog: IBlog
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>
}) => {
  const [expanded, setExpanded] = useState(false)
  const { user } = useContext(UserContext)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        width: '100%',
        background: '#EEEEEE',
        boxShadow:
          '-12px -12px 24px rgba(142, 209, 252, 0.25), 12px 12px 24px #FFFFFF',
        borderRadius: '20px',
        my: 2,
        py: 2,
      }}
    >
      <CardHeader
        avatar={
          props.blog.showName ? (
            <UserAvatar
              name={props.blog.createdBy.firstName}
              src={props.blog.createdBy.image}
            />
          ) : (
            <UserAvatar name="Anonymous" />
          )
        }
        title={
          <Typography variant="h4" color="text.primary">
            {props.blog.title}
          </Typography>
        }
        subheader={
          <>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
            >
              {props.blog.showName
                ? props.blog.createdBy.firstName +
                  ' ' +
                  props.blog.createdBy.lastName
                : 'Anonymous'}
            </Typography>{' '}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="span"
              fontStyle="italic"
              fontWeight="400"
            >
              {new Date(props.blog.createdTimestamp).toLocaleDateString(
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
          </>
        }
      />

      {props.blog?.image && (
        <CardMedia
          component="img"
          height="194"
          image={props.blog.image}
          alt="Paella dish"
        />
      )}

      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {props.blog.description}
        </Typography>
      </CardContent>
      <CardActions>
        <FavoriteIconButton aria-label="add to favorites">
          <FavoriteBorder fontSize="small" />
        </FavoriteIconButton>
        <FavoriteIconButton aria-label="share">
          <Share />
        </FavoriteIconButton>
        <FavoriteIconButton
          aria-label="comment"
          sx={{ ml: 'auto !important', mr: 2 }}
          onClick={handleExpandClick}
        >
          <ModeComment />
        </FavoriteIconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {user?.profileType === 'Doctor' && (
          <NewReply bid={props.blog._id} setBlogs={props.setBlogs} />
        )}
        {props.blog.replies.map((reply) => (
          <ReplyCard key={reply._id} reply={reply} />
        ))}
      </Collapse>
    </Card>
  )
}

export default BlogCard
