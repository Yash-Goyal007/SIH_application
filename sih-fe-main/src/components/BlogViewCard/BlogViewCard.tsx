import { FavoriteBorder, ModeComment, Share } from '@mui/icons-material'
import { Card, CardHeader, Typography, CardActions } from '@mui/material'
import UserAvatar from '../../components/Avatar/Avatar'
import { FavoriteIconButton } from '../../components/Buttons/Buttons'
import { IBlog } from '../../interfaces/blog.interface'

const BlogCard = (props: { blog: IBlog }) => {
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
          props.blog.image && (
            <UserAvatar
              name={props.blog.createdBy.firstName}
              src={props.blog.image}
            />
          )
        }
        title={
          <Typography variant="h4" color="text.primary">
            {props.blog.title}
          </Typography>
        }
        subheader={
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="span"
            fontStyle="italic"
            fontWeight="400"
          >
            {new Date(props.blog.createdTimestamp).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </Typography>
        }
      />

      <CardActions>
        <FavoriteIconButton aria-label="add to favorites">
          <FavoriteBorder fontSize="small" />
        </FavoriteIconButton>
        <FavoriteIconButton aria-label="share">
          <Share />
        </FavoriteIconButton>
        <FavoriteIconButton
          aria-label="comment"
          sx={{ marginLeft: 'auto !important' }}
        >
          <ModeComment sx={{ mr: 1 }} />
          {props.blog.replies.length}
        </FavoriteIconButton>
      </CardActions>
    </Card>
  )
}

export default BlogCard
